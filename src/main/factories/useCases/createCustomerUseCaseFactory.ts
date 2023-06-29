import { CreateCustomerUseCase } from '@/domain/usecases/customers/create/CreateCustomerUseCase'
import { CreateCustomer } from '@/domain/usecases/customers/create'
import { BcryptAdapter } from '@/infra/cryptography'
import { makeCustomersRepository } from '../repositories'

export const makeCreateCustomerUseCase = (): CreateCustomer => {
  const passwordSalt = Number(process.env.PASSWORD_SALT)
  return new CreateCustomerUseCase(
    makeCustomersRepository(),
    new BcryptAdapter(passwordSalt),
  )
}
