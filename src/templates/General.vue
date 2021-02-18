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

export default {
  name: 'General',
  components: {
    Body,
    Header,
    Footer
  },
  data(){
    return {
    }
  },
  async beforeCreate() {

  }
}
</script>

<style lang="scss">

</style>
