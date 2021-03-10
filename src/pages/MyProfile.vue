<template lang="pug">
    div
        div(class=" ")
            nav(class="flex lg:flex-row flex-col justify-center p-10 lg:bg-gray-200")
                button(v-for="(item,index) in tabsTop" :key="index" @click="selectTab(index)" :class="item.active ? item.color: ''" class="'flex rounded text-gray-600 py-4 px-6 block focus:outline-none border-2 font-medium")
                    .mr-4
                        i(:class="'text-lg ' + item.icon" )                        
                    .w-auto
                        p {{ item.title }}
        
        Profile(v-if="tabs[0].active")
        Badges(v-if="tabs[1].active")
        Groups(v-if="tabs[2].active")
        Events(v-if="tabs[3].active")
        
        ProfileForm(v-if="tabs[4].active" :tabProfile.sync="tabs[4].active")            


</template>
<script>
import ProfileForm from "@/components/Profile/ProfileForm";
import Profile from "@/components/Profile/Profile";
import Badges from "@/components/Badges/Badges";
import Groups from "@/components/Groups/Groups";
import Events from "@/components/Events/Events";

export default {
    name: "MyProfile",
    components: {
        ProfileForm,
        Profile,
        Badges,
        Groups,
        Events
    },
    data() {
        return {
            tabs: [
                {
                    id: "my-profile",
                    title: "Mi perfil",
                    icon: "far fa-bell",
                    color: "color-profile",
                    slug: "mi-perfil",
                    active: true,
                    showTop: true
                },
                {
                    id: "badges",
                    title: "Insignias",
                    icon: "far fa-bell",
                    color: "color-badges",
                    slug: "badges",
                    active: false,
                    showTop: true
                },
                {
                    id: "groups",
                    title: "Grupos",
                    icon: "far fa-bell",
                    color: "color-groups",
                    slug: "groups",
                    active: false,
                    showTop: true
                },
                {
                    id: "events",
                    title: "Eventos",
                    icon: "far fa-bell",
                    color: "color-events",
                    slug: "events",
                    active: false,
                    showTop: true
                },
                {
                    id: "edit-profile",
                    title: "Editar perfil",
                    icon: "",
                    color: "color-edit-profile",
                    slug: "editar-perfil",
                    active: false,
                    showTop: false
                }
            ]
        };
    },
    computed: {
        tabsTop() {
            return this.tabs.filter(item => item.showTop);
        }
    },
    created() {
        window.bus.$on("activeTab", index => {
            this.selectTab(index);
        });
    },
    methods: {
        selectTab(i) {
            this.tabs.map((item, index) => {
                item.active = index === i;
                return item;
            });
        }
    }
};
</script>
<style lang="scss" src="@/assets/styles/profile.scss"></style>
