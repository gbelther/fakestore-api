import { Router } from 'express'
import { expressAdaptRoute } from '@/infra/routes'
import {
  makeCreateItemController,
  makeListItemsController,
} from '../factories/controllers'

const itemsRoutes = Router()

itemsRoutes.post('/', expressAdaptRoute(makeCreateItemController()))
itemsRoutes.get('/', expressAdaptRoute(makeListItemsController()))

export { itemsRoutes }
