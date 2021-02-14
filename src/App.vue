<template lang="pug">
  div(id="app" class="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto") 
    Header
    Body.w-full.max-w-8xl.mx-auto(class="min-h-screen-good")
    Footer
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
  }
}
</script>

<style lang="scss">

</style>
