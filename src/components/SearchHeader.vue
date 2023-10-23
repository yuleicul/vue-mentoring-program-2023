<script lang="ts" setup>
import RadioButton from './RadioButton.vue'
import SearchButton from './SearchButton.vue'
import SearchInput from './SearchInput.vue'
import { useMovies } from '../composables/useMovies'
import { useMoviesStore } from '@/stores/movies'
import NetflixLogo from './NetflixLogo.vue'

const { searchInput, searchBy, sortBy } = useMovies()
const moviesStore = useMoviesStore()

const search = () => {
  moviesStore.fetchMovies(searchInput.value, searchBy.value, sortBy.value)
}
</script>

<template>
  <div class="bg-[url(@/assets/header-bg.png)] bg-center bg-cover">
    <div class="backdrop-blur-sm backdrop-brightness-50 px-16 py-4">
      <NetflixLogo />
      <div class="px-14 py-14">
        <div class="text-4xl uppercase font-light text-white mb-9">Find your movie</div>
        <div class="flex gap-3 mb-5">
          <SearchInput v-model="searchInput" @keyup.enter="search" />
          <SearchButton @click="search" />
        </div>
        <div>
          <span class="uppercase text-white/70 mr-4">Search by</span>
          <RadioButton name="search-by" :ids="['title', 'genre']" v-model="searchBy" />
        </div>
      </div>
    </div>
  </div>

  <div class="h-[70px] flex items-center mx-32 justify-between">
    <div class="text-white font-bold">{{ moviesStore.movies.length }} movies found</div>
    <div>
      <span class="uppercase text-white/70 mr-4">Sort by</span>
      <RadioButton name="sort-by" :ids="['release date', 'rating']" v-model="sortBy" />
    </div>
  </div>
</template>
