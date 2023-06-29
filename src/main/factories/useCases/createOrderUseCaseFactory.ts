import { CreateOrder } from '@/domain/usecases/orders/create/CreateOrder'
import { CreateOrderUseCase } from '@/domain/usecases/orders/create/CreateOrderUseCase'
import { makeItemsRepository, makeOrdersRepository } from '../repositories'

export const makeCreateOrderUseCase = (): CreateOrder =>
  new CreateOrderUseCase(makeItemsRepository(), makeOrdersRepository())
