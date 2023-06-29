import { Item, Order } from '@/domain/entities'
import { ItemsRepository, OrdersRepository } from '@/domain/repositories'
import { CreateOrder } from './CreateOrder'
import { Input, Output } from './dtos'

export class CreateOrderUseCase implements CreateOrder {
  constructor(
    private readonly itemsRepository: ItemsRepository,
    private readonly ordersRepository: OrdersRepository,
  ) {}

  async execute(input: Input): Promise<Output> {
    const order = new Order({ cpfData: input.cpf })
    const orderItems: Item[] = []
    for (const item of input.items) {
      const itemFound = await this.itemsRepository.findById(item.itemId)
      if (!itemFound) throw new Error(`O item ${item.itemId} não existe`)
      orderItems.push(itemFound)
    }
    input.items.forEach((item, index) => {
      order.addItem(orderItems[index], item.quantity)
    })
    await this.ordersRepository.create(order)
    return { order }
  }
}
