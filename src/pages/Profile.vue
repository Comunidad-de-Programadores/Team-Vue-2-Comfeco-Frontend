<template lang="pug">
    div(class="flex md:flex-row flex-col justify-around")
        nav(class="shadow border-lg  bg-gray-100 px-2")
          button(v-for="(tab, $index) in tabs" :key="$index" @click="changeTab(tab, tab.title)"
            :class="{'is-active' : tab.active}" class="flex w-full rounded text-gray-600 hover:text-morado-500 py-4 px-6 block focus:outline-none border-2 font-medium my-2")
            .mr-4
              i(class="text-lg far fa-bell text-gray-600" :class="{'border-morado-500 text-morado-500' : tab.active}")
            .w-auto
              p(class="text-gray-600" :class="{'border-morado-500 text-morado-500' : tab.active}") {{ tab.title }}
        div(v-if="tabDefault")
            ProfileForm(:tabProfile.sync="tabDefault")
        div(v-for="(tab, $index) in tabs" class="mt-5 sm:mt")
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
