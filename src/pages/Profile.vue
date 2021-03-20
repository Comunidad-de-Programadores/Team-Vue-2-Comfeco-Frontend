<template lang="pug">
    div(class="flex md:flex-row flex-col")
        nav(class="shadow border-lg  bg-gray-100 px-2")
          button(v-for="(tab, $index) in tabs" :key="$index" @click="changeTab(tab, tab.title)"
            :class="{'is-active' : tab.active}" class="flex w-full rounded text-gray-600 hover:text-morado-500 py-4 px-6 block focus:outline-none border-2 font-medium my-2")
            .mr-4
                i(:class="[ tab.icon,  tab.active ? 'border-morado-500 text-morado-500' : '' ]")
            .w-auto
                p(class="text-gray-600" :class="{'border-morado-500 text-morado-500' : tab.active}") {{ tab.title }}
        div(v-if="tabDefault")
            ProfileForm(:tabProfile.sync="tabDefault" class="ml-0 md:ml-2")
        div.tabs-content(v-for="(tab, $index) in tabs" )
            ProfileTab(v-if="tab.active && tab.title == 'Mi perfil'" :tabProfile.sync="tab.active" class="ml-0 md:ml-2 mt-5 sm:mt md:p-1")
            Badges(v-if="tab.active && tab.title == 'Insignias'" :tabInsignias.sync="tab.active" class="ml-0 md:ml-2 mt-5 sm:mt md:p-1")
            Events(v-if="tab.active && tab.title == 'Eventos'" class="ml-0 md:ml-2 mt-5 sm:mt md:p-1")
            Groups(v-if="tab.active && tab.title == 'Grupos'" class="ml-0 md:ml-2 mt-5 sm:mt md:p-1")
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
                    title: "Mi perfil",
                    icon: "far fa-id-card"
                },
                {
                    active: false,
                    title: "Insignias",
                    icon: "fas fa-certificate"
                },
                {
                    active: false,
                    title: "Grupos",
                    icon: "fas fa-users"
                },
                {
                    active: false,
                    title: "Eventos",
                    icon: "fas fa-calendar-alt"
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
