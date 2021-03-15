<template lang="pug">
    component(:is="layout")
        slot
</template>

<script>
const defaultLayout = "General";
export default {
    name: "AppLayout",
    computed: {
        layout() {
            const layout = this.$route.meta.layout || defaultLayout;
            return () => import(`@/templates/${layout}.vue`);
        }
    },
    created() {
        window.bus.$on("logout", () => {
            this.$router.push("/home");
        });
    }
};
</script>

<style lang="scss"></style>
