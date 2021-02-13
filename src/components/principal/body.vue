<template lang="pug">
    section
        container
            div(class="lg:flex")
                //- PUEDE SER UN COMPONENTE COMO GUSTEN
                div(id="sidebar" class="fixed z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden")

                div(id="content-wrapper" class="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible")
                   Login()
</template>
<script>
import Login from "@/components/paginas/Login.vue";

export default {
	name: "Body",
	components: {
		Login,
	},
};
</script>
<style lang="scss" scoped></style>
