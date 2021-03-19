<template lang="pug">
    div.main(id="app")
        CleanHeader(class="")
        Body.max-w-8xl(class="min-h-screen-good")
        Footer
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
