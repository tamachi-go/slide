<script setup lang="ts">
withDefaults(defineProps<{
  note?: string
}>(), {
  note: '',
})
</script>

<template>
  <SplitImage path="/images/common/tamachi_area.png">
    田町駅から半径約20km(20060102150405nm)の Golang コミュニティ

    <ul>
      <li>Golangに限らずGopherのためになる話ならOK</li>
      <li>気軽に登壇できる場所</li>
      <li v-if="note">{{ note }}</li>
    </ul>
  </SplitImage>
</template>
