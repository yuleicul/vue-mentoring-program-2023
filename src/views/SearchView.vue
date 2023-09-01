<script lang="ts" setup>
import SearchHeader from '../components/SearchHeader.vue'
import SearchContent from '../components/SearchContent.vue'
import MovieDetail from '../components/MovieDetail.vue'
import Logo from '../components/Logo.vue'
import { ref } from 'vue'
import type { Movie } from '@/utils/fetchMovies'

const movies = ref<Movie[]>([])
const search = (result: Movie[]) => {
  movies.value = result
}

const clickedMovie = ref<Movie | null>(null)
const showMovieDetail = (movie: Movie) => {
  clickedMovie.value = movie
}
const hideMovieDetail = () => {
  clickedMovie.value = null
}
</script>

<template>
  <div class="w-full bg-netflix-gray-55 flex flex-col items-center">
    <div class="w-[1200px] shadow-2xl">
      <SearchHeader v-if="clickedMovie === null" @search="search" />
      <MovieDetail v-else :movie="clickedMovie" @click="hideMovieDetail" />
      <SearchContent :movies="movies" @click="showMovieDetail" />
      <div class="flex items-center justify-center h-16 bg-netflix-gray-42">
        <Logo />
      </div>
    </div>
  </div>
</template>
