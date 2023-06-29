import { Router } from 'express'
import { expressAdaptRoute } from '@/infra/routes'
import { makeCreateSessionController } from '../factories/controllers'

const sessionsRoutes = Router()

sessionsRoutes.post('/', expressAdaptRoute(makeCreateSessionController()))

export { sessionsRoutes }
