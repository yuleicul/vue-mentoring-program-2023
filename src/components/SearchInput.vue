<script lang="ts" setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    type="text"
    placeholder="What do you want to watch?"
    class="w-[710px] h-14 bg-netflix-gray-32/80 rounded p-4 text-xl text-white"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target?.value)"
  />
</template>
