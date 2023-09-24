<script setup lang="ts">
defineProps<{
  label: string
  onClick: () => void
}>()
</script>

<template>
  <button @click="onClick"
    type="button"
    class="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br outline-0 ring-0 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
  >
    {{ label }}
  </button>
</template>
