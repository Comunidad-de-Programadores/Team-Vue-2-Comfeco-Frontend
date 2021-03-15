<template lang="pug">
    div
        div(class="flex flex-wrap mx-5 pt-2 justify-between mb-20")
            CurrentGroup(:currentGroup="currentGroup" @leaveTeam="handleLeaveTeam")
            div(class="bg-gray-300 mx-5 rounded shadow-lg sm:w-3/3 md:w-2/3")
                .bg-grey.col-12.align-middle.justify-content-center.flex.mx-5.mt-5
                    select.col-4.py-3.px-2(type='button' data-toggle='collapse' data-target='#filters' v-model="technology" @change="handleChangeTechnology")
                        option(value="") Filtrar por tecnología
                        option(v-for="technology in technologies" :value="technology.id") {{technology.name}}
                    input#search-filter.w-full.py-3.px-2(type='text' placeholder='Buscar' @keyup="handleSearchGroup")
                ListGroups(
                    :groups="filteredGroups  ? filteredGroups : groups" :currentGroup="currentGroup" 
                    @setTeam="handleSetCurrentGroup" 
                    @leaveTeam="handleLeaveTeam"
                    )
</template>

<script>
import teamService from '../../services/teamService'
import technologyService from '../../services/technologyService'
import CurrentGroup from './CurrentGroup'
import ListGroups from './ListGroups'
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
        handleLeaveTeam: async function() {
            await this.teamService.leave();
            this.currentGroup = undefined;
        },
        handleSetCurrentGroup: function(team) {
            console.log(team,'team')
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
            let text = value.target.value
            const filteredGroups = this.groups.filter(group => {
                console.log(group.name.includes(text))
                return group.name.includes(text)
            })
            console.log(filteredGroups)

            return this.filteredGroups = filteredGroups;
        },
        handleChangeTechnology(value) {
            let text = value.target.value
            const filteredGroups = this.groups.filter(group => {
                console.log(group.name.includes(text))
                return group.name.includes(text)
            })
            console.log(filteredGroups)

            return this.filteredGroups = filteredGroups;
        },
    },
    data() {
        return {
            teamService: new teamService(),
            technologyService: new technologyService(),
            groups: [],
            currentGroup: {},
            filteredGroups: undefined,
            technology: '',
            technologies: []
        }
    },
};
</script>

<style></style>
