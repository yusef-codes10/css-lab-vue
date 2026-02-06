<script setup>
import AppNav from './components/AppNav.vue'
import MainSection from './components/MainSection.vue'
</script>

<template>
  <div class="css-lab">
    <AppNav />
    <MainSection />
  </div>
</template>

<style scoped>
.css-lab {
  background-color: var(--brand-color);
  height: 100dvh;
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
