import { useMoviesStore } from '@/stores/movies'
import { onMounted, ref, watch } from 'vue'

export type SearchBy = 'title' | 'genre'
export type SortBy = 'rating' | 'release date'

export function useMovies() {
  const searchInput = ref('')
  const searchBy = ref<SearchBy>('title')
  const sortBy = ref<SortBy>('release date')

  const { fetchMovies } = useMoviesStore()

  watch(sortBy, (value) => {
    fetchMovies(searchInput.value, searchBy.value, value)
  })

  onMounted(async () => {
    fetchMovies(searchInput.value, searchBy.value, sortBy.value)
  })

  return {
    searchInput,
    searchBy,
    sortBy
  }
}
