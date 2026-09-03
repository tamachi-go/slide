<script setup lang="ts">
defineProps<{
  path: string
}>()
</script>

<template>
  <ImageCenter classes="h-360px" :path="path" />
</template>
