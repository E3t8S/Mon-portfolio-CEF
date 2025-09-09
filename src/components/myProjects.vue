<template>
    <h2 id="projects">Mes projets</h2>

    <section class="projet">
        <h3>Mon curriculum vitae</h3>
        <button>
            <img class="photo" src="../assets/Etienne Saclier.jpg" alt="Une photo de moi">
        </button>
    </section>
    <br>
</template>

<script setup>
</script>

<style scoped>
h2{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: underline;
    text-underline-offset: 2px;
    font-size: 2rem;
    color: rgb(51, 51, 227)
    
}
.photo{
    width: 10rem;
}
.projet{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0% 25% 0% 25%;
    padding-bottom: 2%;
    background-color: rgb(15, 122, 15, 0.5)
}
.projet:hover{
    text-decoration: underline;
    box-shadow: 5px 5px 5px rgb(15, 122, 15);
    cursor: pointer;
}
</style>