<template lang="pug">
    form(@submit.prevent="register()" class="mt-9")
        .my-5.text-sm( :class="{ 'form-group--error': $v.model.name.$error }")
            input( type="text" autofocus class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Nombre" v-model.trim="$v.model.name.$model")
            div(v-if="$v.model.name.$dirty")
                .error.text-error.text-xs.text-center(v-if="!$v.model.name.required") Un nombre es necesario
        .my-5.text-sm( :class="{ 'form-group--error': $v.model.email.$error }")
            input( type="text" autofocus class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Correo electrónico" v-model.trim="$v.model.email.$model")
            div(v-if="$v.model.email.$dirty")
                .error.text-error.text-xs.text-center(v-if="!$v.model.email.required") Correo electrónico es necesario
                .error.text-error.text-xs.text-center(v-if="!$v.model.email.email")
                    | Debe ser un correo electrónico.        
        .my-5.text-sm( :class="{ 'form-group--error': $v.model.password.$error }")
            input( type="password" class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Crear contraseña" v-model.trim="$v.model.password.$model")
            div(v-if="$v.model.password.$dirty")
                .error.text-error.text-xs.text-center(v-if="!$v.model.password.required") Contraseña necesaria
                .error.text-error.text-xs.text-center.mt-3(v-if="!$v.model.password.minLength") Tiene que tener como minimo 6 caracteres.
        .my-5.text-sm( :class="{ 'form-group--error': $v.model.password_confirmation.$error }")
            input( type="password" class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Repetir contraseña" v-model.trim="$v.model.password_confirmation.$model")
            div(v-if="$v.model.password_confirmation.$dirty")
                .error.text-error.text-xs.text-center(v-if="!$v.model.password_confirmation.required") Contraseña necesaria                        
                .error.text-error.text-xs.text-center.mt-3(v-if="!$v.model.password_confirmation.sameAsPassword") Las contraseñas deben ser identicas.

        button( class="block text-center p-3 duration-300 rounded hover:bg-purple-500 w-full mt-10 bg-purple-600 text-white font-bold uppercase text-xs px-4 py-2 focus:outline-none", :disabled="sending") Crear una cuenta

        .error.text-md.font-semibold.text-center.mt-3(:class="{'text-error': submitStatus == 'ERROR', 'text-success': submitStatus == 'SUCCESS'}")
            h4(v-for="error in errors") {{error}}

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
import { required, email, sameAs, minLength } from "vuelidate/lib/validators";
import authService from "../../services/authService";
import catchErrors from "../../services/catchErrors";

export default {
    name: "RegisterForm",
    data() {
        return {
            model: {
                email: "",
                password: "",
                password_confirmation: "",
                name: ""
            },
            sending: false,
            submitStatus: null,
            auth: new authService(),
            errorSvc: new catchErrors(),
            errors: []
        };
    },
    validations: {
        model: {
            email: {
                required,
                email
            },
            name: {
                required
            },
            password: {
                required,
                minLength: minLength(6)
            },
            password_confirmation: {
                required,
                sameAsPassword: sameAs("password")
            }
        }
    },
    created() {},
    methods: {
        async register() {
            this.$v.$touch();

            if (this.$v.$invalid) {
                this.submitStatus = "ERROR";
            } else {
                try {
                    await this.auth.getAuthToken();
                    let response = await this.auth.register(this.model);
                    if (!response.error) {
                        this.model = {
                            name: "",
                            email: "",
                            password: "",
                            password_confirmation: ""
                        };
                        this.submitStatus = "SUCCESS";
                        this.$router.push("/inside");
                    } else {
                        this.submitStatus = "ERROR";
                        this.errors = this.errorSvc.showErrors(response.errors);
                    }
                } catch (error) {
                    console.log(error);
                    this.submitStatus = "ERROR";
                }
            }
        },
        async loginSocial(socialNetwork) {
            this.sending = true;
            await this.auth.getAuthToken();
            let response = await this.auth.loginSocial(socialNetwork);
            if (!response.error) {
                this.$router.push("/inside");
            } else {
                console.log(response);
            }
            this.sending = false;
        }
    }
};
</script>
