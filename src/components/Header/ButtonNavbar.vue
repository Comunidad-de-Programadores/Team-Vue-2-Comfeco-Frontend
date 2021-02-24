<template lang="pug">
    div
        div(class="flex justify-between items-center hidden md:flex", v-if="user_connected && Object.keys(user_connected).length > 0")
            .container.mx-auto.bg-transparent
                a( class="", ref="bellContainer")
                    i( class="text-lg far fa-bell" )                        
            div
                div(class="dropdown inline-block relative")
                    button(class="bg-gray-300 text-gray-700 font-semibold py-2 pl-4 rounded-l-3xl rounded inline-flex items-center" )
                        img(src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80" alt="avatar" class="-ml-2 w-10 h-10 object-cover rounded-full mr-2")                        
                        p(class="text-xs w-32") {{ user_connected.name.length > 10 ? `${ user_connected.name.substring(0,6) } ... ` : user_connected.name }}
                        svg( class="fill-current h-4 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20") #[path(d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z")]                                          
                    ul( class="dropdown-menu absolute hidden text-gray-700 pt-1 z-10")
                        li(v-if="user_connected" class="")                         
                            a(class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-16 block whitespace-no-wrap text-xs" @click="logout()") Cerrar Session
                        li(v-if="user_connected" class="")
                            a(class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-16 block whitespace-no-wrap text-xs" href="#") Mi perfil                    
        div(class="md:px-6 py-4 px-2 md:hidden")
            div(class="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between ")
                div(class="flex justify-between items-center")
                    div
                        router-link.flex-initial( to="/" )                          
                            figure.logo-container.w-32(class='sm:w-40')
                                img(alt="Confeco logo" src="@/assets/images/comfeco.png")
                    template(v-if="user_connected && Object.keys(user_connected).length > 0")
                        div(class="dropdown inline-block relative")
                            button(class="bg-gray-300 text-gray-700 font-semibold py-2 pl-4 rounded-l-3xl rounded inline-flex items-center" @click="showMenu()")
                                template(v-if="user_connected")
                                    img(src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80" alt="avatar" class="-ml-2 w-10 h-10 object-cover rounded-full mr-2")
                                    p(class="text-xs w-8") {{ user_connected.name.length > 10 ? `${ user_connected.name.substring(0,6) } ... ` : user_connected.name }}
                                i(class="text-lg fas fa-bars w-8")
                            template(v-if="openMenu")
                                div(class="dropdown-menu absolute hidden text-gray-700 pt-1")
                                    ul( class="")
                                        li(v-if="user_connected" class="")                         
                                            a(class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-xs" @click="logout()") Cerrar Session
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
    name: "ButtonNavbar",
    props: {
        user_connected: {
            type: Object,
            default: null
        }
    },
    data(){
        return {
            openMenu: false
        }
    },
    methods: {
        logout: function() {
            window.bus.$emit("logout");
        },
        showMenu() {
            return (this.openMenu = !this.openMenu);
        }
    }
};
</script>
<style lang="scss" scoped></style>
