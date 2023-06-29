import { ListOrdersByCpfController } from '@/presentation/controllers/orders/listByCpf/ListOrdersByCpfController'
import { makeListOrdersByCpfUseCase } from '../useCases'

export const makeListOrdersByCpfController = (): ListOrdersByCpfController =>
  new ListOrdersByCpfController(makeListOrdersByCpfUseCase())
