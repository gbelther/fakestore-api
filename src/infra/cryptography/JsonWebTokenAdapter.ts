import { sign, verify } from 'jsonwebtoken'
import { Crypt, EncryptParams } from '@/domain/cryptography'

export class JsonWebTokenAdapter implements Crypt {
  constructor(
    private readonly secret: string,
    private readonly secondsToExpire: number,
  ) {}

  async encrypt(params: EncryptParams): Promise<string> {
    return sign(params, this.secret, { expiresIn: this.secondsToExpire })
  }

  async decrypt(cryptography: string): Promise<string> {
    return verify(cryptography, this.secret) as string
  }
}
