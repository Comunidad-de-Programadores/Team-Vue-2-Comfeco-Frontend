<template lang="pug">
    div(class="z-10 container mx-auto")
        div(class="grid lg:grid-cols-4 lg:gap-4 grid-cols-1 gap-10 px-4 py-4")
            div(class="col-span-1 hidden lg:block")
                Communities
            div(class="w-full lg:col-span-2 ")
                p.text-white.text-2xl.text-center Bienvenidos a Community Fest and Code
                p.text-white.text-sm.text-center !Conoce gente, aprende y gana!
                p.my-10.text-white.text-md.text-center La proxima edicion regresa en el 2022, en la cual se planea involucrar a todos los programadores independientemente del area de conocimiento que se encuentre, todo con un mismo proposito, aprender en comunidad.
                Counter(:end="end")
                AutoScrollSlider
                ManualSlider
            div(class="col-span-1 hidden lg:block")
                RightSideWorkshops
</template>
<script>
import Communities from "@/components/Communities/Communities";
import Counter from "@/components/Counter/Counter";
import AutoScrollSlider from "@/components/Slider/AutoScrollSlider";
import ManualSlider from "@/components/Slider/ManualSlider";
import RightSideWorkshops from "@/components/Home/RightSideWorkshops";
export default {
    name: "Home",
    components: {
        Communities,
        Counter,
        RightSideWorkshops,
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
