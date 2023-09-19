<script lang="ts" setup>
import SearchHeader from '../components/SearchHeader.vue'
import SearchContent from '../components/SearchContent.vue'
import MovieDetail from '../components/MovieDetail.vue'
import { useMovieDetailStore } from '@/stores/movieDetail'
import NetflixLogo from '@/components/NetflixLogo.vue'

const movieDetailStore = useMovieDetailStore()
</script>

<template>
  <div class="w-full bg-netflix-gray-55 flex flex-col items-center">
    <div class="w-[1200px] shadow-2xl">
      <MovieDetail v-if="movieDetailStore.movie" />
      <SearchHeader v-else />
      <SearchContent />
      <div class="flex items-center justify-center h-16 bg-netflix-gray-42">
        <NetflixLogo />
      </div>
    </div>
  </div>
</template>
