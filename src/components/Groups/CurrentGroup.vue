<template lang="pug">
  div.rounded.rounded-t-lg.overflow-hidden.shadow.my-3.bg-white(class="h-4/6 sm:w-3/3 md:w-1/4")
            template(v-if="currentGroup")
                .text-center.px-3.pb-6.pt-2
                    h3.text-black.text-sm.bold.font-sans Olivia Dunham
                    p.mt-2.font-sans.font-light.text-grey-dark Hello, i&apos;m from another the other side!
                .flex.justify-center.pb-3.text-grey-dark
                    .text-center.mr-3.border-r.pr-3
                    h2 34
                    span Photos
                    .text-center
                    h2 42
                    span Friends
                a.block.text-center.mb-4.cursor-pointer(@click="goToEditProfile()")
                    | Editar perfil
            template(v-else)
                div
                    p.flex.justify-center.px-3.py-2.underline
                        strong 
                        i(class="text-lg fas fa-exclamation-triangle text-red-500")
                        | &nbsp; No eres parte de un grupo, elige uno y empieza la accion 
</template>

<script>
export default {
    name: "CurrentGroup",
    props: {
        currentGroup: {
            required: false,
            type: Object,
            default : () => {}
        }
    }
}
</script>
