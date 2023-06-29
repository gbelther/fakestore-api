import {
  CreateSession,
  CreateSessionUseCase,
} from '@/domain/usecases/sessions/create'
import { makeCustomersRepository } from '../repositories'
import { makeCrypt, makeHash } from '../cryptography'

export const makeCreateSessionUseCase = (): CreateSession => {
  const secretAccessToken = process.env.SECRET_ACCESS_TOKEN || ''
  const secondsToExpireAccessToken = Number(
    process.env.SECONDS_EXPIRE_ACCESS_TOKEN,
  )
  const secretRefreshToken = process.env.SECRET_REFRESH_TOKEN || ''
  const secondsToExpireRefreshToken = Number(
    process.env.SECONDS_EXPIRE_REFRESH_TOKEN,
  )
  return new CreateSessionUseCase(
    makeCustomersRepository(),
    makeHash(),
    makeCrypt(secretAccessToken, secondsToExpireAccessToken),
    makeCrypt(secretRefreshToken, secondsToExpireRefreshToken),
  )
}
