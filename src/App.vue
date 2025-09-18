<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <RouterView/>

</template>

<style>
  header{
    position: fixed;
    top: 0;
    bottom: 82%;
    left: 0;
    right: 0;
    background-color:rgb(15, 122, 15)
    
  }
  footer{
    position: fixed;
    top: 90%;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(15, 122, 15)
    
  }
  main{
    background-color: yellow;
    
  }
  h1{
    font-family: "Quintessential", sans-serif;
    font-weight: 700;
    font-style: normal
  }
  h2{
    font-family: "Quintessential", sans-serif;
    font-weight: 300;
    font-style: normal 
  }
  p{
    font-family: "Quintessential", sans-serif;
    font-weight: 250;
    font-style: normal
  }
  h3{
    font-family: "Quintessential", sans-serif;
    font-weight: 200;
    font-style: normal
  }
  h4{
    font-family: "Quintessential", sans-serif;
    font-weight: 200;
    font-style: normal 
  }



</style>
