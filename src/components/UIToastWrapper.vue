<template>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="toastRef">
    <div class="toast-header">
      <strong class="me-auto">Vue Toast</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"
              @click="handleDismiss"></button>
    </div>
    <div class="toast-body">
      {{ toast.message }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ToastDto} from "../composables/slicedBreadBaker";
import {Toast} from "bootstrap";

const THROTTLE_TIME = 500;

type ToastProps = {
  toast: ToastDto
}
const props = defineProps<ToastProps>()

import {computed, onMounted, ref} from "vue";

const toastRef = ref()
const autoHiding = computed(() => !(!props.toast.duration || props.toast.duration < THROTTLE_TIME))

onMounted(() => {
  const options = {
    delay: (props.toast.duration || THROTTLE_TIME) - THROTTLE_TIME,
    autohide: autoHiding.value
  }
  const bootstrapToast = new Toast(toastRef.value, options)

  bootstrapToast.show()
})

const handleDismiss = () => {
  setTimeout(() => {
    props.toast.dismiss()
  }, THROTTLE_TIME)
}
</script>
