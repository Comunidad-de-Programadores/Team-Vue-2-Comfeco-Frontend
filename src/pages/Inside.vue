<template lang="pug">
    section
        p inside
        Counter(:end="end")
</template>
<script>
import Counter from "@/components/Counter/Counter";
export default {
    name: "Inside",
    components: {
        Counter
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
