<template lang="pug">
    div.events-container(class="px-6 xl:px-0")
        div.container.mx-auto
            div.header-title.mt-10.mb-8
                h3.text-white.text-center.text-3xl.uppercase Eventos activos
            div(class="list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4")
                div.event(v-for="(item,index) in events" :key="index")
                    div.portrait
                        figure
                            img(:src="item.portrait_image_url")
                    div.body-event
                        div.title
                            h5 {{ item.name }}
                        div.content(v-html="item.content")
                        div.buttons-container.flex
                            a(href="#" class="text-xs text-blue-500 flex justify-end items-center")
                                | Más información
                            button(@click="assignToggle(item)" class="ml-auto block text-center p-3 duration-300 rounded hover:bg-purple-500 bg-purple-600 text-white font-bold uppercase text-xs px-4 py-2 focus:outline-none" v-if="item.users_count == 0") Participar
                            button(@click="assignToggle(item)" class="ml-auto block text-center p-3 duration-300 rounded hover:bg-red-500 bg-red-600 text-white font-bold uppercase text-xs px-4 py-2 focus:outline-none" v-else) Abandonar
</template>

<script>
import comfecoEventsService from "../../services/comfecoEventsService";
export default {
    name: "Events",
    data() {
        return {
            comfecoEventsService: new comfecoEventsService(),
            events: []
        };
    },
    created() {
        this.getComfecoEventsList();
    },
    methods: {
        getComfecoEventsList: async function() {
            const data = await this.comfecoEventsService.get();
            this.events = data.records;
        },
        assignToggle: function(item) {
            if (item.users_count == 0) {
                return this.assign(item.id);
            }

            this.$swal
                .fire({
                    title: "COMFECO",
                    text: "¿Estás seguro de abandonar este evento?",
                    showCancelButton: true,
                    cancelButtonText: "Cancelar",
                    confirmButtonText: `Sí`
                })
                .then(async result => {
                    if (result.isConfirmed) {
                        return this.unassign(item.id);
                    }
                });
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
        }
    }
};
</script>

<style lang="scss" src="./style.scss"></style>
