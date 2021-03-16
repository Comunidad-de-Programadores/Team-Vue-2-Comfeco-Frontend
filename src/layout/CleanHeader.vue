<template lang="pug">
    section(class="bg-gray-100")
        div(class="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto")
            div(class="flex flex-col container mx-auto lg:flex-row lg:items-center lg:justify-between mt py-4 px-4")
                div(class="lg:flex flex-col lg:flex-row md:-mx-4")
                    div
                        router-link.flex-initial( to="/" )                          
                            figure.logo-container.w-32(class='sm:w-40 md:mx-4')
                                img(alt="Confeco logo" src="@/assets/images/comfeco.png")       
</template>
<script>
export default {
    name: "CleanHeader"
};
</script>
<style lang="scss" scoped></style>
