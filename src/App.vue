<script setup>
import { RouterLink, RouterView } from 'vue-router'
import menuHeader from './components/menuHeader.vue'
import footComp from './components/footComp.vue';
</script>

<template>

  <header>
    <menuHeader/>
  </header>
  <main>

  </main>

  <footer>
    <footComp date="05/09/2025"/>
  </footer>

</template>

<style scoped>
  footer{
    background-color: rgb(15, 122, 15)
  }
</style>
