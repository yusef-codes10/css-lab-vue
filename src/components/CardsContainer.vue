<script setup>
import data from '@/data/data.js'
import { ref } from 'vue'
import CardsComponent from './CardsComponent.vue'

const cards = ref(data)
console.log(data)
</script>

<template>
  <div class="components-container">
    <div class="title">components</div>
    <CardsComponent
      v-for="card in cards"
      :key="card.id"
      v-bind:card="card"
      v-bind:style="{ gridArea: card.girdArea }"
    />
  </div>
</template>

<style scoped>
.components-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    'button button animation icon'
    'button button textinput textinput'
    'miscellaneous miscellaneous modal modal';
  gap: 2rem;
  margin: 0 2rem;
  background-color: var(--text-color);
}

@media (max-width: 786px) {
  .components-container {
    grid-template-columns: 1fr;
    grid-template-areas:
      'button'
      'animation'
      'icon'
      'textinput'
      'miscellaneous'
      'modal';
  }
}
</style>
