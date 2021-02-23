<template lang="pug">
    div(class="flex flex-col bg-white max-w-sm px-2 py-4 mx-auto rounded-lg shadow-md" )                
        div.flex.px-4.py-2
            h1(class="w-6/12") Comunidades
            a(href="#" class="text-right w-6/12") Ver más
        div.px-2.py-2(style=" height: 250px;text-align: left;overflow: hidden;overflow-y: auto;")
            ul(class="-mx-4 my-6 " v-for="(community) in communities" :key="community.id")
                div.border-b-2.pb-2.mr-4.ml-4(class="")
                    li(class="flex") 
                        div(class="w-2/12 text-center flex items-center justify-center")
                            div(class="rounded-full  h-6 w-6 bg-gray-400")
                        div.text-black(class="w-8/12")
                            p.text-xs {{community.name}}
                        div(class="w-2/12")
                            p.text-xs.mb-0
                                | Unirme
</template>

<script>
export default {
    name: "Communities",
    props: {},
    data() {
        return {
            communities: [
                {
                    id: 1,
                    name: "Comunidad de Programadores"
                },
                {
                    id: 2,
                    name: "El lenguaje de los programadores"
                },
                {
                    id: 3,
                    name: "Latam Dev"
                }
            ]
        };
    },
    created() {},
    methods: {}
};
</script>

<style lang="scss" scoped></style>
