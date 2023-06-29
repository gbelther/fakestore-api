import { expressAdaptRoute } from '@/infra/routes'
import { Router } from 'express'
import {
  makeCreateOrderController,
  makeListOrdersByCpfController,
} from '../factories/controllers'

const ordersRoutes = Router()

ordersRoutes.post('/', expressAdaptRoute(makeCreateOrderController()))
ordersRoutes.get('/:cpf', expressAdaptRoute(makeListOrdersByCpfController()))

export { ordersRoutes }
