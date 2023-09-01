import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { SearchBy, SortBy } from '@/composables/useMovies'

export type Movie = {
  title: string
  year: string
  genres: string[]
  posterurl: string
  imdbRating: number
  duration: string
  storyline: string
}

export const useMoviesStore = defineStore('movies', () => {
  const movies = ref<Movie[]>([])

  async function fetchMovies(input: string, searchBy: SearchBy, sortBy: SortBy) {
    const data = await fetch('https://tame-erin-pike-toga.cyclic.app/movies').then((res) =>
      res.json()
    )
    const filteredMovies = filterMovies(input, searchBy, data)
    const sortedMovies = sortMovies(sortBy, filteredMovies)
    movies.value = sortedMovies
  }

  function filterMovies(input: string, searchBy: SearchBy, movies: Movie[]) {
    return movies.filter((movie) => {
      if (searchBy === 'title') {
        return movie.title.toLowerCase().includes(input.toLowerCase())
      } else if (searchBy === 'genre') {
        return movie.genres.join(' ').toLowerCase().includes(input.toLowerCase())
      }
    })
  }

  function sortMovies(sortBy: SortBy, movies: Movie[]) {
    return movies.sort((prev, curr) => {
      if (sortBy === 'release date') {
        return +curr.year - +prev.year
      } else if (sortBy === 'rating') {
        return curr.imdbRating - prev.imdbRating
      }
      return 0
    })
  }

  return { movies, fetchMovies }
})
