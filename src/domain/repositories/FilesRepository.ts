export interface FilesRepository {
  uploadImg(imgBase64: string): Promise<{ url: string }>
}
