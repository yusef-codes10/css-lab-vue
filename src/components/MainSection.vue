<script setup></script>

<template>
  <main>
    <!-- ! creating the side bar for mobile -->
    <aside class="hidden">This is the side bar</aside>
    <section>
      <div class="cta-section">
        <div class="cta-title">CSS Library</div>
        <div class="cta-discription">
          Tired of writing the same style over and over?
          <br />
          Well, don't worry. CSS Lab got you covered.
        </div>
        <div class="cta-btn">
          <button>See More</button>
        </div>
      </div>
      <div class="img-section"></div>
    </section>
  </main>
</template>

<style scoped>
/* main section styling... */
main {
  display: flex;
  /* height: 100%;/ */
  /* flex: 1; */
  /* align-items: center; */
  /* background-color: red; */
}

aside {
  width: 30%;
  background-color: seagreen;
}

.cta-section {
  margin: min(5rem, 10vw);
}

.cta-section .cta-title {
  color: var(--text-color);
  font-size: clamp(1.5rem, 10vw, 4rem);
  font-weight: 900;
  margin: 1rem;
}

.cta-section .cta-discription {
  color: var(--text-color);
  font-size: clamp(1rem, 4vw + 1.2rem, 1.5rem);
  /* max-width: 700px; */
  margin: 1rem;
  max-width: 700px; /* to keep it readable across wide screens */
}

.cta-section button {
  margin: 1rem;
}

button {
  background-color: var(--secondary-color);
  color: var(--brand-color);
  font-size: 1.2rem;
  font-weight: 600;
  padding: 12px 16px;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background-color: var(--secondary-hover);
}
</style>
