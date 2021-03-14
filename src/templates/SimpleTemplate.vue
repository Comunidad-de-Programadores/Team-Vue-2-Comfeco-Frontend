<template>
    <div class="main" id="app">
        <CleanHeader></CleanHeader>
        <Body class="w-full.max-w-8xl min-h-screen-good"></Body>
        <Footer></Footer>
    </div>
</template>

<script>
import Body from "@/layout/Body.vue";
import CleanHeader from "@/layout/CleanHeader.vue";
import Footer from "@/layout/Footer.vue";

export default {
    name: "SimpleTemplate",
    components: {
        Body,
        CleanHeader,
        Footer
    },
    data() {
        return {};
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
