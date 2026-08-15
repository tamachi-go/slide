<template>
  <div class="section-layout w-full h-full flex flex-col justify-center px-20 relative overflow-hidden">
    <div class="bar" />
    <div class="content relative z-10 max-w-160">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.section-layout {
  background: #00bfcf;
}

.bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 12px;
  background: #008ca6;
}

.content :deep(h1) {
  font-size: 2.75rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.3;
  margin: 0;
}

.content :deep(p) {
  margin-top: 0.5rem;
  font-size: 1.1rem;
  color: #d6f6fa;
}
</style>
