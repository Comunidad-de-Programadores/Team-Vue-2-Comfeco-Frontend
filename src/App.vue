<template lang="pug">
    component(:is="layout")
        slot
</template>

<script>
import Vue from "vue";
const defaultLayout = "General";
import authService from "@/services/authService.js";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
 Vue.use(Loading);
export default {
    name: "AppLayout",
    computed: {
        layout() {
            const layout = this.$route.meta.layout || defaultLayout;
            return () => import(`@/templates/${layout}.vue`);
        }
    },
    components: {
        Loading
    },
    data() {
        return {
            auth: new authService(),
            logoutFlag: false,
            loader: {}
        };
    },
    created() {
        window.bus.$on("logout", async () => {
            if (this.logoutFlag) return;

            this.logoutFlag = true;
            this.auth.logout().then(() => {
                this.$router.push("/login").catch(error => console.log(error));
                this.logoutFlag = false;
            });
        });
    },
    beforeMount() {
        this.loader = this.$loading.show();
    },
    mounted() {
        this.loader.hide();
    },
    beforeUpdated() {
        this.loader = this.$loading.show();
    },
    updated() {
        this.loader.hide();
    }
};
</script>

<style lang="scss"></style>
