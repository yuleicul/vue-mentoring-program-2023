<script lang="ts" setup>
export type Movie = {
  title: string
  releaseYear: string
  genres: string[]
  postUrl: string
}
const { title, releaseYear, genres, postUrl } = defineProps<Movie>()
</script>

<template>
  <div class="w-80 bg-netflix-gray-23">
    <div class="h-[455px] bg-cover mb-5" :class="`bg-[url(${postUrl})]`"></div>
    <div class="flex justify-between text-white/70 mb-2">
      <div class="text-lg">{{ title }}</div>
      <div class="text-sm border border-netflix-gray-97/50 rounded px-4 py-0.5">
        {{ releaseYear }}
      </div>
    </div>
    <div class="text-white/50 text-sm">{{ genres.join(' & ') }}</div>
  </div>
</template>
