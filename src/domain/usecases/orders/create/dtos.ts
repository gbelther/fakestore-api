import { Order } from '@/domain/entities'

export type Input = {
  cpf: string
  items: { itemId: string; quantity: number }[]
}

export type Output = {
  order: Order
}
