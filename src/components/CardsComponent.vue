<script setup>
import { defineProps } from 'vue'

defineProps({
  card: {
    type: Object,
  },
})
</script>

<template>
  <div class="components-container"></div>
</template>

<style scoped>
.components-container {
  background-color: var(--text-color);
  display: grid;
  grid-template-columns: repeat(1 1fr);
}
</style>
