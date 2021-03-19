<template lang="pug">
    div.loading(v-if="show")
        .nb-spinner
</template>

<script>
export default {
    props: {},
    data() {
        return {
            show: false
        };
    },
    computed: {},
    created() {
        window.bus.$on("loading", data => {
            this.show = data;
        });
    }
};
</script>
<style scoped>
.loading {
    align-items: center;
    background: rgba(0, 0, 0, 0.8);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9999;
}
.nb-spinner {
    -webkit-animation: 1s spin linear infinite;
    animation: 1s spin linear infinite;
    background: transparent;
    border-radius: 50%;
    border-right: 4px solid transparent;
    border-top: 4px solid #8b5cf6;
    height: 75px;
    margin: 0;
    width: 75px;
}

@keyframes spin {
    from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
