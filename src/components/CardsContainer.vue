<script setup></script>

<template>
  <div class="components-container">this is where we use v-for to laod content</div>
</template>

<style scoped>
.components-container {
  background-color: var(--text-color);
  display: grid;
  grid-template-columns: repeat(1 1fr);
}
</style>
