import { Customer } from '@/domain/entities'
import { Hash } from '@/domain/cryptography'
import { CustomersRepository } from '@/domain/repositories'
import { CreateCustomer } from './CreateCustomer'
import { Input, Output } from './dtos'

export class CreateCustomerUseCase implements CreateCustomer {
  constructor(
    private readonly customersRepository: CustomersRepository,
    private readonly hash: Hash,
  ) {}

  async execute(input: Input): Promise<Output> {
    const customer = new Customer({
      name: input.name,
      cpfData: input.cpf,
      email: input.email,
      password: input.password,
    })
    const emailInUse = await this.customersRepository.findByEmail(
      customer.email,
    )
    if (emailInUse) throw new Error('Este E-mail já está em uso.')
    const passwordHashed = await this.hash.hash(input.password)
    customer.createPassword(passwordHashed)
    await this.customersRepository.create(customer)
  }
}
