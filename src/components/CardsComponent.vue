<script setup>
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
