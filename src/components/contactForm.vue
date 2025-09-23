<template>

        <h2>Contactez-moi</h2>

    <section>

            <form action="mailto:saclieretienne@gmail.com" method="post" id="contact">

                <label for="barre" class="ligne">Nom et Prénom : &nbsp;
                    <input id="barre" type="text" placeholder="Nom Prénom">
                </label>
                
                <label for="barre-2" class="ligne">Objet : &nbsp;
                    <input id="barre-2" type="text" placeholder="Objet de votre message">
                </label>
                
                <label for="barre-msg" class="ligne">Message : &nbsp;
                    <textarea name="barre-msg" id="barre-msg" placeholder="Entrez votre message ici"></textarea>
                </label>

                <input class="soumission" type="submit" value="Envoyer" id="bouton">

            </form>
        
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
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        margin: 0% 35% 10% 35%;
        padding: 2rem;
        background-color: rgb(15, 122, 15, 0.5);
        border-radius: 20%;

    }
    form:hover{
        box-shadow: 5px 5px 5px rgb(15, 122, 15);
    }
    .ligne{ 
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }
    textarea{
        width: 228px;
        height: 106px;
    }
    #bouton{
        width: 100px;
        height: 37px;
    }
    #bouton:hover{
        cursor: pointer;
    }
    label{
    font-family: "Quintessential", sans-serif;
    font-weight: 200;
    font-style: normal
    }
    ::placeholder{
    font-family: "Quintessential", sans-serif;
    font-weight: 100;
    font-style: normal
    }
    #barre:hover{
        width: 13rem;
    }
    #barre-msg:hover{
        width: 20rem;
    }
    #barre-2:hover{
        width: 13rem;
    }
    #barre-2-msg:hover{
        width: 20rem;
    }
    .soumission{
        font-size: 1rem;
        font-family: "Quintessential", sans-serif;
        font-weight: 250;
        font-style: normal 
    }
    .soumission:hover{
        border-style: double;
        border-color: rgb(15, 122, 15);
        background-color:  yellow;
        color: rgb(51, 51, 227);
    }
</style>