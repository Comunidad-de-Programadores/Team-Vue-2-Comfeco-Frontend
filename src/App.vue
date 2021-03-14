<template lang="pug">
    component(:is="layout")
        slot
</template>

<script>
const defaultLayout = "General";
import authService from "@/services/authService.js";
export default {
    name: "AppLayout",
    computed: {
        layout() {
            const layout = this.$route.meta.layout || defaultLayout;
            return () => import(`@/templates/${layout}.vue`);
        }
    },
    data() {
        return {
            auth: new authService(),
            logoutFlag: false
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
    }
};
</script>

<style lang="scss"></style>
