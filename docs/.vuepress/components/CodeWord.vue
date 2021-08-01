<template>
  <div class="word">{{ word }}</div>
</template>

<script>
export default {
  props: {
    word: {
      type: String
    }
  }
}
</script>

<style>
.word {
  color: rgb(83, 131, 203);
}
</style>