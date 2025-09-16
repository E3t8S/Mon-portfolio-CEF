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
    height: 80px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0% 35% 0% 0.7%;
     
}

.fleche{
    width: 3rem;
}
.fleche:hover{
    width: 3.5rem;
}
.second-container{
    display: flex;
    height: 50px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    padding-top: 0;
    list-style-type: none;
    
}
h1{
    font-size: 2.5rem;
    text-decoration: underline rgb(213, 213, 47);
    text-underline-offset: 5px;
    color: rgb(51, 51, 227);
}
li{
    font-size: 1.5rem;
    font-family: "Quintessential", sans-serif;
    font-weight: 600;
    font-style: normal
    
}
nav ul li:hover{
    text-decoration: underline rgb(213, 213, 47);
    text-underline-offset: 3px;
}


</style>