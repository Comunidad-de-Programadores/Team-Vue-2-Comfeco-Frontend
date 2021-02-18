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
        
        .error.text-md.font-semibold.text-center.mt-3(:class="{'text-error': submitStatus == 'ERROR', 'text-success': submitStatus == 'SUCCESS',}")
            h4(v-for="error in errors") {{error}}

        div(class="flex md:justify-between justify-center items-center mt-10")
            div(style="height: 1px;" class="bg-gray-300 md:block hidden w-4/12")
            p(class="md:mx-1 text-sm font-light text-gray-400") Redes Sociales
            div(style="height: 1px;" class="bg-gray-300 md:block hidden w-4/12")

        div(class="grid md:grid-cols-2 gap-2 mt-7")
            div
                button(class="rounded text-white font-bold uppercase text-xs text-center w-full text-white bg-red-900 p-2 duration-300 hover:bg-red-700" @click="loginGoogle()") Google
            div
                button(class=" text-white font-bold uppercase text-xs text-center w-full bg-blue-900 p-2 duration-300 rounded hover:bg-blue-700" @click="loginFacebook()") Facebook    

</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import authService from "../../services/authService";
import catchErrors from "../../services/catchErrors";

export default {
    name: "LoginForm",
    data() {
        return {
            submitStatus: null,
            auth: new authService(),
            errorSvc: new catchErrors(),
            errors: [],
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
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = "ERROR";
            } else {
                try {
                    await this.auth.getAuthToken();
                    let response = await this.auth.login(this.model);
                    if (!response.error) {
                        this.model = {
                            email: "",
                            password: "",
                            remember: false
                        };
                        this.submitStatus = "SUCCESS";
                        this.$router.push("/inside");
                    } else {
                        this.submitStatus = "ERROR";
                        this.errors = this.errorSvc.showErrors(response.errors)
                    }
                } catch (error) {
                    console.log(error)
                    //seria recomendable crear una función para manejar los errores y poder reutilizar
                    this.submitStatus = "ERROR";
                }
            }
            this.sending = false;
        },
        async loginGoogle(){
            await this.auth.getAuthToken();
            let response = await this.auth.loginSocial('google')
            if (!response.error) {
                this.submitStatus = "SUCCESS";
                this.$router.push("/inside");
            } else {
                console.log(response)
                //seria recomendable crear una función para manejar los errores
                this.submitStatus = "ERROR";
            }
        },
        async loginFacebook(){
            await this.auth.getAuthToken();
            let response = await this.auth.loginSocial('facebook')
             if (!response.error) {
                this.submitStatus = "SUCCESS";
                this.$router.push("/inside");
            } else {
                console.log(response)
                //seria recomendable crear una función para manejar los errores
                this.submitStatus = "ERROR";
            }
        },
    }
};
</script>
