<template lang="pug">
    section
        div(class="lg:flex")
            div(id="sidebar" class="fixed z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block invisible")

            div(id="content-wrapper" class="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible")
                router-view
</template>
<script>
export default {
	name: "Body",
};
</script>
<style lang="scss" scoped></style>
