<script lang="ts" setup>
import { type Directive } from 'vue'
import { type Movie } from '../utils/fetchMovies'

export type MovieCardProps = Pick<Movie, 'title' | 'releaseYear' | 'genres' | 'postUrl'>

const { title, releaseYear, genres, postUrl } = defineProps<MovieCardProps>()
let observer: IntersectionObserver | null = null
const vLazyload: Directive<HTMLImageElement, string> = {
  mounted: (el, { value }) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#intersection_change_callbacks
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load image
            el.src = value
            observer?.unobserve(el)
          }
        })
      },
      {
        root: null,
        threshold: 0
      }
    )
    observer.observe(el)
  },
  unmounted: (el) => {
    observer?.unobserve(el)
  }
}
</script>

<template>
  <div class="w-80 bg-netflix-gray-23">
    <div class="mb-5 h-[455px] overflow-hidden">
      <img v-lazyload="postUrl" alt="post" class="object-cover w-full h-full" />
    </div>
    <div class="flex justify-between text-white/70 mb-2">
      <div class="text-lg">{{ title }}</div>
      <div class="text-sm border border-netflix-gray-97/50 rounded px-4 py-0.5 h-7">
        {{ releaseYear }}
      </div>
    </div>
    <div class="text-white/50 text-sm">{{ genres.join(' & ') }}</div>
  </div>
</template>
