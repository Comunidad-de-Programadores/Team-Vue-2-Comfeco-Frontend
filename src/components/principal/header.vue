<template lang="pug">
    section
        .uk-container
            nav.uk-navbar.uk-navbar-transparent.uk-navbar-container(uk-navbar)
                .uk-navbar-left
                    .uk-navbar-item.uk-padding-remove
                    h5.uk-margin-remove() 👋 Hola !
                .uk-navbar-right
                    .uk-navbar-item.uk-padding-remove
                        button.uk-button.uk-button-default(title="hola mundo" uk-tooltip) boton 1
                    .uk-navbar-item.uk-padding-remove(z-index="40")
                        button.uk-button.uk-button-default(title="hola mundo" uk-tooltip) boton 2

</template>
<script>
export default {
    name: 'Header',
}
</script>
<style lang="scss" scoped>

</style>