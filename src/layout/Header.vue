<template lang="pug">
    section(class="lg:bg-gray-100")
        div(class="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto")
            div(class="flex flex-col container mx-auto lg:flex-row lg:items-center lg:justify-between mt py-4 px-4")
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
            this.user = manageStorage.getObject("user");
        }
    }
};
</script>
<style lang="scss" scoped></style>
