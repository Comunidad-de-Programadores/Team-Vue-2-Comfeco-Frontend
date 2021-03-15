<template lang="pug">
  div.flex.flex-wrap.justify-around
    template(v-for="group in groups")
            article.overflow-hidden.rounded-lg.shadow-lg.my-2
                a(href='#')
                    img.block.h-auto.w-full.max-h-48(alt='Placeholder' src='https://picsum.photos/300/200/?random')
                header.flex.flex-col.items-center.justify-between.leading-tight.p-2(class='md:p-2 bg-blue-300')
                    h1.text-lg
                    | {{group.name}}
                    p.text-grey-100.text-sm
                        small
                        | {{group.description}}
                footer.flex.items-center.justify-between.leading-none(class='bg-blue-300')
                    
                        template(v-if="!currentGroup")
                            button.text-gray-700.font-semibold.py-2.px-4.w-full(@click='handleClickJoin(group)' :class="(group && currentGroup && currentGroup.id === group.id) ? 'bg-red-300' : 'bg-gray-300'")
                                i.text-lg.fas.fa-sign-in-alt.w-8
                                | Unirse
                        template(v-else-if="group && currentGroup && currentGroup.id === group.id" )
                            button.text-gray-700.font-semibold.py-2.px-4.w-full(@click='leaveTeam(currentGroup)' :class="(group && currentGroup && currentGroup.id === group.id) ? 'bg-red-300' : 'bg-gray-300'")
                                i.text-lg.fas.fa-ban &nbsp;Abandonar
                        template(v-else)
                            button.text-gray-700.font-semibold.py-2.px-4.w-full(@click='handleClickJoin(group)' :class="(group && currentGroup && currentGroup.id === group.id) ? 'bg-red-300' : 'bg-gray-300'")
                                i.text-lg.fas.fa-ban
</template>

<script>
import manageStorage from "../../services/manageStorage";
import teamService from "../../services/teamService"
export default {
    name: 'ListGroups',
    props: {
        groups: {
            required: true,
            type: Array
        },
        currentGroup: {
            required: false,
            type: Object,
            default : () => {}
        }
    },
    data() {
        return {
            user: {},
            teamService: new teamService(),
        
        }
    },
    methods: {
         leaveTeam(currentGroup) {
            this.$emit('leaveTeam', currentGroup)
        },
        async handleClickJoin(group)
        {
            if (this.currentGroup && 
            (group.id === this.currentGroup.id)
            ) {
                console.log(group)
                return false;
            }
            if (this.currentGroup) {
                console.log(group)
                return false;
            }
            const userInformation = await this.teamService.joinTeam(group)
        
            this.$emit('setTeam' , userInformation.team)
        },
    },
    mounted() {
        this.user = manageStorage.getObject("user")
    }
}
</script>