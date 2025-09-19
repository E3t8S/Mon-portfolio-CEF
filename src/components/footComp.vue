<template>

    <section class="social">
        <a href="https://github.com/E3t8S" target="_blank">
            <img class="social-media" src="../assets/sociale.png" alt="Lien vers le profil GitHub d'Etienne">
        </a>
        <a href="https://www.linkedin.com/in/etienne-saclier-ba61b5249/" target="_blank">
            <img class="social-media" src="../assets/linkedin.png" alt="Lien vers le profil Linkedin d'Etienne">
        </a>
    </section>
    <section class="date">
        <small>Dernière mise à jour le :<time datetime="2025-09-19"> 19 Septembre 2025</time></small>
    </section>
    
    

</template>

<script setup>

</script>

<style>

    .social{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        align-items: center;
        margin: 0% 40% 0% 40%;
        height: 50px;
    }
     .date{ 
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        height: 10px;

    }
    .social-media{
        width: 2rem;
    }
    .social-media:hover{
        width: 2.5rem;
    }
</style>