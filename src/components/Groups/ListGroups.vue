<template lang="pug">
  div.flex.flex-wrap.justify-around
    template(v-for="group in groups")
            article.overflow-hidden.rounded-lg.shadow-lg.my-2
                a(href='#')
                    img.block.h-auto.w-full.max-h-48(alt='Placeholder' src='https://picsum.photos/300/200/?random')
                header.flex.flex-col.items-center.justify-between.leading-tight.p-2(class='md:p-2 bg-blue-300')
                    h1.text-lg
                    | {{group.name}}
                    p.text-grey-100.text-sm
                        small
                        | {{group.description}}
                footer.flex.items-center.justify-between.leading-none(class='bg-blue-300')
                    button.bg-gray-300.text-gray-700.font-semibold.py-2.px-4.w-full(@click='handleClickJoin(group)')
                        i.text-lg.fas.fa-sign-in-alt.w-8
                        | Unirse

</template>

<script>
import manageStorage from "../../services/manageStorage";
export default {
    name: 'ListGroups',
    props: {
        groups: {
            required: true,
            type: Array
        },
    },
    data() {
        return {
            user: {}
        }
    },
    methods: {
        handleClickJoin(group) {
            console.log(group)
        }
    },
    mounted() {
        this.user = manageStorage.getObject("user")
    }
}
</script>