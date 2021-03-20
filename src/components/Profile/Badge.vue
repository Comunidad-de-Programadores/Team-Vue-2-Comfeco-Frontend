<template lang="pug">
    div(id="badges-container")
        div(class="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4")
            div(v-for="(badge, $index) in badges" :key="$index" class="mb-10 m-2 shadow-lg border-gray-800 bg-gray-300 relative rounded-t-md rounded-b-md")
                div.rounded-full.h-24.w-24.flex.items-center.justify-center.mx-auto.my-8
                    img(class="w-full rounded-full" :src="badge.image_url" alt="")
                div(v-if="badge.have_badge" class="badge absolute top-0 right-0 bg-purple-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded") Obtenida
                div(class="desc p-4 text-gray-800")
                    span(class="title font-bold block text-center") {{ badge.name }}
                    span(class="title font-medium block text-center my-4") Descripcion
                    span( class="description text-sm block py-2 border-gray-400 mb-2") {{ badge.description }}
                    .divide-y.divide-black-500
                        span(class="title font-medium block text-center my-4") Como Ganarla?
                        span( class="description text-sm block py-2 border-gray-400 ") {{ badge.how_win }}
</template>
<script>
import badgeService from "@/services/badgeService";

export default {
    name: "Badges",
    data() {
        return {
            badgeService: new badgeService(),
            badges: []
        };
    },
    async created() {
        this.badges = await this.getList();
    },
    methods: {
        async getList() {
            const data = await this.badgeService.getBadgesUser();
            return data.records;
        }
    }
};
</script>
<style lang="scss"></style>
