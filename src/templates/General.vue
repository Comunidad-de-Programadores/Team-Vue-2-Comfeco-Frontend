<template lang="pug">
  div(id="app" class="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto") 
    Header
    Body.w-full.max-w-8xl.mx-auto(class="min-h-screen-good")
    Footer  
  </div>  
</template>

<script>

import Body from '@/layout/Body.vue'
import Header from '@/layout/Header.vue'
import Footer from '@/layout/Footer.vue'

import FirstPartService from '../services/FirstPartService'

export default {
  name: 'General',
  components: {
    Body,
    Header,
    Footer
  },
  data(){
    return {
      servicio : new FirstPartService()
    }
  },
  async beforeCreate() {
    // let response = await this.$http.post(`http://localhost/Team-Vue-2-Comfeco-Backend/public/oauth/token`, {
    //   grant_type:  "client_credentials",
    //   client_id: 3,
    //   client_secret: "ZWPPLoZe0STTgSJuUg5ijeOlb2TRajRlEQD22rDf",
    //   scope: "app-client-guest"
    // })

    // localStorage.setItem('oauth-bearer',response.data.access_token)
    // if(localStorage.getItem('user'))
  }
}
</script>

<style lang="scss">

</style>
