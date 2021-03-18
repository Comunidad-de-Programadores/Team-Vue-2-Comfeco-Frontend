<template lang="pug">
	div(class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 md:my-20 lg:my-40 px-5 py-2 px-4")
		div()   
			div(class="grid md:grid-cols-1 gap-2 mt-7")                                  
				h4(class="text-2xl text-gray-800 dark:text-white font-extrabold tracking-tight text-words") Reasignar contraseña
				p Te enviaremos un correo electronico con un enlace privado para que reasignes tu contraseña. Este enlace sera valido por una hora.
			form(@submit.prevent="recoverPassword()" class="mt-9")
				div.my-5.text-sm( :class="{ 'form-group-error': $v.model.email.$error }")
					input( type="text" autofocus class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Correo" v-model.trim="$v.model.email.$model")
					div(v-if="$v.model.email.$dirty")
						.error.text-error.text-xs.text-center(v-if="!$v.model.email.required") Email es necesario
						.error.text-error.text-xs.text-center(v-if="!$v.model.email.email")
							| Debe ser un email.
				button( class="block text-center p-3 duration-300 rounded hover:bg-purple-500 w-full mt-10 bg-purple-600 text-white font-bold uppercase text-xs px-4 py-2 focus:outline-none") Enviar enlace                      
				.error.text-md.font-semibold.text-center.mt-3(:class="{'text-error': submitStatus == 'ERROR', 'text-success': submitStatus == 'SUCCESS'}")
					h4(v-for="error in errors") {{error}}
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
import authService from "../services/authService";
import errorManagement from "../mixins/errorManagement";

export default {
    name: "RememberPassword",
    mixins: [errorManagement],
    data() {
        return {
            model: {
                email: ""
            },
            submitStatus: null,
            auth: new authService(),
            errors: []
        };
    },
    validations: {
        model: {
            email: {
                required,
                email
            }
        }
    },
    methods: {
        async recoverPassword() {
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
                    let response = await this.auth.recoverPassword(this.model);
                    if (!response.error) {
                        this.model = {
                            email: ""
                        };
                        this.submitStatus = "SUCCESS";
                        this.$router.push("/login");
                        this.$toast.open({
                            message:
                                "Revise su correo para poder generar su nueva clave",
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
