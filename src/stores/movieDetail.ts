import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Movie } from './types'

export const useMovieDetailStore = defineStore('movieDetail', () => {
  const movie = ref<Movie | null>(null)

  function setMovie(value: Movie | null) {
    movie.value = value
  }

  return { movie, setMovie }
})
