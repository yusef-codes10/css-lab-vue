<script setup>
import AppNav from '@/components/AppNav.vue'
</script>

<template>
  <div class="layout">
    <AppNav />
    <div class="view">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}
.view {
  flex: 1;
  display: flex;
}
</style>
