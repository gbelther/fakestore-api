import { ItemsRepository } from '@/domain/repositories'
import { ItemsRepositoryDatabase } from '@/infra/repositories/database/ItemsRepositoryDatabase'

export const makeItemsRepository = (): ItemsRepository =>
  new ItemsRepositoryDatabase()
