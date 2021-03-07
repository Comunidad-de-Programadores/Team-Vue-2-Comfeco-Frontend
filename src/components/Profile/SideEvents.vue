<template lang="pug">
    .flex.flex-col.w-full.shadow.rounded.rounded-t-lg.h-100
        template(v-for='event in events')
            Event  
</template>

<script>
import Event from "./Event"
export default {
    data() {
        return {
            events: new Array(4)
        }
    },
    components: {
        Event
    }
}
</script>

<style>

</style>