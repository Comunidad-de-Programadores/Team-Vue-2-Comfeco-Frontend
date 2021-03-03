<template lang="pug">
    form(
        @submit.prevent="login()"
        class="mt-9"
    )
        div.my-5.text-sm( :class="{ 'form-group-error': $v.model.email.$error }")
            input( 
                type="text" 
                autofocus 
                class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" 
                placeholder="Correo electrónico" 
                v-model.trim="$v.model.email.$model"
            )
            div(v-if="$v.model.email.$dirty")
                .error.text-error.text-xs.text-center( v-if="!$v.model.email.required") Correo electrónico es necesario
                .error.text-error.text-xs.text-center(v-if="!$v.model.email.email")
                    | Debe ser un correo electrónico.        
            div(v-if="customErrors.email")
                .error.text-error.text-xs.text-center
                    | {{ customErrors.email }}
        div.my-5.text-sm( :class="{ 'form-group-error': $v.model.password.$error }")
            input( 
                type="password" 
                class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" 
                placeholder="Contraseña" 
                v-model.trim="$v.model.password.$model"
            )
            div(v-if="$v.model.password.$dirty")
                .error.text-error.text-xs.text-center(v-if="!$v.model.password.required") Contraseña necesaria

        .items-center.justify-between(class="text-center md:flex")
            .flex.items-center
                input.h-4.w-4.text-indigo-600.border-gray-300.rounded(id="remember_me" v-model="model.rememberMe" type="checkbox" class="focus:ring-indigo-500")
                label.ml-2.block.text-sm.text-gray-900() Recordar contraseña
            .text-sm(class="mt-3 md:mt-0")
                router-link.font-medium.text-gray-900(class="hover:text-indigo-500" to="recover-password") Olvidaste tu contraseña?
                
        button( class="block text-center p-3 duration-300 rounded hover:bg-purple-500 w-full mt-10 bg-purple-600 text-white font-bold uppercase text-xs px-4 py-2 focus:outline-none", :disabled="sending") Ingresar
        
        LoginSocial

</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import LoginSocial from "@/components/LoginSocial/LoginSocial";
import authService from "@/services/authService";
import errorManagement from "../../mixins/errorManagement";

export default {
    name: "LoginForm",
    mixins: [errorManagement],
    components: {
        LoginSocial
    },
    data() {
        return {
            submitStatus: null,
            auth: new authService(),
            sending: false,
            model: {
                email: "",
                password: "",
                rememberMe: false
            }
        };
    },
    validations: {
        model: {
            email: {
                required,
                email
            },
            password: {
                required
            }
        }
    },
    created() {},
    methods: {
        async login() {
            this.sending = true;
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = "ERROR";
                this.$toast.open({
                    message: "Hubo un error",
                    type: "error"
                });
            } else {
                // try {
                    let response = await this.auth.login(this.model);
                    if (!response.error) {
                        this.model = {
                            email: "",
                            password: "",
                            remember: false
                        };
                        this.submitStatus = "SUCCESS";
                        this.$router.push("/home");
                        window.bus.$emit("login");
                        this.$toast.open({
                            message: "Bienvenido a COMFECO",
                            type: "success"
                        });
                    }else{
                        this.showErrors(response)
                    }                                    
                // } catch (error) {
                //     console.log(error)
                //     this.showErrors(error);
                // }
            }
            this.sending = false;
        }
    }
};
</script>
