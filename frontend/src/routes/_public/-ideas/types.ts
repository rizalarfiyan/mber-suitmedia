export interface IdeasResponse {
  id: number
  slug: string
  title: string
  content: string
  published_at: string
  deleted_at: null | string
  created_at: string
  updated_at: string
  small_image: ImageResponse[]
  medium_image: ImageResponse[]
  large_image: ImageResponse[]
}

export interface ImageResponse {
  id: number
  mime: string
  file_name: string
  url: string
}
