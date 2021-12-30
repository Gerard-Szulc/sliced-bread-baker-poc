<script setup lang="ts">
import {ToastOptions, useSlicedBreadBaker} from "../composables/slicedBreadBaker";

const {addToast} = useSlicedBreadBaker()
const handleAddToast = () => addToast({ message: 'Custom message from HelloWorld' } as ToastOptions)

</script>

<template>
  <button type="button" @click="handleAddToast">Add toast from Hello world</button>
</template>
