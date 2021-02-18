<template lang="pug">
	div(class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-40")
		div(class="grid md:grid-cols-1 gap-2 mt-7")                                  
			h4(class="text-2xl text-gray-800 dark:text-white font-extrabold tracking-tight text-words" v-if="errors.length <= 0") Espere un momento!
			.error.text-md.font-semibold.text-center.mt-3(:class="{'text-error': submitStatus == 'ERROR', 'text-success': submitStatus == 'SUCCESS'}")
				h4(v-for="error in errors") {{error}}

			button(@click="$router.push('/')" class="block text-center p-3 duration-300 rounded hover:bg-purple-500 w-full mt-10 bg-purple-600 text-white font-bold uppercase text-xs px-4 py-2 focus:outline-none") Volver al inicio.
</template>
<script>
import catchErrors from "../services/catchErrors";
import authService from "../services/authService";

export default {
	name: "CancelPassword",
	data() {
		return {
			auth: new authService(),
            errorSvc: new catchErrors(),
            errors: [],
			submitStatus: null
		};
	},
	async beforeCreate() {
		let response = await this.auth.cancelRecoverPassword(this.$route.params.email);

		if (!response.error) {
			this.submitStatus = "ERROR";
			this.errors = this.errorSvc.showErrors(response.errors)
		} else {
			this.submitStatus = "SUCCESS";
			this.errors = this.errorSvc.showErrors(response.errors)
		}
	},
	methods: {},
};
</script>
<style lang="scss" scoped>
.border-gray {
	border-right: 1px solid #d4cece;
}
</style>
