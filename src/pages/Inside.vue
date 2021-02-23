<template lang="pug">
    div
        div(class="w-full lg:w-3/12")
            p hola
        div(class="-mx-8 w-6/12 hidden lg:block")
            p chao
        div(class="-mx-8 w-3/12 hidden lg:block")
            RightSideTalleres
                                
</template>
<script>
import RightSideTalleres from '@/components/Home/RightSideTalleres'

export default {
    name: 'Inside',
    components: {
        RightSideTalleres
    }
}
</script>
<style lang="scss" scoped>

</style>