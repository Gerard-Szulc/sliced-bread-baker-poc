<template>
  <div class="some-parent-wrapper">
    some parent wrapper
    <HelloWorld/>
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from "./HelloWorld.vue";
</script>

<style scoped>
.some-parent-wrapper {
  width: 300px;
  border: 1px solid black;
}
</style>