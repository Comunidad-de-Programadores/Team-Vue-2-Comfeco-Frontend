<template lang="pug">
    div.main(id="app") 
        Header(class="")
        Body.w-full.max-w-8xl(class="min-h-screen-good pb-14")
        Footer  
</template>

<script>
import Body from "@/layout/Body.vue";
import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";
import authService from "@/services/authService.js";

export default {
    name: "General",
    components: {
        Body,
        Header,
        Footer
    },
    data() {
        return {
            auth: new authService()
        };
    },
    created() {}
};
</script>

<style lang="scss">
.main {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    background: url("../assets/images/Fondo.jpg") no-repeat fixed;
    background-size: cover;
    // opacity: 90%;
}
</style>
