<script setup>
import MainSection from '@/components/MainSection.vue'
import CardsContainer from '@/components/CardsContainer.vue'
</script>

<template>
  <div class="home">
    <section class="hero">
      <MainSection />
    </section>

    <section class="components">
      <CardsContainer />
    </section>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.hero {
  flex: 1; /* 🔥 fills available space */
  background-color: var(--brand-color);
}

.components {
  background-color: var(--text-color);
  padding: 2rem;
}

/*
.css-lab {

  background-color: var(--brand-color);
  display: flex;
  flex-direction: column;
}

.sections,
.components-section {
  background-color: var(--text-color);
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
} */
</style>
