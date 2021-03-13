<template lang="pug">
    div
        div(class=" ")
            nav(class="flex lg:flex-row flex-col justify-center p-10 lg:bg-gray-200")
                button(v-for="(tab, $index) in tabs" :key="$index" @click="changeTab(tab.active = !tab.active, tab.title)" :class="{'border-morado-500 text-morado-500' : tab.active}" class="flex rounded text-gray-600 hover:text-morado-500 py-4 px-6 block focus:outline-none border-2 font-medium ")
                    .mr-4
                        i(class="text-lg far fa-bell" )                        
                    .w-auto
                        p {{ tab.title }}                
        div(v-if="tabDefault")
            Profile( :tabProfile.sync="tabDefault")
        div(v-for="(tab, $index) in tabs" )
            ProfileForm(v-if="tab.active && tab.title == 'Mi perfil'" :tabProfile.sync="tab.active") 
            Badges(v-if="tab.active && tab.title == 'Insignias'" :tabInsignias.sync="tab.active") 
</template>
<script>
import ProfileForm from "@/components/Profile/ProfileForm";
import Profile from "@/components/Profile/Profile";
import Badges from "@/components/Profile/Badge";

export default {
    name: "MyProfile",
    components: {
        ProfileForm,
        Profile,
        Badges
    },
    data() {
        return {
            tabs : [
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
                    title: "Eventos",
                }
            ]
        };
    },
    created(){
        window.bus.$on("profileTab", () => this.tabs.find(tab => tab.title == 'Mi perfil').active = true);
    },
    computed: {
        tabDefault() {
            return this.tabs.every(tab => !tab.active)
        }
    },
    methods: {
        activarPerfil(event){
            console.log(event)
        },
        changeTab(value, title){
           this.tabs.forEach(element => element.active = element.title != title ? false : value);
        },
    }
};
</script>
<style lang="scss" src="@/assets/styles/profile.scss"></style>
