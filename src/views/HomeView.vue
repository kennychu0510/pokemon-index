<script setup lang="ts">
import PokemonCard from '@/components/PokemonCard.vue'
import PokemonLoading from '@/components/PokemonLoading.vue'
import SearchModal from '@/components/SearchModal.vue'
import Button from '@/components/Button.vue'
import { POKEMON_API } from '@/constant'
import { getRandomPokemonId, decimetreToMeter, hectogramToKilogram, getImgSrc } from '@/helper'
import type { LocalPokemon, Pokemon } from '@/type'
import { ref } from 'vue'

const pokemon = ref<Pokemon | null>()
const searchModalOpen = ref<boolean>(false)
const searchedPokemon = ref<LocalPokemon>()

async function getPokemon(pokemonName?: string) {
  pokemon.value = null
  const query = pokemonName ?? getRandomPokemonId()
  try {
    const res = await fetch(POKEMON_API + `pokemon/${query}`)
    const json = await res.json()
    console.log(json)
    const pokemonInfo = {
      id: json.id,
      name: json.name,
      frontDefault: json.sprites.front_default,
      height: json.height,
      weight: json.weight,
      types: json.types,
      generation: searchedPokemon.value?.generation ?? ''
    }
    pokemon.value = pokemonInfo
  } catch (error) {
    if (searchedPokemon.value) {
      pokemon.value = {
        frontDefault: getImgSrc(searchedPokemon.value.imageSrc),
        height: 0,
        weight: 0,
        id: Number(searchedPokemon.value.index.replace('#', '')),
        name: searchedPokemon.value.englishName,
        types: [],
        generation: searchedPokemon.value.generation
      }
    }
  }
}

function searchPokemon() {
  searchModalOpen.value = true
}

function onCloseSearchModal() {
  searchModalOpen.value = false
}

function setPokemon(pokemon: LocalPokemon) {
  searchedPokemon.value = pokemon
  getPokemon(pokemon.englishName.toLocaleLowerCase())
}

getPokemon()
</script>

<template>
  <main class="container w-[250px] flex-col flex">
    <Transition v-if="pokemon" name="fade">
      <PokemonCard v-bind="pokemon" />
    </Transition>
    <Transition v-else>
      <PokemonLoading />
    </Transition>
    <div class="flex gap-2 justify-center w-full mb-8 w-max[350px]">
      <Button @click="searchPokemon" label="Explore" />
    </div>
    <SearchModal
      v-bind:is-open="searchModalOpen"
      :on-close="onCloseSearchModal"
      :set-pokemon="setPokemon"
    />
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

main {
  height: 100dvh;
}
</style>
