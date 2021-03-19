<template lang="pug">
    .flex.flex-col.w-full.shadow.rounded.rounded-t-lg.h-100.rounded-lg
        template(v-for='event in events')
            Event(:event="event") 
</template>

<script>
import Event from "./Event";
import comfecoEventsService from "@/services/comfecoEventsService";
export default {
    data() {
        return {
            comfecoEventsService: new comfecoEventsService(),
            events: []
        };
    },
    components: {
        Event
    },

    created() {
        this.getComfecoEventsList();
        window.bus.$on("assignEvent", event => this.assign(event.id));
        window.bus.$on("unassignEvent", event => this.unassign(event.id));
    },
    methods: {
        getComfecoEventsList: async function() {
            const data = await this.comfecoEventsService.get();
            this.events = data.records;
        },
        assign: async function(eventId) {
            try {
                const data = await this.comfecoEventsService.assign(eventId);

                this.$toast.open({
                    message: data.message,
                    type: data.error ? "error" : "success"
                });
                this.getComfecoEventsList();
            } catch (error) {
                this.$toast.open({
                    message: error.response.data.message,
                    type: "error"
                });
            }
        },
        unassign: async function(eventId) {
            try {
                const data = await this.comfecoEventsService.unassign(eventId);

                this.$toast.open({
                    message: data.message,
                    type: data.error ? "error" : "success"
                });
                this.getComfecoEventsList();
            } catch (error) {
                this.$toast.open({
                    message: error.response.data.message,
                    type: "error"
                });
            }
        }
    }
};
</script>

<style></style>
