<script setup>
import { RouterLink, RouterView } from 'vue-router'
import menuHeader from './components/menuHeader.vue'
import footComp from './components/footComp.vue'
import aboutMe from './components/aboutMe.vue'
import AboutMe from './components/aboutMe.vue'
import myProjects from './components/myProjects.vue'
</script>

<template>

  <header>
    <menuHeader/>
  </header>
  
  <main>
    <section>
     <AboutMe/>
    </section>
    <section>
      <myProjects/>
    </section>

  </main>

  <footer>
    <footComp date="05/09/2025"/>
  </footer>

</template>

<style scoped>
  footer{
    background-color: rgb(15, 122, 15)
  }
  main{
    background-color: yellow;
    
  }
</style>
