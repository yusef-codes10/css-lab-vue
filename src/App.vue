<script setup>
import AppNav from '@/components/AppNav.vue'
import MainSection from '@/components/MainSection.vue'
import CardsContainer from './components/CardsContainer.vue'
</script>

<template>
  <div class="css-lab">
    <AppNav />
    <MainSection />
  </div>
  <!-- <div class="component-section"></div> -->
  <CardsContainer />
  <CardsContainer />
  <CardsContainer />
  <CardsContainer />
  <h2>Yes yyyyyyyyyyyyyyyyyyy</h2>
</template>

<style scoped>
.css-lab {
  background-color: var(--brand-color);
  height: 100dvh;
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* out of the hero section... */
.sections,
.component-section {
  /* margin: 0 1rem; */
  background-color: var(--text-color);
  /* flex: 1; */
  height: 100%;
  padding: 2rem;
}

.comp-title {
  color: var(--brand-color);
  font-size: 2rem;
  font-weight: 900;
  margin: 0.2rem 2rem;
}

.paragraph {
  margin: 0.2rem 2rem;
  font-size: 1.2rem;
  color: var(--brand-color);
}
</style>
