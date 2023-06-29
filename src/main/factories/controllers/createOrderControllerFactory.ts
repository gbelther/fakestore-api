import { CreateOrderController } from '@/presentation/controllers/orders/create/CreateOrderController'
import { makeCreateOrderUseCase } from '../useCases'

export const makeCreateOrderController = (): CreateOrderController =>
  new CreateOrderController(makeCreateOrderUseCase())
