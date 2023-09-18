const MAX_POKEMON_ID = 100

export function getRandomPokemonId() {
  return Math.round(Math.random() * MAX_POKEMON_ID)
}

export function hectogramToKilogram(value: number) {
  return value / 10
}

export function decimetreToMeter(value: number) {
  return value / 10
}
