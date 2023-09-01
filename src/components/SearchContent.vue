<script lang="ts" setup>
import { ref } from 'vue'
import type { Movie } from '../utils/fetchMovies'
import MovieCard from './MovieCard.vue'
import fetchMovies from '../utils/fetchMovies'

const { movies } = defineProps<{
  movies: Movie[]
}>()
const emit = defineEmits<{
  (e: 'click', movie: Movie): void
}>()

// @Todo with piana
const moviesSearchedByGenre = ref<Movie[]>()
const searchByGenre = async (movie: Movie) => {
  moviesSearchedByGenre.value = await fetchMovies(movie.genres[0], 'genre', 'rating')
  emit('click', movie)
}
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
        @click="() => searchByGenre(movie)"
      />
    </div>
  </div>
</template>
