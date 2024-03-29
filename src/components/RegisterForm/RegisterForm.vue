<template lang="pug">
    form(@submit.prevent="register()" class="mt-2")
        .my-5.text-sm( :class="{ 'form-group--error': $v.model.name.$error }")
            input( type="text" autofocus class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Nombre completo" v-model.trim="$v.model.name.$model")
            div(v-if="$v.model.name.$dirty")
                .error.text-error.text-xs.text-center(v-if="!$v.model.name.required") El nombre completo es necesario
            div(v-if="customErrors.name")
                .error.text-error.text-xs.text-center
                    | {{ customErrors.name }}
        .my-5.text-sm( :class="{ 'form-group--error': $v.model.nickname.$error }")
            input( type="text" autofocus class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Nick" v-model.trim="$v.model.nickname.$model")
            div(v-if="$v.model.nickname.$dirty")
                .error.text-error.text-xs.text-center(v-if="!$v.model.nickname.required") Un nickname es necesario
            div(v-if="customErrors.nickname")
                .error.text-error.text-xs.text-center
                    | {{ customErrors.nickname }}
        .my-5.text-sm( :class="{ 'form-group--error': $v.model.email.$error }")
            input( type="text" autofocus class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Correo electrónico" v-model.trim="$v.model.email.$model")
            div(v-if="$v.model.email.$dirty")
                .error.text-error.text-xs.text-center(v-if="!$v.model.email.required") Correo electrónico es necesario
                .error.text-error.text-xs.text-center(v-if="!$v.model.email.email")
                    | Debe ser un correo electrónico.        
            div(v-if="customErrors.email")
                .error.text-error.text-xs.text-center
                    | {{ customErrors.email }}
        .my-5.text-sm( :class="{ 'form-group--error': $v.model.password.$error }")
            input( type="password" class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Crear contraseña" v-model.trim="$v.model.password.$model")
            div(v-if="$v.model.password.$dirty")
                .error.text-error.text-xs.text-center(v-if="!$v.model.password.required") Contraseña necesaria
                .error.text-error.text-xs.text-center.mt-3(v-if="!$v.model.password.minLength") Tiene que tener como minimo 6 caracteres.
            div(v-if="customErrors.password")
                .error.text-error.text-xs.text-center
                    | {{ customErrors.password }}
        .my-5.text-sm( :class="{ 'form-group--error': $v.model.password_confirmation.$error }")
            input( type="password" class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Repetir contraseña" v-model.trim="$v.model.password_confirmation.$model")
            div(v-if="$v.model.password_confirmation.$dirty")
                .error.text-error.text-xs.text-center(v-if="!$v.model.password_confirmation.required") Contraseña necesaria                        
                .error.text-error.text-xs.text-center.mt-3(v-if="!$v.model.password_confirmation.sameAsPassword") Las contraseñas deben ser identicas.
            div(v-if="customErrors.password_confirmation")
                .error.text-error.text-xs.text-center
                    | {{ customErrors.password_confirmation }}
        .items-center.justify-between(class="text-center md:flex")
            .flex.items-center
                input.h-4.w-4.text-indigo-600.border-gray-300.rounded(id="term_conditions" v-model="model.term_conditions" type="checkbox" class="focus:ring-indigo-500")
                label.ml-2.block.text-sm.text-gray-900() Terminos y condiciones
            .text-sm(class="mt-3 md:mt-0")
                a.font-medium.text-gray-900(class="text-xs text-right text-blue-500 cursor-pointer" @click="termsConditions()") Visualizar terminos
        div(v-if="customErrors.term_conditions")
                .error.text-error.text-xs.text-center
                    | {{ customErrors.term_conditions }}
        button( class="block text-center p-3 duration-300 rounded hover:bg-purple-500 w-full mt-10 bg-purple-600 text-white font-bold uppercase text-xs px-4 py-2 focus:outline-none", :disabled="sending") Crear una cuenta    

        LoginSocial(:termCondicionRegister="model.term_conditions" )

</template>

<script>
import { required, email, sameAs, minLength } from "vuelidate/lib/validators";
import LoginSocial from "@/components/LoginSocial/LoginSocial";
import authService from "@/services/authService";
import errorManagement from "@/mixins/errorManagement";

export default {
    name: "RegisterForm",
    mixins: [errorManagement],
    components: {
        LoginSocial
    },
    data() {
        return {
            model: {
                email: "",
                password: "",
                password_confirmation: "",
                name: "",
                nickname: "",
                term_conditions: false
            },
            sending: false,
            submitStatus: null,
            auth: new authService()
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
            nickname: {
                required
            },
            password: {
                required,
                minLength: minLength(6)
            },
            password_confirmation: {
                required,
                sameAsPassword: sameAs("password")
            },
            term_conditions: {
                required,
                sameAs: sameAs(() => true)
            }
        }
    },
    created() {},
    methods: {
        termsConditions() {
            let routeData = this.$router.resolve({
                path: "/terminos-condiciones"
            });
            window.open(routeData.href, "_blank");
        },
        async register() {
            this.sending = true;
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = "ERROR";
                this.$toast.open({
                    message: "Hubo un error",
                    type: "error"
                });
            } else {
                window.bus.$emit("loading", true);
                try {
                    let response = await this.auth.register(this.model);
                    if (!response.error) {
                        this.model = {
                            name: "",
                            email: "",
                            password: "",
                            password_confirmation: ""
                        };
                        this.submitStatus = "SUCCESS";
                        this.$toast.open({
                            message: "Bienvenido a COMFECO",
                            type: "success"
                        });
                        window.bus.$emit("login");
                        this.$router.push("/home");
                    }
                    window.bus.$emit("loading", false);
                } catch (error) {
                    this.showErrors(error);
                    window.bus.$emit("loading", false);
                }
            }
            this.sending = false;
        }
    }
};
</script>
