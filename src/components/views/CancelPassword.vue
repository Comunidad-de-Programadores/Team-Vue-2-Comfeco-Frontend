<template lang="pug">
    section
        div(class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-40")
            div()
                div(class="grid md:grid-cols-1 gap-2 mt-7")                                  
                    h4(class="text-2xl text-gray-800 dark:text-white font-extrabold tracking-tight text-words" v-if="cancel") {{cancel}}
                    h4(v-else) Espere un momento!
                    
                    button( v-if="cancel" @click="$router.push('/')" class="block text-center p-3 duration-300 rounded hover:bg-purple-500 w-full mt-10 bg-purple-600 text-white font-bold uppercase text-xs px-4 py-2 focus:outline-none") Volver al inicio.
</template>
<script>

import { settings } from '../../settings';

export default {
    name: 'CancelPassword',
    data(){
        return {            
            cancel: ''
        }
    },
    async beforeCreate() {
        let response = await this.$http.post(`${settings.api}/cancelRecoverPassword`, {
            email: this.$route.params.email
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('oauth-bearer')
            }
        })
        console.log(response)
        if(!response.data.error) this.cancel = response.data.message
    },
    methods:{        
    }
}
</script>
<style lang="scss" scoped>
    .border-gray{
        border-right: 1px solid #d4cece;
    }
</style>