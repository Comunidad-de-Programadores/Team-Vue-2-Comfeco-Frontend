<template lang="pug">
    section
        div(class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-40")
            div()   
                div(class="grid md:grid-cols-2 gap-2 mt-7")
                    .text-center(class=" lg:border-gray-300 lg:border-solid lg:border-r-2")
                        router-link( :to=" $route.path !== '/' ? '/' : '' " class="text-gray-300 text-words dark:text-white font-extrabold tracking-tight w-full rounded-sm" ) Iniciar Sesion
                    .text-center
                        router-link( :to=" $route.path !== 'register' ? 'register' : ''" class="text-gray-300 dark:text-white text-words font-extrabold tracking-tight w-full rounded-sm" ) Registrate
                form(@submit.prevent="registrando()" class="mt-9")
                    .my-5.text-sm( :class="{ 'form-group--error': $v.name.$error }")
                        input( type="text" autofocus class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Nombre" v-model.trim="$v.name.$model")
                        .error.text-error.text-xs.text-center(v-if="!$v.name.required") Un nombre es necesario
                    .my-5.text-sm( :class="{ 'form-group--error': $v.email.$error }")
                        input( type="text" autofocus class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Correo electrónico" v-model.trim="$v.email.$model")
                        .error.text-error.text-xs.text-center(v-if="!$v.email.required") Correo electrónico es necesario
                        .error.text-error.text-xs.text-center(v-if="!$v.email.email")
                            | Debe ser un correo electrónico.        
                    .my-5.text-sm( :class="{ 'form-group--error': $v.password.$error }")
                        input( type="password" class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Crear contraseña" v-model.trim="$v.password.$model")
                        .error.text-error.text-xs.text-center(v-if="!$v.password.required") Contraseña necesaria
                        .error.text-error.text-xs.text-center.mt-3(v-if="!$v.password.minLength") Tiene que tener como minimo 6 caracteres.
                    .my-5.text-sm( :class="{ 'form-group--error': $v.password_confirmation.$error }")
                        input( type="password" class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Repetir contraseña" v-model.trim="$v.password_confirmation.$model")
                        .error.text-error.text-xs.text-center(v-if="!$v.password_confirmation.required") Contraseña necesaria                        
                        .error.text-error.text-xs.text-center.mt-3(v-if="!$v.password_confirmation.sameAsPassword") Las contraseñas deben ser identicas.

                    button( class="block text-center p-3 duration-300 rounded hover:bg-purple-500 w-full mt-10 bg-purple-600 text-white font-bold uppercase text-xs px-4 py-2 focus:outline-none") Crear una cuenta

                    .error.text-xs.text-center.mt-3(:class="{'text-error': submitStatus == 'ERROR', 'text-success': submitStatus == 'SUCCESS',}" v-if="validationTexts.length > 0" v-for="text in validationTexts") {{ text }}     
                    

</template>
<script>

import { required, email, sameAs, minLength  } from 'vuelidate/lib/validators';
import FirstPartService from '../../services/FirstPartService'

export default {
    name: 'Register',
    data(){
        return {            
            email: '',
            password: '',
            password_confirmation: '',
            name: '',
            submitStatus: null,
            validationTexts: [],
            service: new FirstPartService()
        }
    },
    validations: {
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
            sameAsPassword: sameAs('password')
        }
    },
    methods:{
        // https://www.npmjs.com/package/vue-notification PARA MOSTRAR NOTIFICACIONES
        async registrando(){
            
            this.$v.$touch()

            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                let response = await this.service.Register(this.name, this.email, this.password, this.password_confirmation)

                if(!response.data.error){
                    localStorage.setItem('token',response.data.user.access_token)
                    this.submitStatus = 'SUCCESS';
                    this.validationTexts.push('USUARIO CREADO')
                    // return this.$router.push('/inside')
                } else {
                    this.submitStatus = 'ERROR';
                    (response.data.errors.password_confirmation.length > 0) && (this.validationTexts.push(response.data.errors.password_confirmation));
                    (response.data.errors.password.length > 0) && (this.validationTexts.push(response.data.errors.password));
                    (response.data.errors.name.length > 0) && (this.validationTexts.push(response.data.errors.name));
                    (response.data.errors.email.length > 0) && (this.validationTexts.push(response.data.errors.email));
                }
            }
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .border-gray{
        border-right: 1px solid #d4cece;
    }
</style>