<template lang="pug">
	div
		.rounded.rounded-t-lg.overflow-hidden.shadow.bg-white.pt-10
			.flex.justify-center
				img.rounded-full.h-32.w-32.flex.items-center.justify-center.mx-auto.border-solid.border-white.border-2(:src="user.avatar")
			.text-center.px-3.pb-6
				p.mt-2.font-sans.font-light.text-grey-dark 👋&nbsp; Hola, {{user.name}}
			a.block.text-center.cursor-pointer(@click="goToEditProfile()" class="py-2 px-4 bg-purple-500 text-white font-semibold shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 relative bottom-0")
				| Editar perfil
</template>

<script>
import manageStorage from "../../services/manageStorage";
export default {
    name: "ProfileCard",
    data() {
        return {
            user: {}
        };
    },
    methods: {
        goToEditProfile: () => {
            window.bus.$emit("profileTab", false);
        }
    },
    mounted() {
        this.user = manageStorage.getObject("user");
    }
};
</script>

<style></style>
