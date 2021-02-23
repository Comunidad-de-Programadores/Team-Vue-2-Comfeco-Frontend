<template lang="pug">
    div(class="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between mt py-4 px-4")
        TextHeader(:user_connected.sync="user")
        ButtonNavbar(:user_connected.sync="user")            
</template>
<script>
import manageStorage from "../services/manageStorage";
import ButtonNavbar from "@/components/Header/ButtonNavbar";
import TextHeader from "@/components/Header/TextHeader";

export default {
    name: "Header",
    components: {
        ButtonNavbar,
        TextHeader
    },
    data() {
        return {
            user: manageStorage.getObject("user")
        };
    },
    created() {
        window.bus.$on("login", () => {
            this.fillUser();
        });
        window.bus.$on("logout", () => {
            this.fillUser();
        });
    },
    methods: {
        fillUser: function() {
            console.log("HERE");
            this.user = manageStorage.getObject("user");
        }
    }
};
</script>
<style lang="scss" scoped></style>
