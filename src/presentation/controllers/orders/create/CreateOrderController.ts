import { CreateOrder } from '@/domain/usecases/orders/create/CreateOrder'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { Input } from './dtos'

export class CreateOrderController implements Controller {
  constructor(private readonly createOrder: CreateOrder) {}

  async handle(httpRequest: Input): Promise<HttpResponse<void>> {
    if (!httpRequest.items || httpRequest.items.length === 0) {
      throw new Error('É necessário que tenha pelo menos 1 item no pedido')
    }
    await this.createOrder.execute({
      cpf: httpRequest.cpf,
      items: httpRequest.items,
    })

    return {
      statusCode: 201,
    }
  }
}
