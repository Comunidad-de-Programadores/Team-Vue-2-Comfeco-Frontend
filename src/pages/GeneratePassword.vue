<template lang="pug">
    div(class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 md:my-20 lg:my-40 px-5 py-2 px-4")
        div
            div(class="grid md:grid-cols-1 gap-2 mt-7")
                h4(class="text-2xl text-gray-800 dark:text-white font-extrabold tracking-tight text-words") Asignar contraseña
                form(@submit.prevent="generatePassword()" class="mt-9")
                    .my-5.text-sm( :class="{ 'form-group-error': $v.model.password.$error }")
                        input( type="password" autofocus class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Contraseña" v-model.trim="$v.model.password.$model")
                        div(v-if="$v.model.password.$dirty")
                            .error.text-error.text-xs.text-center(v-if="!$v.model.password.required") Se requiere una nueva contraseña
                        div(v-if="customErrors.password")
                            .error.text-error.text-xs.text-center
                                | {{ customErrors.password }}
                    .my-5.text-sm( :class="{ 'form-group-error': $v.model.password_confirmation.$error }")
                        input(
                            type="password" 
                            class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" 
                            placeholder="Repetir contraseña" 
                            v-model.trim="$v.model.password_confirmation.$model"
                        )
                        div(v-if="$v.model.password_confirmation.$dirty")
                            .error.text-error.text-xs.text-center(v-if="!$v.model.password_confirmation.required") Contraseña necesaria
                            .error.text-error.text-xs.text-center.mt-3(v-if="!$v.model.password_confirmation.sameAsPassword") Las contraseñas deben ser identicas.
                        div(v-if="customErrors.password_confirmation")
                            .error.text-error.text-xs.text-center
                                | {{ customErrors.password_confirmation }}
                    button( class="block text-center p-3 duration-300 rounded hover:bg-purple-500 w-full mt-10 bg-purple-600 text-white font-bold uppercase text-xs px-4 py-2 focus:outline-none") Enviar enlace
                    
                    .error.text-md.font-semibold.text-center.mt-3(:class="{'text-error': submitStatus == 'ERROR', 'text-success': submitStatus == 'SUCCESS'}")
                        h4(v-for="error in errors") {{error}}
</template>
<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import authService from "../services/authService";
import errorManagement from "../mixins/errorManagement";

export default {
    name: "RecoverPassword",
    mixins: [errorManagement],
    data() {
        return {
            model: {
                password: "",
                password_confirmation: "",
                email: this.$route.params.email
            },
            errors: [],
            submitStatus: null,
            auth: new authService()
        };
    },
    validations: {
        model: {
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
    created() {
        this.checkIsValid();
    },
    methods: {
        async checkIsValid() {
            try {
                let response = await this.auth.validateRecoverPasswordExpiration(
                    this.model
                );
                if (response.error) {
                    this.$router.push("/login");
                    this.$toast.open({
                        message: "Link inválido o expirado",
                        type: "error",
                        duration: 5000
                    });
                }
            } catch (error) {
                this.$router.push("/login");
                this.$toast.open({
                    message: "Link inválido o expirado",
                    type: "error",
                    duration: 5000
                });
            }
        },
        async generatePassword() {
            this.$v.$touch();

            if (this.$v.$invalid) {
                this.submitStatus = "ERROR";
                this.$toast.open({
                    message: "Hubo un error",
                    type: "error"
                });
            } else {
                try {
                    window.bus.$emit("loading", true);
                    let response = await this.auth.generatePassword(this.model);
                    if (!response.error) {
                        this.model = {
                            email: "",
                            password: "",
                            password_confirmation: ""
                        };
                        this.submitStatus = "SUCCESS";
                        this.$router.push("/login");
                        this.$toast.open({
                            message:
                                "Clave generada correctamente, proceda a ingresar",
                            type: "success",
                            duration: 5000
                        });
                    }
                    window.bus.$emit("loading", false);
                } catch (error) {
                    this.showErrors(error);
                    window.bus.$emit("loading", false);
                }
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.border-gray {
    border-right: 1px solid #d4cece;
}
</style>
