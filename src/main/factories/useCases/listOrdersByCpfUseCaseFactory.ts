import { ListOrdersByCpf } from '@/domain/usecases/orders/listByCpf/ListOrdersByCpf'
import { ListOrdersByCpfUseCase } from '@/domain/usecases/orders/listByCpf/ListOrdersByCpfUseCase'
import { makeOrdersRepository } from '../repositories'

export const makeListOrdersByCpfUseCase = (): ListOrdersByCpf =>
  new ListOrdersByCpfUseCase(makeOrdersRepository())
