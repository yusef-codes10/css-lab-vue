<script setup>
import { defineProps } from 'vue'

defineProps({
  card: {
    type: Object,
  },
})
</script>

<template>
  <h2>{{ card.id }}</h2>
  <p>{{ card.cardDiscription }}</p>
</template>

<style scoped></style>
