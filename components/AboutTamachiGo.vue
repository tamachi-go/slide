<script setup lang="ts">
withDefaults(defineProps<{
  note?: string
}>(), {
  note: '',
})
</script>

<template>
  <SplitImage path="/images/common/tamachi_area.png">
    <div class="text-[1.6rem]">
      田町駅から半径約20km(20060102150405nm)の<br/>Golangコミュニティ
      <ul>
        <li>Golangに限らずGopherのためになる話ならOK</li>
        <li>気軽に登壇できる場所</li>
        <li>初参加・Go初学者も歓迎!</li>
        <li v-if="note">{{ note }}</li>
      </ul>
    </div>
  </SplitImage>
</template>
