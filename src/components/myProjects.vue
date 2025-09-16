<template>
    <h2 id="projects">Mes projets</h2>

    <section class="projet">
        <h3>Mon curriculum vitae</h3>
        <button id="bouton" v-on:click="toggleModale">
            <img class="photo" src="../assets/Etienne Saclier.jpg" alt="Une photo de moi">
        </button>
        
        
    </section>
    <modale v-bind:revele="revele" v-bind:toggle-modale="toggleModale"/>


    <br>
</template>

<script>
    import MonModale from './monModale.vue';

    export default{
        name : 'Contenu',
        data(){
            return{
                revele : false
            }
        },
        components : {
            'modale' : MonModale
        },
        methods: {
            toggleModale: function(){
                this.revele = !this.revele
            }
        }
    }

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
button:hover{
    cursor: pointer;
}
.photo:hover{
    width: 12rem;
}
</style>