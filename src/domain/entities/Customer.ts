import { randomUUID } from 'node:crypto'
import { Cpf } from './Cpf'

type Params = {
  id?: string
  name: string
  cpfData: string
  email: string
  password: string
}

export class Customer {
  id: string
  name: string
  cpf: Cpf
  email: string
  password: string

  constructor({ id, name, cpfData, email, password }: Params) {
    this.id = id ?? randomUUID()
    this.name = this.validateName(name)
    this.cpf = this.validateCpf(cpfData)
    this.email = this.validateEmail(email)
    this.password = this.validatePassword(password)
  }

  private validateName(name: string): string {
    if (!name) throw new Error('O campo nome é obrigatório.')
    return name
  }

  private validateCpf(cpfData: string): Cpf {
    const cpf = new Cpf(cpfData)
    return cpf
  }

  private validateEmail(email: string): string {
    if (!email) throw new Error('O campo E-mail é obrigatório.')
    return email
  }

  private validatePassword(password: string): string {
    if (!password) throw new Error('O campo senha é obrigatório.')
    return password
  }

  createPassword(password: string): void {
    this.password = password
  }
}
