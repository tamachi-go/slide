<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  path: string
  classes?: string
}>(), {
  classes: 'w-full',
})

const src = computed(() => import.meta.env.BASE_URL + props.path.replace(/^\//, ''))
</script>

<template>
  <div class="grid grid-cols-2 gap-8 items-start mt-4">
    <div>
      <slot />
    </div>
    <div>
      <img :class="classes" :src="src" />
    </div>
  </div>
</template>
