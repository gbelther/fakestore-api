export type Input = {
  cpf: string
}

export type Output = Array<{
  id: string
  cpf: string
  code: string
  orderItems: {
    itemId: string
    price: number
    quantity: number
  }[]
}>
