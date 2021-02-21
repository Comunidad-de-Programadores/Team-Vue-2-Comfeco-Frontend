<template lang="pug">
    section
        p inside
        AutoScrollSlider
        ManualSlider
</template>
<script>
import AutoScrollSlider from "@/components/Slider/AutoScrollSlider";
import ManualSlider from "@/components/Slider/ManualSlider";
export default {
    name: 'Inside',
    components: {
        AutoScrollSlider,
        ManualSlider
    }
}
</script>
<style lang="scss" scoped>

</style>