export interface ClientInterface {
  id: number
  name: string
  surname: string
  phone: string
  state: string
}

export interface TechInterface {
  id: number
  name: string
  price: number
}

export interface TechGroupInterface {
  id: number
  name: string
  rows: TechInterface[]
}
