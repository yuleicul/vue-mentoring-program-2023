<script lang="ts" setup>
import { useMovieDetailStore } from '@/stores/movieDetail'
import { storeToRefs } from 'pinia'
import NetflixLogo from './NetflixLogo.vue'

const movieDetailStore = useMovieDetailStore()
const { movie } = storeToRefs(movieDetailStore)
</script>

<template>
  <div v-if="movie">
    <div class="bg-[url(@/assets/header-bg.png)] bg-center bg-cover">
      <div class="backdrop-blur-sm backdrop-brightness-[0.1] px-16 py-4">
        <div class="flex justify-between">
          <NetflixLogo />
          <div @click="movieDetailStore.setMovie(null)" class="cursor-pointer text-2xl">🔍</div>
        </div>
        <div class="flex py-10 gap-16 items-center">
          <div class="h-96 w-72 flex-shrink-0">
            <img :src="movie.posterurl" alt="poster" class="object-cover w-full h-full" />
          </div>
          <div class="text-white/80">
            <div class="flex items-center gap-5 mb-5">
              <div class="text-5xl">{{ movie.title }}</div>
              <div
                class="flex-shrink-0 rounded-full text-netflix-green text-2xl border border-white h-14 w-14 flex justify-center items-center"
              >
                {{ movie.imdbRating }}
              </div>
            </div>
            <div class="mb-5">{{ movie.genres.join(' & ') }}</div>
            <div class="flex mb-5 gap-10">
              <div>
                <span class="text-netflix-pink text-2xl">{{ movie.year }}</span>
                <span>year</span>
              </div>
              <div>
                <span class="text-netflix-pink text-2xl">{{
                  movie.duration.substring(2, movie.duration.length - 1)
                }}</span>
                <span>min</span>
              </div>
            </div>
            <div>
              {{ movie.storyline }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="h-[70px] flex items-center mx-32">
      <div class="text-white font-bold">Films by {{ movie.genres[0] }} genre</div>
    </div>
  </div>
</template>
