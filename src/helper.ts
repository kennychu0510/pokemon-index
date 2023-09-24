const MAX_POKEMON_ID = 1000

export function getRandomPokemonId() {
  return Math.round(Math.random() * MAX_POKEMON_ID)
}

export function hectogramToKilogram(value: number) {
  return value / 10
}

export function decimetreToMeter(value: number) {
  return value / 10
}

export function getImgSrc(value: string, forDetail?: boolean) {
  if (forDetail) {  
    return 'https://' + value.slice(2).replace('70px', '250px')
  }
  return 'https://' + value.slice(2)
}

export function getImgTypeUrl(type: string) {
  return require(`./assets/images/types/${type}.png`)
}