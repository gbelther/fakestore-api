import { Order } from '@/domain/entities'

export interface ListOrdersByCpf {
  execute: (cpf: string) => Promise<Order[]>
}
