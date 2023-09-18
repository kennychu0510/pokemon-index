<script setup lang="ts">
import { POKEMON_API } from '@/constant'
import { getRandomPokemonId, decimetreToMeter, hectogramToKilogram } from '@/helper'
import { ref } from 'vue'

type Pokemon = {
  id: number
  name: string
  frontDefault: string
  weight: number
  height: number
}

const searchValue = ref<string>()
const pokemon = ref<Pokemon | null>()

async function getPokemon() {
  console.log('getting pokemon info')
  const res = await fetch(POKEMON_API + `pokemon/${getRandomPokemonId()}`)
  const json = await res.json()
  console.log(json)
  const pokemonInfo = {
    id: json.id,
    name: json.name,
    frontDefault: json.sprites.front_default,
    height: json.height,
    weight: json.weight
  }
  pokemon.value = pokemonInfo
}

getPokemon();
</script>

<template>
  <main class="w-screen">
    <div class="flex gap-2 items-center w-4/5 mx-auto">
      <input
        v-model="searchValue"
        placeholder="Pikachu"
        class="px-2 py-1 rounded-sm outline-none w-full"
      />
      <button @click="getPokemon">
        <v-icon name="fc-search" scale="1.5" />
      </button>
    </div>
    <div v-if="pokemon" class="flex-col flex items-center my-4">
      <img v-bind:src="pokemon.frontDefault" width="200" height="200" alt="pokemon image" />
      <h1 class="text-white font-bold uppercase">{{ pokemon.name }}</h1>
      <table class="w-full my-2 text-white">
        <tr>
          <th>Height</th>
          <td style="text-align: center;">{{ decimetreToMeter(pokemon.height) + 'm' }}</td>
        </tr>
        <tr>
          <th >Weight</th>
          <td style="text-align: center;">{{ hectogramToKilogram(pokemon.weight) + 'Kg' }}</td>
        </tr>
      </table>
    </div>
  </main>
</template>
