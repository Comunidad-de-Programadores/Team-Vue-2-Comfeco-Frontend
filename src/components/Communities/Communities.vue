<template lang="pug">
    div(class="flex flex-col bg-white max-w-sm px-2 py-4 mx-auto rounded-lg shadow-md" )                
        div.flex.px-4.py-2
            h1(class="w-7/12") Comunidades
            a(href="#" class="text-xs text-right text-blue-500 w-5/12 flex justify-end items-center") Ver más
        div.px-2.py-2(style=" height: 250px;text-align: left;overflow: hidden;overflow-y: auto;")
            ul(class="-mx-4 my-6 " v-for="(community) in communities" :key="community.id")
                div.border-b-2.pb-2.mr-4.ml-4(class="")
                    li(class="flex") 
                        div(class="w-2/12 text-center flex items-center justify-center")
                            div(class="rounded-full  h-6 w-6 bg-gray-400")
                        div.text-black(class="w-7/12 flex justify-start items-center")
                            p.text-xs {{community.name}}
                        div(class="w-3/12")
                            a.text-xs.mb-0.text-blue-500(href="#")
                                | Unirme
</template>

<script>
import communityService from "../../services/communityService";
export default {
    name: "Communities",
    props: {},
    data() {
        return {
            communityService: new communityService(),
            communities: []
        };
    },
    created() {
        this.getCommunitiesList();
    },
    methods: {
        getCommunitiesList: async function() {
            const data = await this.communityService.getList();
            this.communities = data.records;
        }
    }
};
</script>

<style lang="scss" scoped></style>
