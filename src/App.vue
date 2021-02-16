<template lang="pug">
  div(id="app" class="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto") 
    Header
    Body.w-full.max-w-8xl.mx-auto(class="min-h-screen-good")
    Footer  
  </div>  
</template>

<script>

import Body from '@/components/principal/Body.vue'
import Header from '@/components/principal/Header.vue'
import Footer from '@/components/principal/Footer.vue'

export default {
  name: 'App',
  components: {
    Body,
    Header,
    Footer
  },
  beforeCreate() {
    this.$http.post(`http://localhost/Team-Vue-2-Comfeco-Backend/public/oauth/token`, {
      grant_type:  "client_credentials",
      client_id: 3,
      client_secret: "ZWPPLoZe0STTgSJuUg5ijeOlb2TRajRlEQD22rDf",
      scope: "app-client-guest"
    }).then(response => {
      localStorage.setItem('oauth-bearer',response.data.access_token)
    }).catch(er => console.log(er))
    // if(localStorage.getItem('user'))
  }
}
</script>

<style lang="scss">

</style>
