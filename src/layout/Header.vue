<template lang="pug">
    section
        .sticky.top-0.z-40.w-full.max-w-8xl.mx-auto.bg-white.flex-none.flex.p-2()
            div(class="flex-none pl-4 sm:pl-6 xl:pl-8 flex items-center border-b border-gray-200 lg:border-b-0 lg:w-60 xl:w-72")
               .container.mx-auto.bg-transparent.px-4.py-4
                    .flex
                        router-link.flex-initial( to="/" )                          
                            figure.logo-container.w-32(class='sm:w-40')
                                img(alt="Confeco logo" src="@/assets/images/comfeco.png")
            div.flex-auto.border-b.border-gray-200.h-18.flex.items-center.justify-between(class="md:px-4 lg:mx-6 lg:px-0 xl:mx-8")
                button.group.leading-6.font-medium.flex.items-center.space-x-3(class="sm:space-x-4 hover:text-gray-600 transition-colors duration-200 w-full py-2")
                div(class="lg:w-64 pl-8 flex-shrink-0 flex items-center justify-end md:space-x-6")
                    div(class='hidden md:block')
                        router-link( to="/" )  
                            button.bg-purple-500.text-white.font-bold.uppercase.text-xs.px-4.py-2.rounded.shadow.outline-none.mr-1.mb-1.transition-all(class='active:bg-purple-600 hover:shadow-md focus:outline-none' type='button')
                                | Iniciar Sesión
                    a(href="https://github.com/Comunidad-de-Programadores/team-vue-2" class="text-gray-400 hover:text-gray-500 transition-colors duration-200")
                        span(class="sr-only") Tailwind CSS on GitHub 
                        svg(width="20" height="20" viewBox="0 0 16 16" fill="currentColor")
                            path(fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z")

</template>
<script>
export default {
	name: "Header",
};
</script>
<style lang="scss" scoped></style>
