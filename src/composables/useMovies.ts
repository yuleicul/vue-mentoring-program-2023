import type { Movie } from '@/components/MovieCard.vue'
import fetchMovies from '@/utils/fetchMovies'
import { onMounted, ref, watch } from 'vue'

export type SearchBy = 'title' | 'genre'
export type SortBy = 'rating' | 'release date'

export function useMovies(emit: (e: 'search', result: Movie[]) => void) {
  const searchInput = ref('')
  const searchBy = ref<SearchBy>('title')
  const sortBy = ref<SortBy>('rating')
  const searchResult = ref<Movie[]>([])

  watch(sortBy, async (value) => {
    searchResult.value = await fetchMovies(searchInput.value, searchBy.value, value)
    emit('search', searchResult.value)
  })

  const search = async () => {
    searchResult.value = await fetchMovies(searchInput.value, searchBy.value, sortBy.value)
    emit('search', searchResult.value)
  }

  onMounted(async () => {
    searchResult.value = await fetchMovies(searchInput.value, searchBy.value, sortBy.value)
    emit('search', searchResult.value)
  })

  return {
    searchInput,
    searchBy,
    sortBy,
    searchResult,
    search
  }
}
