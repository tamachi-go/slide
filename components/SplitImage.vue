<script setup lang="ts">
withDefaults(defineProps<{
  path: string
  classes?: string
}>(), {
  classes: 'w-full',
})
</script>

<template>
  <div class="grid grid-cols-2 gap-8 items-start mt-4">
    <div>
      <slot />
    </div>
    <div>
      <img :class="classes" :src="path" />
    </div>
  </div>
</template>
