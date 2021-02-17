<template lang="pug">
    form(@submit.prevent="register()" class="mt-9")
        .my-5.text-sm( :class="{ 'form-group--error': $v.model.name.$error }")
            input( type="text" autofocus class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Nombre" v-model.trim="$v.model.name.$model")
            .error.text-error.text-xs.text-center(v-if="!$v.model.name.required") Un nombre es necesario
        .my-5.text-sm( :class="{ 'form-group--error': $v.model.email.$error }")
            input( type="text" autofocus class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Correo electrónico" v-model.trim="$v.model.email.$model")
            .error.text-error.text-xs.text-center(v-if="!$v.model.email.required") Correo electrónico es necesario
            .error.text-error.text-xs.text-center(v-if="!$v.model.email.email")
                | Debe ser un correo electrónico.        
        .my-5.text-sm( :class="{ 'form-group--error': $v.model.password.$error }")
            input( type="password" class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Crear contraseña" v-model.trim="$v.model.password.$model")
            .error.text-error.text-xs.text-center(v-if="!$v.model.password.required") Contraseña necesaria
            .error.text-error.text-xs.text-center.mt-3(v-if="!$v.model.password.minLength") Tiene que tener como minimo 6 caracteres.
        .my-5.text-sm( :class="{ 'form-group--error': $v.model.password_confirmation.$error }")
            input( type="password" class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Repetir contraseña" v-model.trim="$v.model.password_confirmation.$model")
            .error.text-error.text-xs.text-center(v-if="!$v.model.password_confirmation.required") Contraseña necesaria                        
            .error.text-error.text-xs.text-center.mt-3(v-if="!$v.model.password_confirmation.sameAsPassword") Las contraseñas deben ser identicas.

        button( class="block text-center p-3 duration-300 rounded hover:bg-purple-500 w-full mt-10 bg-purple-600 text-white font-bold uppercase text-xs px-4 py-2 focus:outline-none", :disabled="sending") Crear una cuenta

        .error.text-xs.text-center.mt-3(:class="{'text-error': submitStatus == 'ERROR', 'text-success': submitStatus == 'SUCCESS',}" v-if="validationTexts.length > 0" v-for="text in validationTexts") {{ text }}
</template>

<script>
import { required, email, sameAs, minLength } from "vuelidate/lib/validators";
import authService from "../../services/authService";
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
            validationTexts: [],
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
                        this.validationTexts.push("USUARIO CREADO");
                        this.$router.push("/inside");
                    } else {
                        //seria recomendable crear una función para manejar los errores
                        this.submitStatus = "ERROR";
                        response.errors.password_confirmation.length > 0 &&
                            this.validationTexts.push(
                                response.errors.password_confirmation
                            );
                        response.errors.password.length > 0 &&
                            this.validationTexts.push(response.errors.password);
                        response.errors.name.length > 0 &&
                            this.validationTexts.push(response.errors.name);
                        response.errors.email.length > 0 &&
                            this.validationTexts.push(response.errors.email);
                    }
                } catch (error) {
                    //seria recomendable crear una función para manejar los errores y poder reutilizar
                    this.submitStatus = "ERROR";
                }
            }
        }
    }
};
</script>
