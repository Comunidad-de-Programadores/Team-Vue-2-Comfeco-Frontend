<template lang="pug">
section.bg-grey-lightest.py-8
    .w-full.max-w-2xl.ml-auto.mr-auto.mt-8.bg-white.rounded-md
        .flex.flex-wrap.justify-center
            .px-6.py-6.text-center(class='w-1/2 md:w-1/4' v-for='(item,index) in badges' :key="index")
                span.rounded-full.h-24.w-24.font-semibold.inline-block.py-2.px-2.uppercase.text-pink-600.bg-pink-200.uppercase(class='last:mr-0 flex justify-center items-center mx-auto')
                    img.rounded-full(:src="item.image_url" :alt="item.name" :class="{'hasNoBadge': item.have_badge === 0}")
</template>

<script>
import badgeService from "@/services/badgeService";

export default {
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

<style lang="scss">
.hasNoBadge {
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
}
</style>
