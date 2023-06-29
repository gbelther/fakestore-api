import { ListItemsController } from '@/presentation/controllers/items/list/ListItemsController'
import { makeListItemsUseCase } from '../useCases'

export const makeListItemsController = (): ListItemsController =>
  new ListItemsController(makeListItemsUseCase())
