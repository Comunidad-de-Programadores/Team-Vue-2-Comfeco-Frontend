<template lang="pug">
	.rounded.rounded-t-lg.overflow-hidden.shadow.my-3.bg-white
		img.w-full(src='https://i.imgur.com/dYcYQ7E.png')
		.flex.justify-center.-mt-8
			img.rounded-full.border-solid.border-white.border-2.-mt-3(src='https://i.imgur.com/8Km9tLL.jpg')
		.text-center.px-3.pb-6.pt-2
			h3.text-black.text-sm.bold.font-sans Olivia Dunham
			p.mt-2.font-sans.font-light.text-grey-dark Hello, i&apos;m from another the other side!
		.flex.justify-center.pb-3.text-grey-dark
			.text-center.mr-3.border-r.pr-3
			h2 34
			span Photos
			.text-center
			h2 42
			span Friends
		a.block.text-center.mb-4.cursor-pointer(@click="goToEditProfile()")
			| Editar perfil

</template>

<script>
export default {
    methods: {
        goToEditProfile: () => {			
            window.bus.$emit("profileTab");
        },
    }
};
</script>

<style></style>
