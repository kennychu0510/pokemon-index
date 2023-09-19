export type Pokemon = {
  id: number
  name: string
  frontDefault: string
  weight: number
  height: number
  types: {
    slot: number,
    type: {
      name: string;
      url: string;
    }
  }[]
}