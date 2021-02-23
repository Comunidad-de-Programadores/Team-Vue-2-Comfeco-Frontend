<template lang="pug">
    div(class="grid grid-cols-4 gap-4")
        div(class="col-span-1")
            Communities
        div(class="col-span-2")
            Counter(:end="end")
        div(class="col-span-1")
            RightSideTalleres
</template>
<script>
import Communities from "@/components/Communities/Communities";
import Counter from "@/components/Counter/Counter";
import RightSideTalleres from "@/components/Home/RightSideTalleres";
export default {
    name: "Inside",
    components: {
        Communities,
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
