import { Hash } from '@/domain/cryptography'
import { BcryptAdapter } from '@/infra/cryptography'

export const makeHash = (): Hash => {
  const hashSalt = Number(process.env.HASH_SALT)
  return new BcryptAdapter(hashSalt)
}
