<template lang="pug">
	section
		div(class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-40")
			div()   
				div(class="grid md:grid-cols-2 gap-2 mt-7")
					.text-center(class=" lg:border-gray-300 lg:border-solid lg:border-r-2")
						router-link( :to=" $route.path !== '/' ? '/' : '' " class=" text-gray-300 dark:text-white text-words font-extrabold tracking-tight w-full rounded-sm" ) Iniciar Sesion
					.text-center
						router-link( :to=" $route.path !== 'register' ? 'register' : ''" class="text-gray-300 text-words dark:text-white font-extrabold tracking-tight w-full rounded-sm" ) Registrate
				LoginForm
</template>
<script>
import LoginForm from "@/components/LoginForm/LoginForm";

export default {
    name: "Login",
    components: {
        LoginForm
    }
};
</script>
<style lang="scss" scoped>
.border-gray {
    border-right: 1px solid #d4cece;
}
</style>
