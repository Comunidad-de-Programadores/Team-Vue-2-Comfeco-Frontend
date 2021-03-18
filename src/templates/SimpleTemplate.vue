<template lang="pug">
    div.main(id="app") 
        CleanHeader(class="")
        Body.max-w-8xl(class="min-h-screen-good")
        Footer
        Loading
</template>

<script>
import Body from "@/layout/Body.vue";
import CleanHeader from "@/layout/CleanHeader.vue";
import Footer from "@/layout/Footer.vue";
import Loading from "@/components/Loading/Loading.vue";

export default {
    name: "SimpleTemplate",
    components: {
        Body,
        CleanHeader,
        Footer,
        Loading
    },
    data() {
        return {};
    },
    created() {}
};
</script>
