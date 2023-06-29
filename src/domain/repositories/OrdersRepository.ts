import { Order } from '../entities'

export interface OrdersRepository {
  create: (input: Order) => Promise<void>
  listByCpf: (cpf: string) => Promise<Order[]>
}
