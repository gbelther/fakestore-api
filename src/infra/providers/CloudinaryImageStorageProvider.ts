import { ImageStorageProvider } from '@/domain/providers'
import { cloudinary } from '@/infra/libs/cloudinary/client'

export class CloudinaryImageStorageProvider implements ImageStorageProvider {
  private cloudinaryClient: typeof cloudinary

  constructor() {
    this.cloudinaryClient = cloudinary
  }

  async uploadImgBase64(imgBase64: string): Promise<{ url: string }> {
    const response = await this.cloudinaryClient.uploader.upload(imgBase64, {
      folder: 'fakestore',
    })
    return {
      url: response.url,
    }
  }
}
