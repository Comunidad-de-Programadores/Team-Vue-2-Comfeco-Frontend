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
                    .my-5.text-sm( :class="{ 'form-group--error': $v.email.$error }")
                        input( type="text" autofocus class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Correo" v-model.trim="$v.email.$model")
                        .error.text-error.text-xs.text-center(v-if="!$v.email.required") Email es necesario
                        .error.text-error.text-xs.text-center(v-if="!$v.email.email")
                            | Debe ser un email.        
                    .my-5.text-sm( :class="{ 'form-group--error': $v.password.$error }")
                        input( type="password" class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Clave" v-model.trim="$v.password.$model")
                        .error.text-error.text-xs.text-center(v-if="!$v.password.required") Contrasena necesaria
                    .my-5.text-sm( :class="{ 'form-group--error': $v.repeatPassword.$error }")
                        input( type="password" class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Clave" v-model.trim="$v.repeatPassword.$model")
                        .error.text-error.text-xs.text-center(v-if="!$v.repeatPassword.required") Contrasena necesaria                        
                        .error(v-if="!$v.repeatPassword.sameAsPassword") Passwords must be identical.

                    button( class="block text-center p-3 duration-300 rounded hover:bg-purple-500 w-full mt-10 bg-purple-600 text-white font-bold uppercase text-xs px-4 py-2 focus:outline-none") Crear una cuenta
</template>
<script>

import { required, email, sameAs, minLength  } from 'vuelidate/lib/validators';

export default {
    name: 'Register',
    data(){
        return {            
            email: '',
            password: '',
            repeatPassword: ''
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(6)
        },
        repeatPassword: {
           sameAsPassword: sameAs('password')
        }
    },
    methods:{
        registrando(){
            console.log(this.email, this.password)
            // this.$router.push('/register')
        }
    }
}
</script>
<style lang="scss" scoped>
    .border-gray{
        border-right: 1px solid #d4cece;
    }
</style>