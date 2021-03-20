<template lang="pug">
	section
		div(class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 md:my-20 lg:my-40 px-5 py-2 my-5")
			OptionChoiceLoginOrRegister
			LoginForm
</template>
<script>
import LoginForm from "@/components/LoginForm/LoginForm";
import authService from "../services/authService";
import OptionChoiceLoginOrRegister from "@/components/UiComponents/OptionChoiceLoginOrRegister";

export default {
    name: "Login",
    components: {
        LoginForm,
        OptionChoiceLoginOrRegister
    },
    data() {
        return {
            authService: new authService()
        };
    },
    created() {
        window.bus.$emit("login");
        // this.authService.logout()
    }
};
</script>
<style lang="scss" scoped>
.border-gray {
    border-right: 1px solid #d4cece;
}
</style>
