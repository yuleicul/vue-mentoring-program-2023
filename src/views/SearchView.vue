<script lang="ts" setup>
import SearchHeader from '../components/SearchHeader.vue'
import SearchContent from '../components/SearchContent.vue'
import Logo from '../components/Logo.vue'
import { ref } from 'vue'
import type { Movie } from '@/components/MovieCard.vue'

const movies = ref<Movie[]>([])
const search = (result: Movie[]) => {
  movies.value = result
}
</script>

<template>
  <div class="w-full bg-netflix-gray-55 flex flex-col items-center">
    <div class="w-[1200px] shadow-2xl">
      <SearchHeader @search="search" />
      <SearchContent :movies="movies" />
      <div class="flex items-center justify-center h-16 bg-netflix-gray-42">
        <Logo />
      </div>
    </div>
  </div>
</template>
