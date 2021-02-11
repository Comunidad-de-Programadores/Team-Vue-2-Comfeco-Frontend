<template lang="pug">
  div(id="app") 
    Header()
    Body(style="min-height: calc((100vh - 80px) - 104px);") 
    Footer()
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
