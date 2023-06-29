import { CreateSession } from '@/domain/usecases/sessions/create'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { Input, Output } from './dtos'

export class CreateSessionController implements Controller {
  constructor(private readonly createSession: CreateSession) {}

  async handle(httpRequest: Input): Promise<HttpResponse<Output>> {
    const session = await this.createSession.execute({
      email: httpRequest.email,
      password: httpRequest.password,
    })
    return {
      statusCode: 200,
      body: session,
    }
  }
}
