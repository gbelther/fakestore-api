export type HashCompareParams = {
  plaintext: string
  digest: string
}

export interface Hash {
  hash: (plaintext: string) => Promise<string>
  compare: (params: HashCompareParams) => Promise<boolean>
}
