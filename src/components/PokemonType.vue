<script lang="ts" setup>
import { getImgTypeUrl } from '@/helper'
const { type } = defineProps<{ type: string }>()
</script>

<template>
  <div class="flex-col flex items-center my-4 h-3/4 justify-center">
    <img :src="getImgTypeUrl(type)" width="50" height="50" alt="pokemon image" />
    <h1 class="text-white font-bold uppercase my-2">{{ type }}</h1>
  </div>
</template>
