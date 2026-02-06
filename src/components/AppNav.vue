<script setup></script>

<template>
  <nav>
    <h2 class="logo"><span>css</span>lab</h2>
    <i class="fa-solid fa-bars mobile-only ham-icon"></i>
    <!-- <i class="fa-solid fa-bars mobile-only"></i> -->
    <div class="headers">
      <a href="#">Buttons</a>
      <a href="#">Text Input</a>
      <a href="#">Animations</a>
      <a href="#">Menu Icons</a>
      <a href="#">How to</a>
    </div>
    <button>Blog</button>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: clamp(0.75rem, 2vw, 1.5rem) clamp(1rem, 4vw, 3rem);
}
nav .logo {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-color);
  padding: 1rem 2rem;
  cursor: pointer;
}

nav .logo span {
  color: var(--secondary-color);
}

nav .headers a {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--text-color);
  margin: 1rem;
  transition: 0.2s;
}

nav .headers a:hover {
  color: var(--text-hover);
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

.mobile-only {
  display: none;
}

.ham-icon {
  font-size: 2rem;
  color: var(--secondary-color);
}

@media (max-width: 800px) {
  .headers,
  .logo {
    display: none;
  }

  .mobile-only {
    display: block;
  }
}
</style>
