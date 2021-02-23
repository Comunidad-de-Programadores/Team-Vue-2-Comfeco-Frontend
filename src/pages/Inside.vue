<template lang="pug">
    div
        div(class="w-3/12 hidden lg:block")
            p hola
        div(class="mx-4 w-full lg:w-6/12")
            Counter(:end="end")
        div(class="w-3/12 hidden lg:block")
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
