<script setup lang="ts">
withDefaults(defineProps<{
  ssid: string
  pass: string
}>(), {
  ssid: 'XXX',
  pass: 'XXX',
})
</script>

<template>
  <div class="h-full flex items-center justify-center -mt-20">
    <div class="grid grid-cols-[auto_1fr] gap-x-8 gap-y-6 items-center text-2xl">
      <span>SSID</span>
      <code class="text-3xl">{{ ssid }}</code>

      <span>PASS</span>
      <code class="text-3xl">{{ pass }}</code>
    </div>
  </div>
</template>
