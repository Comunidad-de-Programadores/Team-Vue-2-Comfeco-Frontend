<template lang="pug">
    section
        div(class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-40")
            div() 
                div(class="grid md:grid-cols-1 gap-2 mt-7")                                  
                    h4(class="text-2xl text-gray-800 dark:text-white font-extrabold tracking-tight text-words") Asignar contraseña
                form(@submit.prevent="recoverPassword()" class="mt-9")
                    .my-5.text-sm( :class="{ 'form-group--error': $v.password.$error }")
                        input( type="password" autofocus class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Contraseña" v-model.trim="$v.password.$model")
                        .error.text-error.text-xs.text-center(v-if="!$v.password.required") Se requiere una nueva contraseña
                    .my-5.text-sm( :class="{ 'form-group--error': $v.password_confirmation.$error }")
                        input( type="password" class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Repetir contraseña" v-model.trim="$v.password_confirmation.$model")
                        .error.text-error.text-xs.text-center(v-if="!$v.password_confirmation.required") Contraseña necesaria                        
                        .error.text-error.text-xs.text-center.mt-3(v-if="!$v.password_confirmation.sameAsPassword") Las contraseñas deben ser identicas.

                    button( class="block text-center p-3 duration-300 rounded hover:bg-purple-500 w-full mt-10 bg-purple-600 text-white font-bold uppercase text-xs px-4 py-2 focus:outline-none") Enviar enlace                      
                                    
                    .error.text-xs.text-center.mt-3(:class="{'text-error': submitStatus == 'ERROR', 'text-success': submitStatus !== 'ERROR',}" v-if="submitStatus") {{submitStatus}}     
                    
</template>
<script>

import { required, minLength,sameAs  } from 'vuelidate/lib/validators';
import FirstPartService from '../../services/FirstPartService'

export default {
    name: 'RecoverPassword',
    data(){
        return {            
            password: '',
            password_confirmation: '',
            submitStatus: null,
            service: new FirstPartService()
        }
    },
    validations: {
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
        async recoverPassword(){
            this.$v.$touch()

            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                let response = await this.service.RecoverPassword(this.$route.params.email,this.password,this.password_confirmation) 

                if(!response.date.error){
                    this.password = ''
                    this.password_confirmation = ''
                    this.$router.push('/')       
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