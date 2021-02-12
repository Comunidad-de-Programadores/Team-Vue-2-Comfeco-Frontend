<template lang="pug">
    nav.container.mx-auto.bg-transparent.px-4.py-4
        .flex
            a.flex-initial
                figure.logo-container.w-32(class='sm:w-40')
                    img(alt="Confeco logo" src="@/assets/images/logo.png")
            .buttons-container.ml-auto
                button.bg-purple-500.text-white.font-bold.uppercase.text-xs.px-4.py-2.rounded.shadow.outline-none.mr-1.mb-1.transition-all(class='active:bg-purple-600 hover:shadow-md focus:outline-none' type='button')
                    | Iniciar Sesión
</template>
<script>
export default {
	name: "Header",
};
</script>
<style lang="scss" scoped></style>
