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

                    .items-center.justify-between(class="text-center md:flex")
                        .flex.items-center
                            input.h-4.w-4.text-indigo-600.border-gray-300.rounded(id="remember_me" v-model="rememberMe" type="checkbox" class="focus:ring-indigo-500")
                            label.ml-2.block.text-sm.text-gray-900() Recordar contraseña
                        .text-sm(class="mt-3 md:mt-0")
                            router-link.font-medium.text-gray-900(class="hover:text-indigo-500" to="recover-password") Olvidaste tu contraseña?
                            
                    button( class="block text-center p-3 duration-300 rounded hover:bg-purple-500 w-full mt-10 bg-purple-600 text-white font-bold uppercase text-xs px-4 py-2 focus:outline-none") Ingresar
                    
                    .error.text-xs.text-center.mt-3(:class="{'text-error': submitStatus == 'ERROR', 'text-success': submitStatus == 'SUCCESS',}" v-if="submitStatus") {{submitStatus}}     
                    
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
import FirstPartService from '../../services/FirstPartService'

export default {
    name: 'Login',
    data(){
        return {            
            email: '',
            password: '',
            submitStatus: null,
            rememberMe: false,
            service: new FirstPartService()
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
        beforeCreate() {
            if(localStorage.getItem('user') != null) localStorage.removeItem('user')
        },
        async logeandome(){
            this.$v.$touch()

            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                let response = await this.service.Login(this.email,this.password,this.rememberMe)

                if(!response.data.error){
                    this.email = ''
                    this.password = ''
                    this.submitStatus = 'SUCCESS'
                    localStorage.setItem('user', JSON.stringify(response.data.user))
                    this.$router.push('/inside')
                } else {
                    this.submitStatus = 'ERROR'
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