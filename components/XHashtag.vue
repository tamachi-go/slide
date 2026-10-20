<script setup lang="ts">
const logoSrc = `${import.meta.env.BASE_URL}images/common/x_logo.png`
</script>

<template>
  <div class="flex items-center justify-center gap-2 text-sm font-bold text-[#008ca6]">
    <img :src="logoSrc" class="h-4 w-4" alt="X">
    <span>#tamachigo</span>
  </div>
</template>
