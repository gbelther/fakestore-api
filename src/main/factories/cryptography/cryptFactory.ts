import { Crypt } from '@/domain/cryptography'
import { JsonWebTokenAdapter } from '@/infra/cryptography/JsonWebTokenAdapter'

export const makeCrypt = (secret: string, secondsToExpire: number): Crypt =>
  new JsonWebTokenAdapter(secret, secondsToExpire)
