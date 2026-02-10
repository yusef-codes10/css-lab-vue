<script setup>
import data from '@/data/data.js'
import CardsComponent from './CardsComponent.vue'

const cards = data
console.log(data)
</script>

<template>
  <div class="components-container">
    <CardsComponent v-for="card in cards" :key="card.id" v-bind:card="card" />
  </div>
</template>

<style scoped>
.components-container {
  background-color: var(--text-color);
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}
</style>
