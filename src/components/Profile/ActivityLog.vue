<template lang="pug">
.mx-auto.my-6.border-t.border-b.border-r.rounded.bg-white
	.p-4.border-l-4.border-teal.rounded
		.m-2.p-2(v-for="(activity,index) in activities" :key="index")
			span.mr-2.pr-2.text-grey-darker.border-r-2.border-grey-darker {{ activity.activity }}
			span.text-grey-darker {{ activity.created }}
</template>

<script>
import activitiesService from "@/services/activitiesService";
export default {
    data() {
        return {
            activitiesService: new activitiesService(),
            activities: []
        };
    },
    created() {
        this.activitiesList();
        window.bus.$on("refreshActivityList", this.activitiesList);
    },
    methods: {
        activitiesList: async function() {
            const data = await this.activitiesService.get();
            this.activities = data.records;
        }
    }
};
</script>

<style></style>
