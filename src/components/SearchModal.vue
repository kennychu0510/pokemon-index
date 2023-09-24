<script lang="ts" setup>
import pokemonList from '@/assets/pokemonIndex.json'
import type { LocalPokemon } from '@/type'
import { computed, ref } from 'vue'
import { getImgSrc } from '@/helper'

const props = defineProps<{
  isOpen: boolean
  onClose: () => void
  setPokemon: (pokemon: LocalPokemon) => void
}>()

const searchPokemon = ref<string>('')

function onClickPokemon(pokemon: LocalPokemon) {
  props.setPokemon(pokemon)
  searchPokemon.value = ''
  props.onClose()
}

const filteredPokemons = computed(() => {
  if (!searchPokemon.value) return []
  return pokemonList.filter(
    (pokemon) =>
      pokemon.englishName.toLocaleLowerCase().includes(searchPokemon.value.trim().toLocaleLowerCase()) ||
      pokemon.hkName.includes(searchPokemon.value.trim()) ||
      pokemon.simplifiedChinese.includes(searchPokemon.value.trim()) ||
      pokemon.traditionalChinese.includes(searchPokemon.value.trim())
  )
})

function getChineseName(pokemon: LocalPokemon) {
  if (pokemon.hkName !== '-') return pokemon.hkName
  return pokemon.traditionalChinese
}
</script>

<template>
  <transition>
    <div v-if="props.isOpen">
      <div @click="props.onClose" class="absolute bg-black opacity-70 inset-0 z-0"></div>
      <div class="flex items-center justify-center absolute inset-0 pointer-events-none">
        <div
          class="mx-5 w-full max-w-lg p-3 relative my-auto rounded-xl shadow-lg bg-white opacity-100 pointer-events-auto"
        >
          <div>
            <div class="text-center p-3 flex-auto justify-center leading-6">
              <img src="../assets/images/pokeball.png" width="100" class="mx-auto" />
              <h2 class="text-2xl font-bold py-4">Find your pokemon</h2>
              <div>
                <input
                  id="input1"
                  class="w-full border px-4 py-2 rounded-lg focus:border-blue-500 focus:shadow-outline outline-none outline-none focus:border-red-500"
                  type="text"
                  placeholder="e.g Pikachu"
                  v-model="searchPokemon"
                />
              </div>
              <div class="h-52 my-2">
                <div
                  class="text-left border rounded-lg drop-shadow-lg bg-white max-h-48 overflow-y-auto"
                  v-if="filteredPokemons.length > 0"
                >
                  <ul v-for="pokemon in filteredPokemons">
                    <li @click="() => onClickPokemon(pokemon)" class="p-2">
                      <div class="flex gap-2 items-center">
                        <img :src="getImgSrc(pokemon.imageSrc)" class="w-[50px]"/>
                        <div>
                          {{ pokemon.englishName }} ({{ getChineseName(pokemon) }})
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
