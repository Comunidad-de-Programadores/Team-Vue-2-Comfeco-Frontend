<template lang="pug">
    section.bottom-0.left-0.w-full.px-3.py-4.flex.flex-wrap.items-center(class="md:px-10 static md:fixed bg-gray-300")
        div.first-title.mr-auto.order-1
            h1
                img.w-12(src="../assets/images/brand.png")
        div.copyright.mx-auto.text-center.order-3.mt-2(class="md:order-2 md:mt-0")
            h1.font-bold.text-sm
                | © 2021 COMFECO. Powered by Team Vue 2
        div.social-networks.ml-auto.flex.order-2(class="md:order-3")
            .network.mr-2
                a.block(href="#")
                    img.rounded.w-8.h-8.object-cover.object-center(src="../assets/icons/fb.svg")
            .network.mr-2
                a.block(href="#")
                    img.rounded.w-8.h-8.object-cover.object-center(src="../assets/icons/ws.svg")
            .network.mr-2
                a.block(href="#")
                    img.rounded.w-8.h-8.object-cover.object-center(src="../assets/icons/tw.svg")
            .network
                a.block(href="#")
                    img.rounded.w-8.h-8.object-cover.object-center(src="../assets/icons/ig.svg")
</template>
<script>
export default {
    name: "Footer"
};
</script>
<style lang="scss" scoped></style>
