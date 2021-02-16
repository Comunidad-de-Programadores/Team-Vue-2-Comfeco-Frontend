<template lang="pug">
    section
        div(class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-40")
            div()   
                div(class="grid md:grid-cols-1 gap-2 mt-7")                                  
                    h4(class="text-2xl text-gray-800 dark:text-white font-extrabold tracking-tight text-words") Reasignar contrase;a
                    p Te enviaremos un correo electronico con un enlace privado para que reasignes tu contrase;a. Este enlace sera valido por una hora.
                form(@submit.prevent="remeberPassword()" class="mt-9")
                    div.my-5.text-sm( :class="{ 'form-group--error': $v.email.$error }")
                        input( type="text" autofocus class="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Correo" v-model.trim="$v.email.$model")
                        .error.text-error.text-xs.text-center(v-if="!$v.email.required") Email es necesario
                        .error.text-error.text-xs.text-center(v-if="!$v.email.email")
                            | Debe ser un email.        

                    button( class="block text-center p-3 duration-300 rounded hover:bg-purple-500 w-full mt-10 bg-purple-600 text-white font-bold uppercase text-xs px-4 py-2 focus:outline-none") Enviar enlace                      
                    
                    .error.text-xs.text-center.mt-3(:class="{'text-error': submitStatus == 'ERROR', 'text-success': submitStatus !== 'ERROR',}" v-if="submitStatus") {{submitStatus}}     
                    
</template>
<script>

import { required, email  } from 'vuelidate/lib/validators';
import { settings } from '../../settings';

export default {
    name: 'RememberPassword',
    data(){
        return {            
            email: '',
            submitStatus: null
        }
    },
    validations: {
        email: {
            required,
            email
        },
    },
    methods:{
        async remeberPassword(){
            console.log('enviando!')
            
            this.$v.$touch()

            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                let response = await this.$http.post(`${settings.api}/recoverPassword`, {
                    email: this.email
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': localStorage.getItem('oauth-bearer')
                    }
                })
                console.log(response)
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