<template lang="pug">
.flex.flex-col.w-full.shadow.rounded-full
	.w-full.h-full.bg-top.bg-cover.rounded-t.mt-5
		img(:src="event.portrait_image_url", :alt="event.name")
	.flex.flex-col.w-full(class='md:flex-row')
		.flex.flex-row.justify-around.p-2.font-bold.leading-none.text-gray-800.uppercase.bg-gray-400(class='md:flex-col md:items-center md:justify-center md:w-1/4')
			div(class='md:text-3xl') FEB
			div(class='md:text-4xl mb-3') {{  formatData(event.start,"d") }}
			div(class='md:text-sm') {{  formatData(event.start,"hh a") }}
		.p-4.font-normal.text-gray-800(class='md:w-3/4').bg-white
			h1.mb-6.text-2xl.font-bold.leading-none.tracking-tight.text-gray-800 {{ event.name }}
			.flex.justify-end
				button(@click="assignToggle(event)" class="ml-auto block text-center p-3 duration-300 rounded hover:bg-purple-500 bg-purple-600 text-white font-bold uppercase text-xs px-4 py-2 focus:outline-none" v-if="event.users_count == 0") Participar
				button(@click="assignToggle(event)" class="ml-auto block text-center p-3 duration-300 rounded hover:bg-red-500 bg-red-600 text-white font-bold uppercase text-xs px-4 py-2 focus:outline-none" v-else) Abandonar
</template>

<script>
import { format as dateFormat, parseISO } from "date-fns";
export default {
    props: {
        event: {
            type: Object,
            default: function() {
                return {};
            }
        }
    },
    methods: {
        formatData: function(time, formatString) {
            return dateFormat(parseISO(time), formatString);
        },
        assignToggle: function(item) {
            if (item.users_count === 0) {
                console.log("AQUI");
                return window.bus.$emit("assignEvent", item);
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
                        return window.bus.$emit("unassignEvent", item);
                    }
                });
        }
    }
};
</script>

<style></style>
