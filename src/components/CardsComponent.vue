<script setup>
defineProps({
  card: {
    type: Object,
  },
})
</script>

<template>
  <div class="card">
    <div class="langs-used">
      <span v-for="lang in card.langsUsed" :key="lang" class="lang" v-bind:class="lang">
        {{ lang.toUpperCase() }}
      </span>
    </div>
    <h2 class="card-title">{{ card.cardTitle }}</h2>
    <p>{{ card.cardDiscription }}</p>
    <button>Check</button>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--white-color);
  padding: 1rem 2rem;
  /* margin: 2rem; */
  border: 2px red solid;

  display: flex;
  flex-direction: column;
}

.langs-used {
  display: flex;
  gap: 6px;
  /* margin-right: 1rem; */
}

.html,
.css,
.js {
  padding: 2px 4px;
  border: 1px solid var(--brand-color);
  width: 50px;
  height: auto;
  text-align: center;
  font-weight: bold;
  font-size: 0.8rem;
  color: var(--text-color);
  border-radius: 2px;
}

.html {
  background-color: var(--html-color);
}
.css {
  background-color: var(--css-color);
}
.js {
  background-color: var(--js-color);
  color: var(--brand-color);
}

.card-title {
  margin: 1rem 0;
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--brand-color);
}

.card-discription {
  margin: 1rem 0;
  color: var(--brand-color);
}

button {
  font-size: 0.8rem;
  padding: 6px 8px;
  margin: 1rem 0;
  border-radius: 2px;
  border: 2px solid var(--brand-color);
  box-shadow:
    8px,
    8px,
    8px #000;

  align-self: flex-end;
  cursor: pointer;
  background-color: var(--secondary-color);
}

@media (max-width: 575px) {
  .cards {
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
