<script setup lang="ts">
withDefaults(defineProps<{
  ssid: string
  pass: string
  compact?: boolean
}>(), {
  ssid: 'XXX',
  pass: 'XXX',
  compact: false,
})
</script>

<template>
  <div v-if="compact" class="mt-4 flex gap-8 text-lg text-[#008ca6]">
    <span>SSID <code class="text-xl">{{ ssid }}</code></span>
    <span>PASS <code class="text-xl">{{ pass }}</code></span>
  </div>
  <div v-else class="h-full flex items-center justify-center -mt-20">
    <div class="grid grid-cols-[auto_1fr] gap-x-8 gap-y-6 items-center text-2xl">
      <span>SSID</span>
      <code class="text-3xl">{{ ssid }}</code>

      <span>PASS</span>
      <code class="text-3xl">{{ pass }}</code>
    </div>
  </div>
</template>
