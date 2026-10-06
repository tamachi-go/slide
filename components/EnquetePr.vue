<script setup lang="ts">
defineProps<{
  path: string
}>()
</script>

<template>
  <ImageCenter classes="h-420px" :path="path" />
</template>
