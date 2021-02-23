<template lang="pug">
    section
        div(class="px-6 py-8")
            div(id="content-wrapper")
                router-view(class="flex justify-between container mx-auto")
</template>
<script>
export default {
	name: "Body",
};
</script>
<style lang="scss" scoped></style>
