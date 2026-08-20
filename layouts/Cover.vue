<script setup lang="ts">
const gopherSrc = `${import.meta.env.BASE_URL}images/common/gopher_only.png`
</script>

<template>
  <div class="cover-layout w-full h-full flex flex-col justify-center px-20 relative overflow-hidden">
    <div class="stripe" />
    <img :src="gopherSrc" class="gopher" />
    <div class="content relative z-10 max-w-140">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.cover-layout {
  background: #ffffff;
}

.stripe {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #00bfcf 0%, #00bfcf 38%, transparent 38.5%);
  opacity: 0.12;
}

.gopher {
  position: absolute;
  right: 40px;
  bottom: 30px;
  width: 280px;
  opacity: 0.94;
  transform: rotate(-6deg);
}

.content :deep(h1) {
  font-size: 3rem;
  font-weight: 800;
  color: #00232a;
  line-height: 1.2;
  margin: 0;
}

.content :deep(p) {
  margin-top: 0.75rem;
  font-size: 1.25rem;
  color: #008ca6;
}
</style>
