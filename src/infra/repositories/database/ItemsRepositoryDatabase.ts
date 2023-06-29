import { Item } from '@/domain/entities'
import { ItemsRepository } from '@/domain/repositories'
import { PrismaClient } from '@/infra/database/prisma/client'

export class ItemsRepositoryDatabase implements ItemsRepository {
  private clientPrisma: PrismaClient

  constructor() {
    this.clientPrisma = new PrismaClient()
  }

  async create(item: Item): Promise<void> {
    await this.clientPrisma.item.create({
      data: {
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.image,
      },
    })
  }

  async list(): Promise<Item[]> {
    const itemsData = await this.clientPrisma.item.findMany()
    return itemsData.map(
      (item) =>
        new Item({
          id: item.id,
          name: item.name,
          description: item.description,
          price: item.price,
          image: item.image || undefined,
        }),
    )
  }

  async findById(id: string): Promise<Item | undefined> {
    const itemFound = await this.clientPrisma.item.findFirst({
      where: { id },
    })
    if (!itemFound) return
    const item = new Item({
      id: itemFound.id,
      name: itemFound.name,
      description: itemFound.description,
      price: itemFound.price,
    })
    return item
  }
}
