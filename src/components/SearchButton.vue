<script lang="ts" setup>
const emit = defineEmits<{ (event: 'click'): void }>()
</script>

<template>
  <button
    type="button"
    @click="emit('click')"
    class="w-60 h-14 bg-netflix-pink rounded text-white text-xl uppercase"
  >
    Search
  </button>
</template>
