<script lang="ts" setup>
import type { Pokemon } from '@/type'
import { decimetreToMeter, hectogramToKilogram } from '@/helper'
import PokemonType from '@/components/PokemonType.vue'
import pokemonList from '@/assets/pokemonIndex.json'
const pokemon = defineProps<Pokemon>()
const localPokemon = pokemonList.find(
  (item) => item.englishName.toLowerCase() === pokemon.name.toLocaleLowerCase()
)
const hkName = localPokemon?.hkName === '-' ? '' : localPokemon?.hkName
const chinese = localPokemon?.simplifiedChinese === '-' ? '' : localPokemon?.traditionalChinese
</script>

<template>
  <div class="flex-col flex items-center my-4 justify-center flex-1">
    <img v-bind:src="pokemon.frontDefault" width="200" height="200" alt="pokemon image" />
    <h1 class="text-white font-bold uppercase text-xl">{{ pokemon.name }}</h1>
    <h1 class="text-white font-bold uppercase text-xl pb-4">{{ hkName }} ({{ chinese }})</h1>
    <table class="w-full my-2 text-white">
      <tr>
        <th class="text-left">Height</th>
        <td style="text-align: right">
          {{ pokemon.height > 0 ? decimetreToMeter(pokemon.height) + ' m' : 'Unknown' }}
        </td>
      </tr>
      <tr>
        <th class="text-left">Weight</th>
        <td style="text-align: right">
          {{ pokemon.height > 0 ? hectogramToKilogram(pokemon.weight) + ' kg' : 'Unknown' }}
        </td>
      </tr>
      <tr>
        <th class="text-left">Generation</th>
        <th style="text-align: right">
          {{ localPokemon?.generation.replace('Generation', '') }}
        </th>
      </tr>
    </table>
    <!-- <div class="flex flex-row gap-8">
      <div v-for="type in pokemon.types">
        <PokemonType :type="type.type.name" />
      </div>
    </div> -->
  </div>
</template>
