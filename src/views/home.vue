<template>

<header>
    <MenuHeader/>
</header>

<main>
    
    <section>
        <AboutMe/>
    </section>

    <section>
        <MyProjects/>
    </section>

    <section>
        <ContactForm/>
    </section>

</main>

<footer>
    <FootComp/>
</footer>

</template>
<script setup>
import AboutMe from '@/components/aboutMe.vue';
import ContactForm from '@/components/contactForm.vue';
import FootComp from '@/components/footComp.vue';
import MenuHeader from '@/components/menuHeader.vue';
import MyProjects from '@/components/myProjects.vue';
    
</script>