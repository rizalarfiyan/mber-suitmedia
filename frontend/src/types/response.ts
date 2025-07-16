export interface ListResponse<T extends object> {
  data: T[]
  links: ResponseLinks
  meta: ResponseMeta
}

export interface ResponseLinks {
  first: null | string
  last: null | string
  prev: null | string
  next: null | string
}

export interface ResponseMeta {
  current_page: number
  from: number
  last_page: number
  links: ResponseLink[]
  path: string
  per_page: number
  to: number
  total: number
}

export interface ResponseLink {
  url: null | string
  label: string
  active: boolean
}

export interface ErrorResponse {
  code: number
  message: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any[]
}
