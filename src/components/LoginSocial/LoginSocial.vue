<template lang="pug">
    div
        div(class="flex md:justify-between justify-center items-center mt-10")
            div(style="height: 1px;" class="bg-gray-300 md:block hidden w-4/12")
            p(class="md:mx-1 text-sm font-light text-gray-400") Redes Sociales
            div(style="height: 1px;" class="bg-gray-300 md:block hidden w-4/12")

        div(class="grid md:grid-cols-2 gap-2 mt-7")
            div
                button(class="rounded text-white font-bold uppercase text-xs text-center w-full text-white bg-red-900 p-2 duration-300 hover:bg-red-700" @click="loginSocial('google')" type="button") Google
            div
                button(class=" text-white font-bold uppercase text-xs text-center w-full bg-blue-900 p-2 duration-300 rounded hover:bg-blue-700" @click="loginSocial('facebook')" type="button") Facebook    
</template>

<script>
import authService from "@/services/authService";
export default {
    props: {
        termCondicionRegister: {
            type: Boolean,
            default: null
        }
    },
    data() {
        return {
            sending: false,
            auth: new authService()
        };
    },
    methods: {
        async loginSocial(socialNetwork) {
            if(this.termCondicionRegister !== null && !this.termCondicionRegister) {
                return this.$toast.open({
                    message: "Tiene que colocar, los terminos y condiciones para registro",
                    type: "error"
                });
            }
            this.sending = true;
            let response = await this.auth.loginSocial(socialNetwork);
            if (!response.error) {
                window.bus.$emit("login");
                this.$toast.open({
                    message: "Bienvenido a COMFECO",
                    type: "success"
                });
                this.$router.push("/");
            } else {
                console.log(response);
            }
            this.sending = false;
        }
    }
};
</script>

<style></style>
