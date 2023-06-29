import { CreateSessionController } from '@/presentation/controllers/sessions/create/CreateSessionController'
import { makeCreateSessionUseCase } from '../useCases'

export const makeCreateSessionController = (): CreateSessionController =>
  new CreateSessionController(makeCreateSessionUseCase())
