import { ImageStorageProvider } from '@/domain/providers'
import { CloudinaryImageStorageProvider } from '@/infra/providers'

export const makeImageStorageProvider = (): ImageStorageProvider =>
  new CloudinaryImageStorageProvider()
