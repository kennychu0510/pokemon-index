<script lang="ts" setup>
const { type } = defineProps<{ type: string }>()

const imgUrl = new URL(`/src/assets/images/types/${type}.png`, import.meta.url).href
</script>

<template>
  <div class="flex-col flex items-center my-4 h-3/4 justify-center">
    <img :src="imgUrl" width="50" height="50" alt="pokemon image" />
    <h1 class="text-white font-bold uppercase my-2">{{ type }}</h1>
  </div>
</template>
