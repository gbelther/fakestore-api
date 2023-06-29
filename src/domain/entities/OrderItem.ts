import { randomUUID } from 'node:crypto'

type Params = {
  id?: string
  itemId: string
  price: number
  quantity: number
}

export class OrderItem {
  id: string
  itemId: string
  price: number
  quantity: number

  constructor({ id, itemId, price, quantity }: Params) {
    this.id = id ?? randomUUID()
    this.itemId = this.validateItemId(itemId)
    this.price = this.validatePrice(price)
    this.quantity = this.validateQuantity(quantity)
  }

  private validateItemId(itemId: string): string {
    if (!itemId) throw new Error('Item não encontrado')
    return itemId
  }

  private validatePrice(price: number): number {
    if (!price) throw new Error('Preço não informado')
    if (price <= 0) throw new Error('Preço inválido')
    return price
  }

  private validateQuantity(quantity: number): number {
    if (!quantity) throw new Error('Quantidade não informada')
    if (quantity <= 0) throw new Error('Quantidade inválida')
    return quantity
  }
}
