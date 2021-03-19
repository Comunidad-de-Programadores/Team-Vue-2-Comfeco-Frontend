<template lang="pug">
    div
        div(class="flex flex-wrap pt-2 justify-around mb-20")
            CurrentGroup(:currentGroup="currentGroup" @leaveTeam="handleLeaveTeam")
            div(class="rounded shadow-lg sm:w-3/3 md:w-2/3")
                .col-12.align-middle.justify-content-center.flex.mx-5.mt-5
                    select.col-4.py-3.px-2(type='button' data-toggle='collapse' data-target='#filters' v-model="technology" @change="handleChangeTechnology")
                        option(value="") Filtrar por tecnología
                        option(v-for="technology in technologies" :value="technology.id") {{technology.name}}
                    input#search-filter.w-full.py-3.px-2(type='text' placeholder='Buscar' @keyup="handleSearchGroup" v-model="searchInput")
                    button.bg-gray-300.py-3.px-2(:disabled="!technology && !searchInput" @click="clearFilters")
                        i.text-lg.fas.fa-trash 
                ListGroups(
                    :groups="filteredGroups  ? filteredGroups : groups" :currentGroup="currentGroup" 
                    @setTeam="handleSetCurrentGroup" 
                    @leaveTeam="handleLeaveTeam"
                )
</template>

<script>
import teamService from "../../services/teamService";
import technologyService from "../../services/technologyService";
import CurrentGroup from "./CurrentGroup";
import ListGroups from "./ListGroups";
export default {
    name: "Groups",
    components: {
        CurrentGroup,
        ListGroups
    },
    props: {
        defaultItems: {
            type: Object,
            required: false,
            default: () => {}
        }
    },
    created() {
        this.getTeams();
        this.getCurrent();
        this.getTechnologies();
    },
    methods: {
        clearFilters: function() {
            this.loader = this.$loading.show();
            this.filteredGroups = undefined;
            this.searchInput = "";
            this.technology = "";
            return this.loader.hide();
        },
        handleLeaveTeam: async function() {
            this.loader = this.$loading.show();
            await this.teamService.leave();
            this.currentGroup = undefined;
            await this.getTeams();
            this.loader.hide();
        },
        handleSetCurrentGroup: async function(team) {
            await this.getTeams();
            this.currentGroup = team;
        },
        getTeams: async function() {
            const data = await this.teamService.get();
            this.groups = data.teams;
        },
        getCurrent: async function() {
            const data = await this.teamService.getCurrent();
            this.currentGroup = data.team;
        },
        getTechnologies: async function() {
            const data = await this.technologyService.get();
            this.technologies = data.technologies;
        },
        handleSearchGroup(value) {
            let text = value.target.value;
            this.loader = this.$loading.show();
            let filteredGroups = [...this.groups];
            filteredGroups = filteredGroups.filter(group => {
                const groupName = group.name.toLowerCase();
                const groupDescription = group.description.toLowerCase();
                const filterText = text.toLowerCase();
                if (
                    groupName.includes(filterText) ||
                    groupDescription.includes(filterText)
                )
                    return group;
            });
            this.loader.hide();
            return (this.filteredGroups = filteredGroups);
        },
        async handleChangeTechnology(value) {
            this.loader = this.$loading.show();
            let id = value.target.value;
            let filteredGroups = [...this.groups];
            if (!id) {
                this.loader.hide();
                return (this.filteredGroups = undefined);
            }
            filteredGroups = await filteredGroups.filter(group => {
                if (group.technology_id === parseInt(id)) {
                    return group;
                }
            });
            this.loader.hide();
            return (this.filteredGroups = filteredGroups);
        }
    },
    data() {
        return {
            teamService: new teamService(),
            technologyService: new technologyService(),
            groups: [],
            currentGroup: {},
            filteredGroups: undefined,
            technology: "",
            technologies: [],
            loader: {},
            searchInput: ""
        };
    }
};
</script>

<style></style>
