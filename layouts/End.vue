<script setup lang="ts">
const gopherSrc = `${import.meta.env.BASE_URL}images/common/gopher_only.png`
</script>

<template>
  <div class="end-layout w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
    <div class="stripe" />
    <img :src="gopherSrc" class="gopher relative z-10" />
    <div class="content relative z-10 text-center mt-6">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.end-layout {
  background: #ffffff;
}

.stripe {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent 61.5%, #00bfcf 62% 100%);
  opacity: 0.12;
}

.gopher {
  width: 220px;
}

.content :deep(h1) {
  font-size: 2.25rem;
  font-weight: 800;
  color: #00232a;
  margin: 0;
}

.content :deep(p) {
  margin-top: 0.5rem;
  font-size: 1.1rem;
  color: #008ca6;
}
</style>
