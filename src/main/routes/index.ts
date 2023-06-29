import { Router } from 'express'
import { customersRoutes } from './customersRoutes'
import { itemsRoutes } from './itemsRoutes'
import { ordersRoutes } from './ordersRoutes'
import { sessionsRoutes } from './sessionsRoutes'

const router = Router()

router.use('/customers', customersRoutes)
router.use('/items', itemsRoutes)
router.use('/orders', ordersRoutes)
router.use('/sessions', sessionsRoutes)

export { router }
