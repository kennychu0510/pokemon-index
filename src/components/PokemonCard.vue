<script lang="ts" setup>
import type { Pokemon } from '@/type'
import { decimetreToMeter, hectogramToKilogram } from '@/helper'
const pokemon = defineProps<Pokemon>()
</script>

<template>
  <div class="flex-col flex items-center my-4 h-1/2 justify-center">
    <img v-bind:src="pokemon.frontDefault" width="200" height="200" alt="pokemon image" />
    <h1 class="text-white font-bold uppercase">{{ pokemon.name }}</h1>
    <table class="w-full my-2 text-white">
      <tr>
        <th class="text-left">Height</th>
        <td style="text-align: center">{{ decimetreToMeter(pokemon.height) + 'm' }}</td>
      </tr>
      <tr>
        <th class="text-left">Weight</th>
        <td style="text-align: center">{{ hectogramToKilogram(pokemon.weight) + 'Kg' }}</td>
      </tr>
    </table>
  </div>
</template>
