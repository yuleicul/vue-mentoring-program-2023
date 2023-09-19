<script lang="ts" setup>
import SearchHeader from '../components/SearchHeader.vue'
import SearchContent from '../components/SearchContent.vue'
import MovieDetail from '../components/MovieDetail.vue'
import Logo from '../components/Logo.vue'
import { useMovieDetailStore } from '@/stores/movieDetail'

const movieDetailStore = useMovieDetailStore()
</script>

<template>
  <div class="w-full bg-netflix-gray-55 flex flex-col items-center">
    <div class="w-[1200px] shadow-2xl">
      <MovieDetail v-if="movieDetailStore.movie" />
      <SearchHeader v-else />
      <SearchContent />
      <div class="flex items-center justify-center h-16 bg-netflix-gray-42">
        <Logo />
      </div>
    </div>
  </div>
</template>
