import { Item } from '@/domain/entities'
import { ItemsRepository } from '@/domain/repositories'
import { ImageStorageProvider } from '@/domain/providers'
import { CreateItem } from './CreateItem'
import { Input } from './dtos'

export class CreateItemUseCase implements CreateItem {
  constructor(
    private readonly itemsRepository: ItemsRepository,
    private readonly imageStorageProvider: ImageStorageProvider,
  ) {}

  async execute(input: Input): Promise<void> {
    let imageUrl: string | undefined
    if (input.image) {
      const { url } = await this.imageStorageProvider.uploadImgBase64(
        input.image,
      )
      imageUrl = url
    }
    const item = new Item({
      name: input.name,
      description: input.description,
      price: input.price,
      image: imageUrl,
    })
    await this.itemsRepository.create(item)
  }
}
