import { Order } from '@/domain/entities'
import { ListOrdersByCpf } from './ListOrdersByCpf'
import { OrdersRepository } from '@/domain/repositories'

export class ListOrdersByCpfUseCase implements ListOrdersByCpf {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async execute(cpf: string): Promise<Order[]> {
    const orders = await this.ordersRepository.listByCpf(cpf)
    return orders
  }
}
