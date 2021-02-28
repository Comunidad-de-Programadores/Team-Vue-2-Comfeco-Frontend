<template lang="pug">
    div(class="flex flex-col bg-white max-w-sm px-2 py-4 mx-auto rounded-lg shadow-md" )                
        div.flex.px-4.py-2
            h1(class="w-7/12") Talleres            
            a(@click="$router.push('talleres')" class="text-xs text-right text-blue-500 w-5/12 flex justify-end items-center cursor-pointer") Ver más            
        div.flex.px-4.mt-2.mb-2
            div(class="dropdown inline-block relative")
                button(class="flex bg-gray-300 text-gray-700 font-semibold py-2 pl-4 ml-4 rounded inline-flex items-center" )
                    p.text-xs.width-10-screen.text-left(class="w-12/12") {{ areasConocimiento.find(area => area.id == areaSelect).area }}
                    svg( class="fill-current h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20") #[path(d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z")]                                          
                ul( class="dropdown-menu absolute hidden text-gray-700 pt-1 ml-4 " style="height: 250px;text-align: left;overflow: hidden;overflow-y: scroll;")  
                    div(v-for="area in areasConocimiento")
                        p.text-xs(class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-16 block whitespace-no-wrap cursor-pointer" @click="seleccionArea(area.id)") {{area.area}}
        div.px-2.py-2.bg-gray-300
            p.text-xs Hoy
        div.px-2.py-2(style=" height: 250px;text-align: left;overflow: hidden;overflow-y: scroll;")
            ul(class="-mx-4 my-6 " v-for="(taller, $index) in list" :key="$index")
                div.border-b-2.pb-2.mr-4.ml-4(class="")
                    li(class="flex") 
                        div(class="w-2/12 text-center mt-4 ml-2")
                            div(class="rounded-full items-center justify-center h-6 w-6 bg-gray-400")
                                i(:class="iconToShow(taller.fecha_curso)")
                        div.text-black(class="w-8/12")
                            p.text-xs {{taller.name}}
                            p.text-xs.text-black.text-opacity-50 {{ formatTime(taller.fecha_curso) }}                            
                            a( target="_blank" :href="taller.url_social" class="text-xs text-right text-blue-500 items-center") By {{taller.name_user}}
            infinite-loading(:identifier="infiniteId" @infinite="infiniteHandler")
</template>
<script>
import moment from "moment";
import workshopService from "../../services/workshopService";

export default {
    name: "RightSideTalleres",
    data() {
        return {
            areaSelect: "",
            areasConocimiento: [
                { id: "", area: "Talleres por areas de conocimiento" },
                { id: 1, area: "frontend" },
                { id: 2, area: "backend" },
                { id: 3, area: "DevOps" },
                { id: 4, area: "Video Game Developers" },
                { id: 5, area: "UI/UX" },
                { id: 6, area: "Database Developer" },
                { id: 7, area: "Cloud Computing" }
            ],
            page: 1,
            list: [],
            infiniteId: +new Date(),
            workshopService: new workshopService()
        };
    },
    methods: {
        seleccionArea(id) {
            this.areaSelect = id;
            this.page = 1;
            this.list = [];
            this.infiniteId += 1;
        },
        iconToShow(hora) {
            return moment().isBefore(moment(hora))
                ? "fas fa-ellipsis-h"
                : "fas fa-check";
        },
        formatTime(hora) {
            return moment(hora).format("LTS");
        },
        async infiniteHandler($state) {
            let response = await this.workshopService.getWorkshops(
                this.page,
                this.areaSelect
            );

            if (response.records.data.length) {
                this.page += 1;
                this.list.push(...response.records.data);
                $state.loaded();
            } else {
                $state.complete();
            }
        }
    }
};
</script>
<style lang="scss" scoped></style>
