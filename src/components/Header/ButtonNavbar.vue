<template lang="pug">
    section(class="flex justify-between items-center hidden md:flex", v-if="Object.keys(user_connected).length > 0")
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
                        a(class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-16 block whitespace-no-wrap text-xs" href="#") Cerrar Session
                    li(v-if="user_connected" class="")
                        a(class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-16 block whitespace-no-wrap text-xs" href="#") Mi perfil                    
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
    methods: {
        logout: function() {
            window.bus.$emit("logout");
        }
    }
};
</script>
<style lang="scss" scoped></style>
