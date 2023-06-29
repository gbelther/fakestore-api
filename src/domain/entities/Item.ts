import { randomUUID } from 'node:crypto'

type Params = {
  id?: string
  name: string
  description: string
  price: number
  image?: string
}

export class Item {
  id: string
  name: string
  description: string
  price: number
  image?: string

  constructor({ id, name, description, price, image }: Params) {
    this.id = id ?? randomUUID()
    this.name = this.validateName(name)
    this.description = this.validateDescription(description)
    this.price = this.validatePrice(price)
    this.image = image
  }

  private validateName(name: string): string {
    if (!name) throw new Error('O campo nome é obrigatório.')
    return name
  }

  private validateDescription(description: string): string {
    if (!description) throw new Error('O campo descrição é obrigatório.')
    return description
  }

  private validatePrice(price: number): number {
    if (!price) throw new Error('O campo preço é obrigatório.')
    if (price <= 0) throw new Error('O preço deve ser maior que zero.')
    return price
  }
}
