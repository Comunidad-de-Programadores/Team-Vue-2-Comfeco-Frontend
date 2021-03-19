<template lang="pug">
    div.main(id="app")
        Header(class="")
        Body.w-full.max-w-8xl(class="min-h-screen-good")
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
