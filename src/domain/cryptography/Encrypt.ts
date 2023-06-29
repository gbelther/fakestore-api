export type EncryptParams = object | string
export type DecryptParams = object | string

export interface Crypt {
  encrypt: (params: EncryptParams) => Promise<string>
  decrypt: (params: string) => Promise<DecryptParams>
}
