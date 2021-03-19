<template lang="pug">
.flex.flex-col.w-full.shadow.rounded-full
  .w-full.h-full.bg-top.bg-cover.rounded-t.mt-5
    img(src="@/assets/images/vue.png", alt="alt" class="object-fit")
  .flex.flex-col.w-full(class='md:flex-row rounded-full')
    .flex.flex-row.justify-around.p-4.font-bold.leading-none.text-gray-800.uppercase.bg-gray-400(class='md:flex-col md:items-center md:justify-center md:w-1/4')
      div(class='md:text-3xl') FEB
      div(class='md:text-6xl') 13
      div(class='md:text-xl') 7 pm
    .p-4.font-normal.text-gray-800(class='md:w-3/4').bg-white
      h1.mb-4.text-2xl.font-bold.leading-none.tracking-tight.text-gray-800 Composition API
        .flex.justify-end(class='w-1/2')
        button.btn-outline-primary.transition.duration-300.ease-in-out.border.border-purple-700.text-purple-700.font-normal.py-2.px-4.rounded(type='button' class='focus:outline-none focus:shadow-outline hover:bg-purple-700 hover:text-white') Ver más  
</template>

<script>
export default {

}
</script>

<style>

</style>