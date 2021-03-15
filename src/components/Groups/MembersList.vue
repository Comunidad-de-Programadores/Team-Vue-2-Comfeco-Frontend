<template lang="pug">
    div
        div(v-for="member in members").bg-white.mx-auto.max-w-sm.shadow-lg.rounded-lg.overflow-hidden
                .py-4(class='sm:flex sm:items*9enter')
                .flex-grow
                    h3.font-normal.px-2.py-3.leading-tight Miembros
                    .w-full
                        .flex.cursor-pointer.my-1.rounded(class='hover:bg-blue-lightest')
                            .w-8.h-10.text-center.py-1
                                p.text-3xl.p-0.text-green-dark &bull;
                            .h-10.py-3.px-1(class='w-4/5')
                                p(class='hover:text-blue-dark')
                                | {{member.name}}                        
</template>
<script>
export default {
    name: "MembersList",
    props: {
        members: {
            required: true,
            type: Array,
            default: () => []
        }
    }
}
</script>