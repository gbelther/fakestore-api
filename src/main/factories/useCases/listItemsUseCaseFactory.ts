import { ListItems } from '@/domain/usecases/items/list/ListItems'
import { ListItemsUseCase } from '@/domain/usecases/items/list/ListItemsUseCase'
import { makeItemsRepository } from '../repositories'

export const makeListItemsUseCase = (): ListItems =>
  new ListItemsUseCase(makeItemsRepository())
