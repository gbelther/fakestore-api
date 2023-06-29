import { Item } from '@/domain/entities'
import { ListItems } from '@/domain/usecases/items/list/ListItems'
import { Controller, HttpResponse } from '@/presentation/protocols'

export class ListItemsController implements Controller {
  constructor(private readonly listItems: ListItems) {}

  async handle(): Promise<HttpResponse<Item[]>> {
    const { items } = await this.listItems.execute()
    return {
      statusCode: 200,
      body: items,
    }
  }
}
