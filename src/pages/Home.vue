<template lang="pug">
    div(class="grid lg:grid-cols-4 lg:gap-4 grid-cols-1 gap-10 px-4")
        div(class="col-span-1 hidden lg:block")
            Communities
        div(class="w-full lg:col-span-2 ")
            Counter(:end="end")
            AutoScrollSlider
            ManualSlider
        div(class="col-span-1 hidden lg:block")
            RightSideTalleres
</template>
<script>
import Communities from "@/components/Communities/Communities";
import Counter from "@/components/Counter/Counter";
import AutoScrollSlider from "@/components/Slider/AutoScrollSlider";
import ManualSlider from "@/components/Slider/ManualSlider";
import RightSideTalleres from "@/components/Home/RightSideTalleres";
export default {
    name: "Home",
    components: {
        Communities,
        Counter,
        RightSideTalleres,
        AutoScrollSlider,
        ManualSlider
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
