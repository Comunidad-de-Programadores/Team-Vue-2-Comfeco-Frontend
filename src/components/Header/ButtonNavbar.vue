<template lang="pug">
    div
        div(class="justify-between items-center md:hidden hidden lg:flex", v-if="user_connected && Object.keys(user_connected).length > 0")
            .container.mx-auto.bg-transparent.right-0
            a( class="", ref="bellContainer")
              i( class="text-lg far fa-bell" )
            div
                div(class="dropdown inline-block relative")
                    button(class="bg-gray-300 text-gray-700 font-semibold py-2 pl-4 rounded-l-3xl rounded inline-flex items-center " )
                        img(:src="user_connected.avatar" alt="avatar" class="-ml-2 w-10 h-10 object-cover rounded-full mr-2")
                        p(class="text-xs w-40") {{ getLabelNameToBeShow() }}
                        svg( class="fill-current h-4 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20") #[path(d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z")]
                    ul( class="dropdown-menu absolute hidden text-gray-300 bg-gray-200 pt-1 z-10 w-full text-center")
                        li(class="")
                            router-link(class="text-gray-700 rounded-t bg-gray-200 hover:bg-gray-400 hover:underline py-2 px-12 block whitespace-no-wrap " to="home")
                              | Inicio
                        li(v-if="user_connected" class="")
                            router-link(class="text-gray-700 rounded-t  hover:bg-gray-400 hover:underline py-2 px-12 block whitespace-no-wrap" to="perfil")
                              | Mi Perfil
                        li(v-if="user_connected" class="")
                            a(class="text-gray-700 rounded-t hover:bg-gray-400 hover:underline py-2 px-12 block whitespace-no-wrap cursor-pointer" @click.prevent="logout()")
                              | Cerrar Sesión
        div(class="lg:px-6 py-4 px-2 lg:hidden")
            div(class="flex flex-col container mx-auto lg:flex-row lg:items-center lg:justify-between ")
                div(class="flex justify-between items-center")
                    div
                        router-link.flex-initial( to="/" )
                            figure.logo-container.w-32(class='sm:w-40')
                                img(alt="Confeco logo" src="@/assets/images/comfeco.png")
                    template(v-if="user_connected && Object.keys(user_connected).length > 0")
                        div(class="dropdown inline-block relative")
                            button(class="bg-gray-300 text-gray-700 font-semibold py-2 pl-4 rounded-l-3xl rounded inline-flex items-center" @click="showMenu()")
                                template(v-if="user_connected")
                                    img(:src="user_connected.avatar" alt="avatar" class="-ml-2 w-10 h-10 object-cover rounded-full mr-2")
                                    span(class="text-small w-16") {{ getLabelNameToBeShow() }}
                                i(class="text-lg fas fa-bars w-8")
                            template(v-if="openMenu")
                                div(class="dropdown-menu absolute hidden text-gray-700 pt-1")
                                    ul( class="  text-gray-300 bg-gray-200 pt-1 z-10 w-full text-center")
                                        li(class="")
                                            router-link(class="text-gray-700 rounded-t bg-gray-200 hover:bg-gray-400 hover:underline py-2 px-12 block whitespace-no-wrap text-xs" to="home") Inicio
                                        li(v-if="user_connected" class="")
                                            router-link(class="text-gray-700 rounded-t bg-gray-200 hover:bg-gray-400 hover:underline py-2 px-12 block whitespace-no-wrap text-xs" to="perfil") Mi Perfil
                                        li(v-if="user_connected" class="")
                                            a(class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-12 block whitespace-no-wrap text-xs cursor-pointer" @click.prevent="logout()") Cerrar Sesión
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
    data() {
        return {
            openMenu: false
        };
    },
    methods: {
        logout: function() {
            window.bus.$emit("logout");
        },
        showMenu: function() {
            return (this.openMenu = !this.openMenu);
        },
        getLabelNameToBeShow: function() {
            let nameLabel =
                this.user_connected.nickname != null
                    ? this.user_connected.nickname
                    : this.user_connected.name;
            nameLabel =
                nameLabel.length > 10
                    ? `${nameLabel.substring(0, 30)}... `
                    : nameLabel;
            return nameLabel;
        }
    }
};
</script>
<style lang="scss" scoped>
.text-small {
    font-size: 9px;
}
</style>
