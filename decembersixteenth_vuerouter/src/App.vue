<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <div class="container">
    <NavBar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>