<script lang="ts" setup>
import type { Movie } from '@/utils/fetchMovies'
import Logo from './Logo.vue'

const { movie } = defineProps<{ movie: Movie }>()
const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <div class="bg-[url(@/assets/header-bg.png)] bg-center bg-cover">
    <div class="backdrop-blur-sm backdrop-brightness-[0.1] px-16 py-4">
      <div class="flex justify-between">
        <Logo />
        <div @click="emit('click')" class="cursor-pointer text-lg">🔍</div>
      </div>
      <div class="flex py-10 gap-16 items-center">
        <div class="h-96 w-72">
          <img :src="movie.postUrl" alt="post" class="object-cover w-full h-full" />
        </div>
        <div class="text-white">
          <div class="flex items-center gap-2 mb-5">
            <div class="text-5xl">{{ movie.title }}</div>
            <div
              class="rounded-full text-netflix-green text-4xl border border-white h-14 w-14 flex justify-center items-center"
            >
              {{ movie.rating }}
            </div>
          </div>
          <div class="mb-5">{{ movie.genres.join(' & ') }}</div>
          <div class="flex mb-5 gap-10">
            <div>
              <span class="text-netflix-pink text-2xl">{{ movie.releaseYear }}</span>
              <span>year</span>
            </div>
            <div>
              <span class="text-netflix-pink text-2xl">{{ movie.duration }}</span>
              <span>min</span>
            </div>
          </div>
          <div>
            <!-- @Fixme: should be description -->
            {{ movie.title }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="h-[70px] flex items-center mx-32">
    <div class="text-white font-bold">Films by {{ movie.genres[0] }} genre</div>
  </div>
</template>
