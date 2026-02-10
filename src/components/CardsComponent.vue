<script setup>
const props = defineProps({
  card: {
    type: Object,
  },
})
</script>

<template>
  <h2>{{ props.card.id }}</h2>
  <p>{{ props.card.cardDiscription }}</p>
</template>
