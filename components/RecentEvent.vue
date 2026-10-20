<script setup lang="ts">
defineProps<{
  date: string
  path: string
}>()
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-8">
    <div class="text-3xl">{{ date }}</div>
    <ImageCenter classes="h-280px" :path="path" />
  </div>
</template>
