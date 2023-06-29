import { CreateItem } from '@/domain/usecases/items/create/CreateItem'
import { CreateItemUseCase } from '@/domain/usecases/items/create/CreateItemUseCase'
import { makeItemsRepository } from '../repositories'
import { makeImageStorageProvider } from '../providers'

export const makeCreateItemUseCase = (): CreateItem =>
  new CreateItemUseCase(makeItemsRepository(), makeImageStorageProvider())
