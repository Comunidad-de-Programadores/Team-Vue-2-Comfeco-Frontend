<template lang="pug">
    div(class="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between ")
        div(class="flex justify-between items-center")
            div
                router-link.flex-initial( to="/" )                          
                    figure.logo-container.w-32(class='sm:w-40')
                        img(alt="Confeco logo" src="@/assets/images/comfeco.png")
            div
                div(class="dropdown inline-block relative")
                    button(class="bg-gray-300 text-gray-700 font-semibold py-2 pl-4 rounded-l-3xl rounded inline-flex items-center" @click="showMenu()")
                        template(v-if="user_connected")
                            img(src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80" alt="avatar" class="-ml-2 w-10 h-10 object-cover rounded-full mr-2")
                            p(class="text-xs w-8") {{ user_connected.name.length > 10 ? `${ user_connected.name.substring(0,6) } ... ` : user_connected.name }}
                        i(class="text-lg fas fa-bars w-8")
                    template(v-if="openMenu")
                        div(class="dropdown-menu absolute hidden text-gray-700 pt-1"  style="width: 32vw")
                            ul( class="")
                                li(v-if="user_connected" class="")
                                    a(class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-xs" href="#") Cerrar Session
                                li(v-if="user_connected" class="")
                                    a(class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-xs" href="#") Mi Perfil
                                li(class="")
                                    a(class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-xs" href="#") Inicio
                                li(class="")
                                    a(class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-xs" href="#") Comunidades
                                li(class="")
                                    a(class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-xs" href="#") Talleres
                                li(class="")
                                    a(class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-xs" href="#") Creadores de contenido
</template>
<script>
export default {
    name: 'MenuMovil',
    data(){
        return {
            openMenu: false
        }
    },
    props: {
        user_connected: {
            type: Object,
            default:null
        }
    },
    methods : {
        showMenu(){            
            return this.openMenu = !this.openMenu;
        }
    }
}
</script>
<style lang="scss" scoped>

</style>