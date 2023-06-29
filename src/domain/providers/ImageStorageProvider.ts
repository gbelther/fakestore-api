export interface ImageStorageProvider {
  uploadImgBase64: (imgBase64: string) => Promise<{ url: string }>
}
