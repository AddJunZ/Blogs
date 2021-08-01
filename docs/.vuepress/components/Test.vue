<template>
  <div class="wrapper">
    <div class="test">for test</div>
    <div class="block"></div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  mounted() {
    setTimeout(() => {
      console.log('123');
    }, 3000)
  }
}
</script>

<style>
.test {
  color: rgb(230, 227, 73);
}
.block {
  width: 100px;
  height: 100px;
  background-color: aqua;
}
</style>