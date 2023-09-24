export type Pokemon = {
  id: number
  name: string
  frontDefault: string
  weight: number
  height: number
  generation: string;
  types: {
    slot: number,
    type: {
      name: string;
      url: string;
    }
  }[]
}

export type LocalPokemon = {
  index: string;
  imageSrc: string;
  englishName: string;
  traditionalChinese: string;
  simplifiedChinese: string;
  hkName: string;
  generation: string;
}