<template lang="pug">
    div
        div(class="w-full lg:w-3/12")
            p hola
        div(class="-mx-8 w-6/12 hidden lg:block")
            Counter(:end="end")
        div(class="-mx-8 w-3/12 hidden lg:block")
            RightSideTalleres
</template>
<script>
import RightSideTalleres from "@/components/Home/RightSideTalleres";
import Counter from "@/components/Counter/Counter";
export default {
    name: "Inside",
    components: {
        Counter,
        RightSideTalleres
    },
    data() {
        return {
            end: new Date(
                new Date().setMonth(new Date().getMonth() + 12)
            ).toString()
        };
    }
};
</script>
<style lang="scss" scoped></style>
