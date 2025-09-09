<template>

    <section class="first-container">
        <a href="#top" class="photo">
            <img class="fleche" src="../assets/fleche-vers-le-haut.png" alt="Flèche permettant de remonter en haut dela page">
        </a>
        <h1 class="titre">Portfolio de Etienne Saclier</h1>  
    </section>
    <section>
        <nav>
            <ul class="second-container">
                <li>
                    <a href="#moi" style="text-decoration: none;">À propos de moi</a>
                </li>
                <li>
                    <a href="#projects" style="text-decoration: none;">Mes projets</a>
                </li>
                <li>
                    <a href="#contact" style="text-decoration: none;">Contactez-moi</a>
                </li>
            </ul>
        </nav>
    </section>

 
        

</template>

<script setup>
</script>

<style scoped>
.first-container{
    display: flex;
    height: 100px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center; 
    background-color: rgb(15, 122, 15)
}
.fleche{
    width: 3rem;
}
.fleche:hover{
    width: 3.5rem;
}
.second-container{
    display: flex;
    height: 75px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding-top: 0;
    list-style-type: none;
    background-color: rgb(15, 122, 15)
}
h1{
    font-size: 37px;
    text-decoration: underline rgb(213, 213, 47);
    text-underline-offset: 3px;
    color: rgb(51, 51, 227);
}
li{
    font-size: 25px;
}
nav ul li:hover{
    text-decoration: underline rgb(213, 213, 47);
    text-underline-offset: 3px;
}


</style>