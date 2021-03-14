<template lang="pug">
    div
        div(class=" ")
            nav(class="flex lg:flex-row flex-col justify-center p-10 bg-gray-200")
                button(v-for="(tab, $index) in tabs" :key="$index" @click="changeTab(tab, tab.title)" :class="{'border-morado-500 text-morado-500' : tab.active}" class="flex my-2 rounded text-gray-600 hover:text-morado-500 py-4 px-6 focus:outline-none border-2 font-medium ")
                    .mr-4
                        i(class="text-lg far fa-bell" )                        
                    .w-auto
                        p {{ tab.title }}                
        ProfileForm(v-if="profileForm" :tabProfileForm.sync="profileForm")               
        div(v-else v-for="(tab, $index) in tabs" )
            Profile( v-if="tab.active && tab.title == 'Mi perfil'" :tabProfile.sync="tab.active" )
            Badges(  v-if="tab.active && tab.title == 'Insignias'" :tabInsignias.sync="tab.active" )
            Events(  v-if="tab.active && tab.title == 'Eventos'" :tabEventos.sync="tab.active") 
</template>
<script>
import ProfileForm from "@/components/Profile/ProfileForm";
import Profile from "@/components/Profile/Profile";
import Badges from "@/components/Profile/Badge";
import Events from "@/components/Events/Events";

export default {
    name: "ProfilePage",
    components: {
        ProfileForm,
        Profile,
        Badges,
        Events
    },
    data() {
        return {
            tabs: [
                {
                    active: true,
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
            ],
            profileForm: false
        };
    },
    watch:{
      profileForm(val){
          !val && (this.tabs.find(tab => tab.title == 'Mi perfil').active = true);
      }  
    },
    created() {
        window.bus.$on("profileTab", () => {
            this.tabs.map(tab => tab.active = false)
            this.profileForm = true
        });
    },
    methods: {
        changeTab(value, title) {
            this.profileForm = false
            this.tabs.forEach(element => element.active = element.title != title ? false : value);
        }
    }
};
</script>
<style lang="scss" src="@/assets/styles/profile.scss"></style>
