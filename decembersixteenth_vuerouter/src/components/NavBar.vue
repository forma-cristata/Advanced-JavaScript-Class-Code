<script>
export default {
  name: "NavBar.vue"
}
</script>

<template>
<div id="header">
  <header>
    <h1>Vue.js SPA</h1>
  </header>
  <nav>
    <router-link class="nav" :to="{
      name: 'Home',
      params: {msg: 'Welcome to your Vue.js App'}
    }">Home</router-link>
    <router-link class="nav" to="/Counter">Counter</router-link>
  </nav>
</div>
</template>

<style scoped>

</style>