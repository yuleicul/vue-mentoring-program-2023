<script lang="ts" setup>
import type { Movie } from '@/stores/types'
import MovieCard from './MovieCard.vue'
import { useMoviesStore } from '@/stores/movies'
import { useMovieDetailStore } from '@/stores/movieDetail'

const moviesStore = useMoviesStore()
const movieDetailStore = useMovieDetailStore()
const searchByGenre = async (movie: Movie) => {
  movieDetailStore.setMovie(movie)
  moviesStore.fetchMovies(movie.genres[0], 'genre', 'release date')
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
