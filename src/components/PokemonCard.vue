<script lang="ts" setup>
import type { Pokemon } from '@/type'
import { decimetreToMeter, hectogramToKilogram } from '@/helper'
import PokemonType from '@/components/PokemonType.vue'
const pokemon = defineProps<Pokemon>()
</script>

<template>
  <div class="flex-col flex items-center my-4 h-3/4 justify-center">
    <img v-bind:src="pokemon.frontDefault" width="200" height="200" alt="pokemon image" />
    <h1 class="text-white font-bold uppercase text-xl">{{ pokemon.name }}</h1>
    <table class="w-full my-2 text-white">
      <tr>
        <th>Height</th>
        <td style="text-align: center">{{ decimetreToMeter(pokemon.height) + 'm' }}</td>
      </tr>
      <tr>
        <th>Weight</th>
        <td style="text-align: center">{{ hectogramToKilogram(pokemon.weight) + 'Kg' }}</td>
      </tr>
    </table>
    <div class="flex flex-row gap-8">
      <div v-for="type in pokemon.types" >
        <PokemonType :type="type.type.name" />
      </div>
    </div>
  </div>
</template>
