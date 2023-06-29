import { expressAdaptRoute } from '@/infra/routes'
import { Router } from 'express'
import { makeCreateCustomerController } from '../factories/controllers'

const customersRoutes = Router()

customersRoutes.post('/', expressAdaptRoute(makeCreateCustomerController()))

export { customersRoutes }
