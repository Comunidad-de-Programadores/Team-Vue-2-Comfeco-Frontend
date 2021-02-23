<template lang="pug">
    section
        div(class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-40")
            OptionChoiceLoginOrRegister
            RegisterForm

</template>
<script>
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import OptionChoiceLoginOrRegister from "@/components/UiComponents/OptionChoiceLoginOrRegister"

export default {
    name: "Register",
    components: {
        RegisterForm,
        OptionChoiceLoginOrRegister
    }
};
</script>
<style lang="scss" scoped>
.border-gray {
    border-right: 1px solid #d4cece;
}
</style>
