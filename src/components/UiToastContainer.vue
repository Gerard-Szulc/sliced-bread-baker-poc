<template>
  <teleport to="body">
    <div class="toast-container">
      <template v-for="toast in toasts" :key="toast.id">
        <UIToastWrapper :toast="toast"/>
      </template>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import {useSlicedBreadBaker} from "../composables/slicedBreadBaker";
import UIToastWrapper from "./UIToastWrapper.vue";

const { toasts } = useSlicedBreadBaker()
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 0
}
</style>