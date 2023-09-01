<script lang="ts" setup>
import MovieCard from './MovieCard.vue'
import { useMoviesStore, type Movie } from '@/stores/movies'

const moviesStore = useMoviesStore()
const emit = defineEmits<{
  (e: 'click', movie: Movie): void
}>()

const searchByGenre = async (movie: Movie) => {
  moviesStore.fetchMovies(movie.genres[0], 'genre', 'release date')
  emit('click', movie)
  window.scrollTo(0, 0)
}
</script>

<template>
  <div class="bg-netflix-gray-23 px-16 py-16 flex flex-wrap gap-14">
    <div v-for="movie in moviesStore.movies">
      <MovieCard
        :key="movie.posterurl"
        :title="movie.title"
        :year="movie.year"
        :genres="movie.genres"
        :posterurl="movie.posterurl"
        @click="() => searchByGenre(movie)"
      />
    </div>
  </div>
</template>
