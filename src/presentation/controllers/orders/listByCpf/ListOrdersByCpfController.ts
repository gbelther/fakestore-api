import {
  Controller,
  HttpResponse,
  HttpStatusCode,
} from '@/presentation/protocols'
import { Input, Output } from './dtos'
import { ListOrdersByCpf } from '@/domain/usecases/orders/listByCpf/ListOrdersByCpf'

export class ListOrdersByCpfController implements Controller {
  constructor(private readonly listOrdersByCpf: ListOrdersByCpf) {}

  async handle(httpRequest: Input): Promise<HttpResponse<Output>> {
    if (!httpRequest.cpf) throw new Error('CPF inválido')
    const orders = await this.listOrdersByCpf.execute(httpRequest.cpf)
    const ordersMapped = orders.map((order) => ({
      ...order,
      cpf: order.cpf.value,
      orderItems: order.orderItems.map((item) => ({
        itemId: item.itemId,
        price: item.price,
        quantity: item.quantity,
      })),
    }))
    return {
      statusCode: HttpStatusCode.ok,
      body: ordersMapped,
    }
  }
}
