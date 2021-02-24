<template lang="pug">
    div(class="grid md:grid-cols-2 gap-2 mt-7")
        .text-center(class=" lg:border-gray-300 lg:border-solid lg:border-r-2")
            router-link( :to="'/'" class="text-gray-300 text-words dark:text-white font-extrabold tracking-tight w-full rounded-sm" ) Iniciar Sesion
        .text-center
            router-link( :to="'register'" class="text-gray-300 text-words dark:text-white font-extrabold tracking-tight w-full rounded-sm" ) Registrate
</template>
<script>
export default {
    name: 'OptionChoiceLoginOrRegister'
    
}
</script>
<style lang="scss" scoped>

</style>