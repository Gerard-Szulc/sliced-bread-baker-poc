<script setup lang="ts">
import UiToast from "./components/UiToastContainer.vue";
import {ToastOptions, useSlicedBreadBaker} from "./composables/slicedBreadBaker";
import SomeParentComponent from "./components/SomeParentComponent.vue";

const {addToast} = useSlicedBreadBaker()
const handleAddToastAutoHidden = () => addToast({ message: 'With auto hide' } as ToastOptions)
const handleAddToast = () => addToast({ message: 'Without auto hide', duration: -1 } as ToastOptions)
</script>

<template>
  <UiToast/>
  <div class="buttons-wrapper">
    <SomeParentComponent/>
    <button @click="handleAddToastAutoHidden">Add toast from App with auto hiding</button>
    <button @click="handleAddToast">Add toast from App without auto hiding</button>
  </div>
</template>
<style>
.buttons-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
button {
  width: 300px
}
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
