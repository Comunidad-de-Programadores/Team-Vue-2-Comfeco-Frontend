<template lang="pug">
section.bg-grey-lightest.py-8
  .w-full.max-w-2xl.ml-auto.mr-auto.mt-8.bg-white
    .flex.flex-wrap.justify-center
      .w-full.px-6.py-6.text-center(class='lg:w-1/4')
        span.rounded-full.h-24.w-24.pt-9.font-semibold.inline-block.py-2.px-2.uppercase.text-pink-600.bg-pink-200.uppercase.mr-1(class='last:mr-0')
         | Social
      .w-full.px-6.py-6.text-center(class='lg:w-1/4')
        span.rounded-full.font-semibold.pt-9.w-24.h-24.inline-block.py-1.px-2.uppercase.rounded.text-pink-600.bg-pink-200.uppercase.mr-1(class='last:mr-0')
         | Social
      .w-full.px-6.py-6.text-center(class='lg:w-1/4')
        span.rounded-full.font-semibold.pt-9.w-24.h-24.inline-block.py-1.px-2.uppercase.rounded.text-pink-600.bg-pink-200.uppercase.mr-1(class='last:mr-0')
         | Social
      .w-full.px-6.py-6.text-center(class='lg:w-1/4')
        span.rounded-full.font-semibold.inline-block.pt-9.w-24.h-24.py-1.px-2.uppercase.rounded.text-pink-600.bg-pink-200.uppercase.mr-1(class='last:mr-0')
         | Social
</template>

<script>
import Badge from "./Badge"
export default {
    data() {
        return {
            communities: []
        }
    },
    components: {
        Badge
    }
}
</script>

<style>

</style>