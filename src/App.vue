<template lang="pug">
  div(id="app" class="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto") 
    Header
    Body.w-full.max-w-8xl.mx-auto(class="min-h-screen-good")
    Footer  
  </div>  
</template>

<script>

//SI ALGUIEN SABE DE ESTILOS Y SE ANIMA A MEJORAR BIENVENIDO SEA :)

import Body from '@/components/principal/body.vue'
import Header from '@/components/principal/header.vue'
import Footer from '@/components/principal/footer.vue'

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
