<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const { currentLayout } = useNav()
const layoutsWithoutHashtag = new Set(['cover'])
const showHashtag = computed(() => !layoutsWithoutHashtag.has(currentLayout.value.toLowerCase()))
</script>

<template>
  <div v-if="showHashtag" class="hashtag">
    #tamachigo
  </div>
</template>

<style scoped>
.hashtag {
  position: absolute;
  right: 28px;
  bottom: 18px;
  z-index: 50;
  color: #00232a;
  font-size: 16px;
  font-weight: 700;
}
</style>
