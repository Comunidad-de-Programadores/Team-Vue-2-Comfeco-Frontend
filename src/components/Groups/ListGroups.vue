<template lang="pug">
    div
        div(v-if="groups.length === 0" class="w-full px-2 grid grid-cols-1")   
            .w-full.m-2.bg-blue-600.flex.justify-center
                p.font-sans.text-white.error-text No encontramos coincidencias
        div(v-if="groups.length > 0" class="holder w-full px-2 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4")   
            template(v-for="group in groups")
                .each.m-2.shadow-lg.border-gray-800.bg-gray-100.relative
                    img.w-full.h-32(
                        width="70"
                        height="50"
                        :src='group.image ? group.image : "https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"' 
                        :alt='group.name'
                        )
                    .badge.absolute.top-0.right-0.m-1.text-gray-200.p-1.px-2.text-xs.font-bold.rounded(:class="group.technology.color ? `bg-${group.technology.color}-500` : 'bg-gray-500'") {{group.technology.name}}
                    .info-box.text-xs.flex.p-1.font-semibold.text-gray-500.bg-gray-300
                        span.mr-1.p-1.px-2.font-bold {{group.members_count}} miembros
                    .desc.p-4.text-gray-800
                        a.title.font-bold.block.cursor-pointer(class='hover:underline') {{group.name}}
                        span.description.text-sm.block.py-2.border-gray-400.mb-2 {{group.description}}
                        template(v-if="!currentGroup")
                            button.text-gray-700.font-semibold.py-2.px-4.w-full(@click='handleClickJoin(group)' :class="(group && currentGroup && currentGroup.id === group.id) ? 'bg-red-300' : 'bg-gray-300'")
                                i.text-lg.fas.fa-sign-in-alt.w-8
                                | Unirse
                        template(v-else-if="group && currentGroup && currentGroup.id === group.id" )
                            button.text-gray-700.font-semibold.py-2.px-4.w-full(@click='leaveTeam(currentGroup)' :class="(group && currentGroup && currentGroup.id === group.id) ? 'bg-red-300' : 'bg-gray-300'")
                                i.text-lg.fas.fa-sign-out-alt
                                | &nbsp;Abandonar
                        template(v-else)
                            button.text-gray-700.font-semibold.py-2.px-4.w-full(@click='handleClickJoin(group)' :class="(group && currentGroup && currentGroup.id === group.id) ? 'bg-red-300' : 'bg-gray-300'")
                                i.text-lg.fas.fa-ban 
</template>

<script>
import Vue from "vue";
import manageStorage from "../../services/manageStorage";
import teamService from "../../services/teamService";
import VueConfetti from "vue-confetti";

Vue.use(VueConfetti);
export default {
    name: "ListGroups",
    props: {
        groups: {
            required: true,
            type: Array
        },
        currentGroup: {
            required: false,
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            user: {},
            teamService: new teamService()
        };
    },
    methods: {
        leaveTeam(currentGroup) {
            this.$emit("leaveTeam", currentGroup);
        },
        async handleClickJoin(group) {
            const loader = this.$loading.show();
            if (this.currentGroup && group.id === this.currentGroup.id) {
                return false;
            }
            if (this.currentGroup) {
                loader.hide();
                return false;
            }
            const userInformation = await this.teamService.joinTeam(group);

            this.$emit("setTeam", userInformation.team);
            this.$confetti.start();
            setTimeout(() => {
                loader.hide();
                this.$confetti.stop();
            }, 1000);
        }
    },
    mounted() {
        this.user = manageStorage.getObject("user");
    }
};
</script>
