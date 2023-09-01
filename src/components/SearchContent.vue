<script lang="ts" setup>
import type { Movie } from './MovieCard.vue'
import MovieCard from './MovieCard.vue'

const { movies } = defineProps<{
  movies: Movie[]
}>()
</script>

<template>
  <div class="bg-netflix-gray-23 px-16 py-16 flex flex-wrap gap-14">
    <div v-for="movie in movies">
      <MovieCard
        :key="movie.postUrl"
        :title="movie.title"
        :releaseYear="movie.releaseYear"
        :genres="movie.genres"
        :postUrl="movie.postUrl"
      />
    </div>
  </div>
</template>
