import { OrdersRepository } from '@/domain/repositories'
import { OrdersRepositoryDatabase } from '@/infra/repositories/database/OrdersRepositoryDatabase'

export const makeOrdersRepository = (): OrdersRepository =>
  new OrdersRepositoryDatabase()
