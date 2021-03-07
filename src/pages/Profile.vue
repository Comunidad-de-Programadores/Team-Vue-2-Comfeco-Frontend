<template lang="pug">
    div(class="grid lg:grid-cols-4 lg:gap-4 grid-cols-1 gap-10 px-4 py-5 shadow")
        div(class="col-span-1 lg:block bg-white-100")
            ProfileCard
        div(class="w-full lg:col-span-2")
            CardBadges
            ActivityLog
        div(class="col-span-1 lg:block")(style=" height: 400px;text-align: left;overflow: hidden;overflow-y: scroll;")
            SideEvents    
</template>
<script>
import CardBadges from "@/components/Profile/CardBadges";
import Counter from "@/components/Counter/Counter";
import ProfileCard from "@/components/Profile/ProfileCard";
import SideEvents from "@/components/Profile/SideEvents"
import ActivityLog from "@/components/Profile/ActivityLog"
export default {
    name: "Home",
    components: {
        Counter,
        ProfileCard,
        CardBadges,
        SideEvents,
        ActivityLog
    },
    data() {
        return {
            end:''
        };
    }
};
</script>
<style lang="scss" scoped></style>
