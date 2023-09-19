<script setup lang="ts">
import PokemonCard from '@/components/PokemonCard.vue'
import PokemonLoading from '@/components/PokemonLoading.vue'
import { POKEMON_API } from '@/constant'
import { getRandomPokemonId, decimetreToMeter, hectogramToKilogram } from '@/helper'
import type { Pokemon } from '@/type'
import { ref } from 'vue'

const searchValue = ref<string>()
const pokemon = ref<Pokemon | null>()

async function getPokemon() {
  console.log('getting pokemon info')
  pokemon.value = null
  const res = await fetch(POKEMON_API + `pokemon/${getRandomPokemonId()}`)
  const json = await res.json()
  console.log(json)
  const pokemonInfo = {
    id: json.id,
    name: json.name,
    frontDefault: json.sprites.front_default,
    height: json.height,
    weight: json.weight,
    types: json.types
  }
  pokemon.value = pokemonInfo
}

getPokemon()
</script>

<template>
  <main class="container w-[300px] h-screen flex-col flex">
    <div class="flex gap-2 items-center w-4/5 mx-auto mt-8">
      <input
        v-model="searchValue"
        placeholder="Pikachu"
        class="px-2 py-1 rounded-sm outline-none w-full"
      />
    </div>
    <Transition v-if="pokemon"  name="fade">
      <PokemonCard v-bind="pokemon" />
    </Transition>
    <Transition v-else>
      <PokemonLoading/>
    </Transition>
  </main>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
