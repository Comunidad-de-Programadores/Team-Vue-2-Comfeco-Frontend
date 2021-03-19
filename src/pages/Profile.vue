<template lang="pug">
    div
        div(class=" ")
            nav(class="flex lg:flex-row flex-col justify-center p-10 lg:bg-gray-200")
                button(v-for="(tab, $index) in tabs" :key="$index" @click="changeTab(tab, tab.title)" :class="{'border-morado-500 text-morado-500' : tab.active}" class="flex rounded text-gray-600 hover:text-morado-500 py-4 px-6 block focus:outline-none border-2 font-medium my-2 lg:my-0")
                    .mr-4
                        i(class="text-lg far fa-bell text-white lg:text-gray-600" :class="{'border-morado-500 text-morado-500' : tab.active}")                        
                    .w-auto
                        p(class="text-white lg:text-gray-600" :class="{'border-morado-500 text-morado-500' : tab.active}") {{ tab.title }}                
        div(v-if="tabDefault")
            ProfileForm(:tabProfile.sync="tabDefault")
        div(v-for="(tab, $index) in tabs" )
            ProfileTab(v-if="tab.active && tab.title == 'Mi perfil'" :tabProfile.sync="tab.active")
            Badges(v-if="tab.active && tab.title == 'Insignias'" :tabInsignias.sync="tab.active") 
            Events(v-if="tab.active && tab.title == 'Eventos'")
            Groups(v-if="tab.active && tab.title == 'Grupos'")
</template>
<script>
import ProfileForm from "@/components/Profile/ProfileForm";
import ProfileTab from "@/components/Profile/ProfileTab";
import Badges from "@/components/Profile/Badge";
import Events from "@/components/Events/Events";
import Groups from "@/components/Groups/Groups";

export default {
    name: "ProfilePage",
    components: {
        ProfileForm,
        ProfileTab,
        Badges,
        Events,
        Groups
    },
    data() {
        return {
            tabs: [
                {
                    active: false,
                    title: "Mi perfil"
                },
                {
                    active: false,
                    title: "Insignias"
                },
                {
                    active: false,
                    title: "Grupos"
                },
                {
                    active: false,
                    title: "Eventos"
                }
            ]
        };
    },
    created() {
        window.bus.$on(
            "profileTab",
            value =>
                (this.tabs.find(tab => tab.title == "Mi perfil").active = value)
        );
        this.tabs[0].active = true;
    },
    computed: {
        tabDefault() {
            return this.tabs.every(tab => !tab.active);
        }
    },
    methods: {
        changeTab(tab, title) {
            tab.active = true;
            this.tabs.forEach(
                element =>
                    (element.active = element.title != title ? false : true)
            );
        }
    }
};
</script>
<style lang="scss" src="@/assets/styles/profile.scss"></style>
