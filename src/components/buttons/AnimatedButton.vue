<script setup>
import { defineProps } from 'vue'

defineProps({
  btnText: {
    type: String,
    default: 'click',
  },
})
</script>
<template>
  <button>
    <span>Discover more </span>
    <img src="" alt="" />
  </button>
</template>
<style scoped></style>
