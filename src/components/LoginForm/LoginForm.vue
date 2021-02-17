<template lang="pug">
    form(@submit.prevent="logeandome()" class="mt-9")
        div.my-5.text-sm( :class="{ 'form-group--error': $v.email.$error }")
            input( type="text" autofocus class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Correo electrónico" v-model.trim="$v.email.$model")
            .error.text-error.text-xs.text-center(v-if="!$v.email.required") Correo electrónico es necesario
            .error.text-error.text-xs.text-center(v-if="!$v.email.email")
                | Debe ser un correo electrónico.        
        div.my-5.text-sm( :class="{ 'form-group--error': $v.password.$error }")
            input( type="password" class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Contraseña" v-model.trim="$v.password.$model")
            .error.text-error.text-xs.text-center(v-if="!$v.password.required") Contraseña necesaria

        .items-center.justify-between(class="text-center md:flex")
            .flex.items-center
                input.h-4.w-4.text-indigo-600.border-gray-300.rounded(id="remember_me" v-model="rememberMe" type="checkbox" class="focus:ring-indigo-500")
                label.ml-2.block.text-sm.text-gray-900() Recordar contraseña
            .text-sm(class="mt-3 md:mt-0")
                router-link.font-medium.text-gray-900(class="hover:text-indigo-500" to="recover-password") Olvidaste tu contraseña?
                
        button( class="block text-center p-3 duration-300 rounded hover:bg-purple-500 w-full mt-10 bg-purple-600 text-white font-bold uppercase text-xs px-4 py-2 focus:outline-none") Ingresar
        
        .error.text-xs.text-center.mt-3(:class="{'text-error': submitStatus == 'ERROR', 'text-success': submitStatus == 'SUCCESS',}" v-if="submitStatus") {{submitStatus}}     
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import FirstPartService from "../../services/FirstPartService";
export default {
    name: "LoginForm",
    data() {
        return {
            email: "",
            password: "",
            submitStatus: null,
            rememberMe: false,
            service: new FirstPartService()
        };
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required
        }
    },
    created() {},
    methods: {
        beforeCreate() {
            if (localStorage.getItem("user") != null)
                localStorage.removeItem("user");
        },
        async logeandome() {
            this.$v.$touch();

            if (this.$v.$invalid) {
                this.submitStatus = "ERROR";
            } else {
                let response = await this.service.Login(
                    this.email,
                    this.password,
                    this.rememberMe
                );

                if (!response.data.error) {
                    this.email = "";
                    this.password = "";
                    this.submitStatus = "SUCCESS";
                    localStorage.setItem(
                        "user",
                        JSON.stringify(response.data.user)
                    );
                    this.$router.push("/inside");
                } else {
                    this.submitStatus = "ERROR";
                }
            }
        }
    }
};
</script>
