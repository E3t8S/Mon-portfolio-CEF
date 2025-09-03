<template>

    <section class="first-container">
        <a href="#" class="photo">
            <img src="../assets/fleche-vers-le-haut.png" alt="Flèche permettant de remonter en haut dela page">
        </a>
        <h1 class="titre">Portfolio de Etienne Saclier</h1>  
    </section>
    <section>
        <nav>
            <ul class="second-container">
                <li>
                    <a href="#" style="text-decoration: none;">À propos de moi</a>
                </li>
                <li>
                    <a href="#" style="text-decoration: none;">Mes projets</a>
                </li>
                <li>
                    <a href="#" style="text-decoration: none;">Contactez-moi</a>
                </li>
            </ul>
        </nav>
    </section>

 
        

</template>

<script setup>
</script>

<style>
.first-container{
    display: flex;
    height: 100px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;    
}
img{
    width: 3rem;
}
.second-container{
    display: flex;
    height: 100px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    list-style-type: none;
}


</style>