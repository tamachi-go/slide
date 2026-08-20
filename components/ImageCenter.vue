<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  path: string
  classes?: string
}>(), {
  classes: ''
})

const src = computed(() => import.meta.env.BASE_URL + props.path.replace(/^\//, ''))
</script>

<template>
  <div class="mt-16px grid place-items-center">
    <img :class="classes" :src="src" />
  </div>
</template>
