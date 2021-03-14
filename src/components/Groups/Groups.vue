<template lang="pug">
    div
        div(class="flex flex-wrap mx-5 pt-2 justify-between mb-20")
            CurrentGroup(:currentGroup="currentGroup")
            div(class="bg-gray-300 mx-5 rounded shadow-lg sm:w-3/3 md:w-2/3")
                .bg-grey.col-12.align-middle.justify-content-center.flex.mx-5.mt-5
                    select.col-4.py-3.px-2(type='button' data-toggle='collapse' data-target='#filters')
                        option Yes
                        option No
                        option Maybe
                        | Filters                                                                                                                
                        i.fa.fa-filter
                    input#search-filter.w-full.py-3.px-2(type='text' placeholder='Buscar')
                ListGroups(:groups="groups")
</template>

<script>
import teamService from '../../services/teamService'
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
        this.getCurrent()
    },
    methods: {
          getTeams: async function() {
            const data = await this.teamService.get();
            this.groups = data.teams;
        },
        getCurrent: async function() {
            const data = await this.teamService.getCurrent();
            this.currentGroup = data.currentGroup;
        }
        
    },
    data() {
        return {
            teamService: new teamService(),
            groups: [],
            currentGroup: {}
        }
    },
};
</script>

<style></style>
