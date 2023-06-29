import { Input, Output } from './dtos'

export interface CreateSession {
  execute: (params: Input) => Promise<Output>
}
