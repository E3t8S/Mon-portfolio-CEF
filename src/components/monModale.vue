<template>
    
     <section class="modale" v-if="revele" >
        
        <section class="fond-module" v-on:click="toggleModale"></section>
        
        <section class="mon-module">
            <h4>Mon curriculum vitae</h4>
            <img src="../assets/Etienne Saclier.jpg" alt="Une photo de moi">
            <p>Avril 2025</p>
            <p>HTML/CSS</p>
            <a href="https://github.com/E3t8S/Mon-Curriculum-Vitae" target="_blank">Lien vers mon CV en ligne</a>
            <p><button class="mon-bouton" v-on:click="toggleModale">Fermer</button></p> 
        </section>
             
    
    </section> 
      
</template>

<script>
    export default {
        name : 'Modale',
        props: ['revele','toggleModale']
        
        
    }
</script>

<style scoped>
     
.modale{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
 
.fond-module{
    background-color:rgb(15, 122, 15, 0.3);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.mon-module{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(15, 122, 15);
    padding: 20px;
    position: fixed;
    top: 200px;
    border-radius: 20%;
    border-style:hidden;
}
.mon-bouton{
    position: absolute;
    bottom: 10px;
    right: 75px;
    width: 100px;
    height: 35px;
    padding: 2%;
    font-size: 1.1rem;
    font-family: "Quintessential", sans-serif;
    font-weight: 300;
    
}
.mon-bouton:hover{
    cursor: pointer;
    border-style: double;
    border-color: rgb(15, 122, 15);
    background-color:  yellow;
    color: rgb(51, 51, 227);
}
h4{
    text-decoration: underline;
    text-underline-offset: 2px;
    font-size: 1.5rem;
    color: rgb(51, 51, 227); 
}
img{
    width: 75px;
}
</style>
