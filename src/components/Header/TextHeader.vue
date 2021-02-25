<template lang="pug">
    div(class="lg:flex flex-col lg:flex-row md:-mx-4 md:hidden hidden")
        div()
            router-link.flex-initial( to="/" )                          
                figure.logo-container.w-32(class='sm:w-40 md:mx-4')
                    img(alt="Confeco logo" src="@/assets/images/comfeco.png")
        div(class="lg:ml-28 ml-0 my-0 lg:my-2 md:my-2 md:hidden lg:block", v-if="Object.keys(user_connected).length > 0")
            router-link.flex-initial( to="/inicio" class="text-gray-800 text-sm hover:text-blue-500 md:mx-4 ") Inicio
            router-link.flex-initial( to="/comunidades" class="text-gray-800 text-sm hover:text-blue-500 md:mx-4 ") Comunidades
            router-link.flex-initial( to="/talleres" class="text-gray-800 text-sm hover:text-blue-500 md:mx-4 ") Talleres
            router-link.flex-initial( to="/creadores-de-contenido" class="text-gray-800 text-sm	hover:text-blue-500 md:mx-4 ") Creadores de contenido
</template>
<script>
export default {
    name: "TextHeader",
    props: {
        user_connected: {
            type: Object,
            default: null
        }
    },
    data() {
        return {};
    },
    created() {}
};
</script>
<style lang="scss" scoped></style>
