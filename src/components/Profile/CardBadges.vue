<template lang="pug">
section.bg-grey-lightest.py-8
  .w-full.max-w-2xl.ml-auto.mr-auto.mt-8.bg-white.rounded-md
    .flex.flex-wrap.justify-center
      .w-full.px-6.py-6.text-center(class='lg:w-1/4')
        span.rounded-full.h-24.w-24.font-semibold.inline-block.py-2.px-2.uppercase.text-pink-600.bg-pink-200.uppercase.mr-1(class='last:mr-0')
          img.rounded-full(v-if="badges[0]" :src="badges[0]", alt="alt")
          template(v-else)
            span.rounded-full.font-semibold.pt-9.w-24.h-24.inline-block.py-1.px-2.uppercase.rounded.text-pink-600.bg-pink-200.uppercase.mr-1(class='last:mr-0')
              | Social
      .w-full.px-6.py-6.text-center(class='lg:w-1/4')
        span.rounded-full.font-semibold.w-24.h-24.inline-block.py-1.px-2.uppercase.rounded.text-pink-600.bg-pink-200.uppercase.mr-1(class='last:mr-0')
          img.rounded-full(v-if="badges[1]" :src="badges[1]", alt="alt")
          template(v-else)
            span.rounded-full.font-semibold.pt-9.w-24.h-24.inline-block.py-1.px-2.uppercase.rounded.text-pink-600.bg-pink-200.uppercase.mr-1(class='last:mr-0')
              | Social
      .w-full.px-6.py-6.text-center(class='lg:w-1/4')
        span.rounded-full.font-semibold.pt-9.w-24.h-24.inline-block.py-1.px-2.uppercase.rounded.text-pink-600.bg-pink-200.uppercase.mr-1(class='last:mr-0')
          template(v-if="badges.length > 2")
            img.rounded-full( :src="badges[2]", alt="alt")
          template(v-else)
            span
              | Social
      .w-full.px-6.py-6.text-center(class='lg:w-1/4')
        span.rounded-full.font-semibold.inline-block.pt-9.w-24.h-24.py-1.px-2.uppercase.rounded.text-pink-600.bg-pink-200.uppercase.mr-1(class='last:mr-0')
          template(v-if="badges.length > 3")
            img.rounded-full( :src="badges[3]", alt="alt")
          template(v-else)
            span
              | Social
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
            
            return data.records.reduce((accum, badge) => {
              badge.have_badge && accum.push(badge.image_url);
              return accum
            }, []);
        }
    }
}
</script>

<style>

</style>