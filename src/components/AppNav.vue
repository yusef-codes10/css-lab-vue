<script setup>
import RetroButton from './buttons/RetroButton.vue'

const greetUser = () => console.log('hey duuuuuuuuuuuuude')
</script>

<template>
  <nav>
    <div class="logo">
      <RouterLink to="/">
        <img src="/logo/soniq.png" alt="logo" />
      </RouterLink>
    </div>
    <i class="fa-solid fa-bars mobile-only ham-icon"></i>
    <!-- <i class="fa-solid fa-bars mobile-only"></i> -->
    <div class="headers">
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/buttons">Buttons</RouterLink>
      <RouterLink to="#">Text Input</RouterLink>
      <RouterLink to="/animations">Animations</RouterLink>
      <RouterLink to="/layouts">Layouts</RouterLink>
      <!-- <aRouterLink to="#">How to</aRouterLink> -->
    </div>
    <RetroButton @click="greetUser" :btnText="'nav'" />
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: clamp(0.75rem, 2vw, 1.5rem) clamp(1rem, 4vw, 3rem);
  background-color: var(--brand-color);
  /* height: 10vh; */
  height: var(--nav-height);
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

nav .logo a {
  text-decoration: none;
  color: var(--text-color);
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

/* button {
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
} */

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

/* ! img styling */
/* Logo container */
.logo {
  display: flex; /* aligns items horizontally */
  align-items: center; /* vertically center the logo */
  padding: 0 1rem; /* optional spacing around the logo */
}

/* Logo image */
.logo img {
  height: 50px; /* adjust height as needed */
  width: auto; /* maintain aspect ratio */
  cursor: pointer; /* makes it feel clickable */
  transition: transform 0.3s ease; /* smooth hover effect */
}

/* Optional hover effect */
.logo img:hover {
  transform: scale(1.05); /* slightly enlarges the logo on hover */
}
</style>
