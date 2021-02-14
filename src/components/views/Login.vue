<template lang="pug">
    section
        div(class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-40")
            div()   
                div(class="grid md:grid-cols-2 gap-2 mt-7")
                    .text-center(class=" lg:border-gray-300 lg:border-solid lg:border-r-2")
                        router-link( :to=" $route.path !== '/' ? '/' : '' " class=" text-gray-300 dark:text-white text-words font-extrabold tracking-tight w-full rounded-sm" ) Iniciar Sesion
                    .text-center
                        router-link( :to=" $route.path !== 'register' ? 'register' : ''" class="text-gray-300 text-words dark:text-white font-extrabold tracking-tight w-full rounded-sm" ) Registrate
                form(@submit.prevent="logeandome()" class="mt-9")
                    div.my-5.text-sm( :class="{ 'form-group--error': $v.email.$error }")
                        input( type="text" autofocus class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Correo electrónico" v-model.trim="$v.email.$model")
                        .error.text-error.text-xs.text-center(v-if="!$v.email.required") Correo electrónico es necesario
                        .error.text-error.text-xs.text-center(v-if="!$v.email.email")
                            | Debe ser un correo electrónico.        
                    div.my-5.text-sm( :class="{ 'form-group--error': $v.password.$error }")
                        input( type="password" class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Contraseña" v-model.trim="$v.password.$model")
                        .error.text-error.text-xs.text-center(v-if="!$v.password.required") Contraseña necesaria
                        .flex.justify-end.mt-2.text-xs.text-gray-600
                            router-link(to="recover-password") Olvidaste tu contraseña?
                    button( class="block text-center p-3 duration-300 rounded hover:bg-purple-500 w-full mt-10 bg-purple-600 text-white font-bold uppercase text-xs px-4 py-2 focus:outline-none") Ingresar

                //- div(class="flex md:justify-between justify-center items-center mt-10")
                //-     div(style="height: 1px;" class="bg-gray-300 md:block hidden w-4/12")
                //-     p(class="md:mx-1 text-sm font-light text-gray-400") Redes Sociales
                //-     div(style="height: 1px;" class="bg-gray-300 md:block hidden w-4/12")

                //- div(class="grid md:grid-cols-2 gap-2 mt-7")
                //-     div
                //-         button(class="rounded text-white font-bold uppercase text-xs text-center w-full text-white bg-blue-900 p-2 duration-300 hover:bg-blue-700") Facebook
                //-     div
                //-         button(class=" text-white font-bold uppercase text-xs text-center w-full bg-blue-400 p-2 duration-300 rounded hover:bg-blue-500") Twitter                        

</template>
<script>

import { required, email } from 'vuelidate/lib/validators';

export default {
    name: 'Login',
    data(){
        return {            
            email: '',
            password: ''
        }
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
    methods:{
        logeandome(){
            console.log(this.email, this.password)
            this.$router.push('/register')
        }
    }
}
</script>
<style lang="scss" scoped>
    .border-gray{
        border-right: 1px solid #d4cece;
    }
</style>