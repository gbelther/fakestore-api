import { Hash, HashCompareParams } from '@/domain/cryptography'
import { compare, hash } from 'bcrypt'

export class BcryptAdapter implements Hash {
  constructor(private readonly salt: number) {}

  async hash(plaintext: string): Promise<string> {
    return await hash(plaintext, this.salt)
  }

  async compare(params: HashCompareParams): Promise<boolean> {
    return await compare(params.plaintext, params.digest)
  }
}
