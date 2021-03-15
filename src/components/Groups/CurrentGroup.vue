<template lang="pug">
  div.rounded.rounded-t-lg.overflow-hidden.shadow.my-3.bg-white(class="h-4/6 sm:w-3/3 md:w-1/4")
            template(v-if="currentGroup")
                div
                .photo-wrapper.p-2
                    img.w-32.h-32.rounded-full.mx-auto(:src="currentGroup.image" alt='John Doe')
                    .p-2
                    h3.text-center.text-xl.text-gray-900.font-medium.leading-8 {{currentGroup.name}}
                    .text-center.text-gray-400.text-xs.font-semibold
                        i(class="text-lg fas fa-check text-blue-500")
                        | &nbsp; {{currentGroup.description}}
                    MembersList(:members="currentGroup.members")
                button.text-gray-700.font-semibold.py-2.px-4.w-full(@click='leaveTeam(currentGroup)' :class="'bg-red-300'")
                        template
                            i.text-lg.fas.fa-ban 
                            | Abandonar  
            template(v-else)
                div
                .photo-wrapper.p-2
                    img.w-32.h-32.rounded-full.mx-auto(src='https://i.imgur.com/Y0duAfY.png' alt='John Doe')
                    .p-2
                    .text-center.text-gray-400.text-xs.font-semibold
                        strong 
                        i(class="text-lg fas fa-exclamation-triangle text-red-500")
                        | &nbsp; No eres parte de un grupo, elige uno y empieza la accion 
                        
</template>

<script>
import MembersList from "./MembersList"
export default {
    name: "CurrentGroup",
    props: {
        currentGroup: {
            required: false,
            type: Object,
            default : () => {}
        }
    },
    methods: {
        leaveTeam(currentGroup) {
            this.$emit('leaveTeam', currentGroup)
        }
    },
    components: {
        MembersList
    }
}
</script>
