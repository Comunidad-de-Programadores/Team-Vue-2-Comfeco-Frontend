<template lang="pug">
    div.main(id="app") 
        Header(class="")
        Body.w-full.general-body-container
        Footer
        Loading
</template>

<script>
import Body from "@/layout/Body.vue";
import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";
import Loading from "@/components/Loading/Loading.vue";
import authService from "@/services/authService.js";

export default {
    name: "General",
    components: {
        Body,
        Header,
        Footer,
        Loading
    },
    data() {
        return {
            auth: new authService()
        };
    },
    created() {}
};
</script>

<style lang="scss" src="@/assets/styles/general_body_container.scss"></style>
