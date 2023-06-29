import { CreateItem } from '@/domain/usecases/items/create/CreateItem'
import {
  Controller,
  HttpResponse,
  HttpStatusCode,
} from '@/presentation/protocols'
import { Input } from './dtos'

export class CreateItemController implements Controller {
  constructor(private readonly createItem: CreateItem) {}

  async handle(httpRequest: Input): Promise<HttpResponse<void>> {
    await this.createItem.execute({
      name: httpRequest.name,
      description: httpRequest.description,
      price: httpRequest.price,
      image: httpRequest.image,
    })

    return {
      statusCode: HttpStatusCode.created,
    }
  }
}
