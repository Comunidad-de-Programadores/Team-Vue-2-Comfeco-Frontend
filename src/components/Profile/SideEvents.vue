<template lang="pug">
    .flex.flex-col.w-full.shadow.rounded.rounded-t-lg.h-100.rounded-lg
        div(v-if="events.length == 0")
            h3.text-2xl.text-white Aún no hay eventos disponibles
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
            events: [],
            sending: false
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
            if (this.sending) return;
            this.sending = true;
            try {
                const data = await this.comfecoEventsService.assign(eventId);

                this.$toast.open({
                    message: data.message,
                    type: data.error ? "error" : "success"
                });
                this.getComfecoEventsList();
                window.bus.$emit("refreshActivityList");
                this.sending = false;
            } catch (error) {
                this.$toast.open({
                    message: error.response.data.message,
                    type: "error"
                });
                this.sending = false;
            }
        },
        unassign: async function(eventId) {
            if (this.sending) return;
            this.sending = true;
            try {
                const data = await this.comfecoEventsService.unassign(eventId);

                this.$toast.open({
                    message: data.message,
                    type: data.error ? "error" : "success"
                });
                this.getComfecoEventsList();
                window.bus.$emit("refreshActivityList");
                this.sending = false;
            } catch (error) {
                this.$toast.open({
                    message: error.response.data.message,
                    type: "error"
                });
                this.sending = false;
            }
        }
    }
};
</script>

<style></style>
