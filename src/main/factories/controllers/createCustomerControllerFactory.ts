import { CreateCustomerController } from '@/presentation/controllers/customers'
import { makeCreateCustomerUseCase } from '../useCases'

export const makeCreateCustomerController = () =>
  new CreateCustomerController(makeCreateCustomerUseCase())
