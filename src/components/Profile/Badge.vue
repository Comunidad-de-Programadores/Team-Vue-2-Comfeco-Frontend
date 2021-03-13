<template lang="pug">
    .mt-10   
        div(class="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4")            
            ul(v-for="(badge, $index) in badges" :key="$index" class="mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative rounded-t-md rounded-b-md")
                img(class="w-full rounded-t-md" :src="badge.image_url" alt="")
                div(v-if="badge.have" class="badge absolute top-0 right-0 bg-purple-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded") Obtenida
                div(class="desc p-4 text-gray-800")
                    span(class="title font-bold block") {{ badge.name }}
                    span( class="description text-sm block py-2 border-gray-400 mb-2") {{ badge.description }}
            infinite-loading(:identifier="infiniteId" @infinite="infiniteHandler")
</template>
<script>
import badgeService from '@/services/badgeService';

export default {
    name:'Badge',
    data(){
        return {
            badgesUser: [],
            badgeService: new badgeService(),
            page: 1,
            list: [],
            infiniteId: +new Date(),
        }
    },
    computed:{
        badges(){
            if( this.badgesUser && this.list.length > 0 ){
                return this.list.map( badge => {
                    this.badgesUser.some(userBadge => userBadge.id === badge.id) ? badge.have = true : badge.have = false
                    return badge
                })
            } else {
                return []
            }       
        }
    },
    async created(){
        this.badgesUser = (await this.badgeService.getBadgesUser()).records
    },
    methods: {
        async infiniteHandler($state) {
            let response = await this.badgeService.getAllBadges(this.page)   

            if (response.badges.data.length) {
                this.page += 1;
                this.list.push(...response.badges.data);
                $state.loaded();
            } else {
                $state.complete();
            }
        }
    }
}
</script>
<style lang="scss" scoped>

</style>