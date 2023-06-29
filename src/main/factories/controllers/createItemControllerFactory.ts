import { CreateItemController } from '@/presentation/controllers/items'
import { makeCreateItemUseCase } from '../useCases'

export const makeCreateItemController = (): CreateItemController =>
  new CreateItemController(makeCreateItemUseCase())
