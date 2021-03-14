<template lang="pug">
  div.rounded.rounded-t-lg.overflow-hidden.shadow.my-3.bg-white(class="h-4/6 sm:w-3/3 md:w-1/4")
            template(v-if="currentGroup")
                .text-center.px-3.pb-6.pt-2
                    h3.text-black.text-sm.bold.font-sans 
                        strong {{currentGroup.name}}
                    p.mt-2.font-sans.font-light.text-grey-dark {{currentGroup.description}}
                ul  
                    li(v-for="member in currentGroup.members") {{member.name}}
                button.text-gray-700.font-semibold.py-2.px-4.w-full(@click='' :class="'bg-red-300'")
                        template
                            i.text-lg.fas.fa-ban 
                            | Abandonar  
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
