<script setup lang="ts">
withDefaults(defineProps<{
  path: string
  classes?: string
}>(), {
  classes: ''
})
</script>

<template>
  <div class="mt-16px grid place-items-center">
    <img :class="classes" :src="path" />
  </div>
</template>
