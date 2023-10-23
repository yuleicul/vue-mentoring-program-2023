<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  name: string
  ids: string[]
  modelValue?: string
}>()
const emit = defineEmits(['update:modelValue'])

const picked = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <span v-for="(id, index) in props.ids" :key="id">
    <input
      class="appearance-none"
      type="radio"
      :name="props.name"
      :id="id"
      :value="id"
      v-model="picked"
    />
    <label
      :for="id"
      class="cursor-pointer inline-flex justify-center items-center text-base px-6 h-8 text-white uppercase"
      :class="`${index === 0 ? 'rounded-l' : 'rounded-r'} ${
        picked === id ? 'bg-netflix-pink' : 'bg-netflix-gray-42/50'
      }`"
      >{{ id }}</label
    >
  </span>
</template>
