import { CustomersRepository } from '@/domain/repositories'
import { Crypt, Hash } from '@/domain/cryptography'
import { CreateSession } from './CreateSession'
import { Input, Output } from './dtos'

export class CreateSessionUseCase implements CreateSession {
  constructor(
    private readonly customersRepository: CustomersRepository,
    private readonly hash: Hash,
    private readonly cryptAccess: Crypt,
    private readonly cryptRefresh: Crypt,
  ) {}

  async execute(params: Input): Promise<Output> {
    const customer = await this.customersRepository.findByEmail(params.email)
    if (!customer) throw new Error('Credenciais inválidas')

    const passwordIsCorrect = await this.hash.compare({
      plaintext: params.password,
      digest: customer.password,
    })
    if (!passwordIsCorrect) throw new Error('Credenciais inválidas')

    const accessToken = await this.cryptAccess.encrypt({
      email: customer.email,
    })
    const refreshToken = await this.cryptRefresh.encrypt({
      email: customer.email,
    })

    return {
      accessToken,
      refreshToken,
    }
  }
}
