<template>

    <section class="social">
        <a href="https://github.com/E3t8S">
            <img src="../assets/sociale.png" target="_blank" alt="Lien vers le profil GitHub d'Etienne">
        </a>
        <a href="https://www.linkedin.com/in/etienne-saclier-ba61b5249/">
            <img src="../assets/linkedin.png" target="_blank" alt="Lien vers le profil Linkedin d'Etienne">
        </a>
    </section>
    <section class="date">
        <small>Dernière mise à jour le : {{ date }}</small>
    </section>

</template>

<script setup>
    defineProps({
        date:{
            type : String
        }
    })
</script>

<style>

    .social{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 100px;
        margin: 10px 50px 10px 100px;
        padding: auto;
    }
    .date{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 50px;
    }

</style>