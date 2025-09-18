<template>
    <section class="msg-error">
        <h1>Error 404</h1>
        <p>Oops, cette page n'a pas pu être trouvée.</p>
        <p>Merci de    <router-link to="/" class="btn">cliquer ici</router-link>    pour revenir à la page d'acceuil.</p>
    </section>

</template>

<script>
    export default{
        name: 'NotFound'
    }

</script>
<style scoped>

.msg-error{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 12%;
}

.btn{
    font-size:3rem;
    font-weight: 1000;
    text-decoration: none;
}
.btn:hover{
    text-decoration: underline;
    text-underline-offset: 10px;
}

 h1{
    font-size: 4rem;
    font-weight: 900;
    color: red;
 }

 p{
        font-size: 2rem;
    }


</style>