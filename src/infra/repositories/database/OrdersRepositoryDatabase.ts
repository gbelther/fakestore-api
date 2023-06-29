import { OrdersRepository } from '@/domain/repositories'
import { Order, OrderItem } from '@/domain/entities'
import { PrismaClient } from '@/infra/database/prisma/client'

export class OrdersRepositoryDatabase implements OrdersRepository {
  private clientPrisma: PrismaClient

  constructor() {
    this.clientPrisma = new PrismaClient()
  }

  async create(input: Order): Promise<void> {
    await this.clientPrisma.order.create({
      data: {
        id: input.id,
        cpf: input.cpf.cleanValue,
        code: input.code,
      },
    })
    await this.clientPrisma.orderItem.createMany({
      data: input.orderItems.map((item) => ({
        id: item.id,
        itemId: item.itemId,
        orderId: input.id,
        price: item.price,
        quantity: item.quantity,
      })),
    })
  }

  async listByCpf(cpf: string): Promise<Order[]> {
    const ordersData = await this.clientPrisma.order.findMany({
      where: {
        cpf,
      },
    })
    const ordersMapped: Order[] = []
    for (const orderData of ordersData) {
      const orderItems = await this.clientPrisma.orderItem.findMany({
        where: {
          orderId: orderData.id,
        },
      })
      const orderItemsMapped = orderItems.map(
        (orderItem) =>
          new OrderItem({
            id: orderItem.id,
            itemId: orderItem.itemId,
            price: orderItem.price,
            quantity: orderItem.quantity,
          }),
      )
      const order = new Order({
        id: orderData.id,
        cpfData: orderData.cpf,
        code: orderData.code,
        createdAt: new Date(orderData.createdAt),
      })
      order.orderItems = orderItemsMapped
      ordersMapped.push(order)
    }
    return ordersMapped
  }
}
