<template lang="pug">
    div
        div(class=" ")
            nav(class="flex lg:flex-row flex-col justify-center p-10 lg:bg-gray-200")
                button(@click="changeTab(tabProfile = !tabProfile, 'Profile')" :class="{'border-morado-500 text-morado-500' : tabProfile}" class="flex rounded text-gray-600 hover:text-morado-500 py-4 px-6 block focus:outline-none border-2 font-medium ")
                    .mr-4
                        i(class="text-lg far fa-bell" )                        
                    .w-auto
                        p Mi Perfil
                button(@click="changeTab(tabBadges = !tabBadges, 'Badges')" :class="{'border-morado-500 text-morado-500' : tabBadges}" class="flex rounded text-gray-600 py-4 px-6 block hover:text-morado-500 border-2 focus:outline-none")
                    .mr-4
                        i( class="text-lg far fa-bell" )
                    .w-auto
                        p Tab 2
                button(@click="changeTab(tabGroups = !tabGroups, 'Groups')" :class="{'border-morado-500 text-morado-500' : tabGroups}" class="flex rounded text-gray-600 py-4 px-6 block hover:text-morado-500 border-2 focus:outline-none")
                    .mr-4
                        i( class="text-lg far fa-bell" )    
                    .w-auto
                        p Tab 3                
                button(@click="changeTab(tabEvents = !tabEvents, 'Events')" :class="{'border-morado-500 text-morado-500' : tabEvents}" class="flex rounded text-gray-600 py-4 px-6 block hover:text-morado-500 border-2 focus:outline-none")
                    .mr-4
                        i( class="text-lg far fa-bell" )    
                    .w-auto
                        p Tab 4
        
        div(v-if="tabDefault" class="grid lg:grid-cols-4 lg:gap-4 grid-cols-1 gap-10 px-4 mx-auto xl:max-w-screen-xl ")
            div(class="col-span-1 text-center")
                p 1
            div(class="w-full lg:col-span-2 text-center")
                p 2
            div(class="col-span-1 text-center")
                p 3
        
        ProfileForm(v-if="tabProfile" :tabProfile.sync="tabProfile")            


</template>
<script>
import ProfileForm from "@/components/Profile/ProfileForm";

export default {
    name: "MyProfile",
    components: {
        ProfileForm
    },
    data() {
        return {
            tabProfile: false,
            tabBadges: false,
            tabGroups: false,
            tabEvents: false
        };
    },
    computed: {
        tabDefault() {
            return (
                !this.tabProfile &&
                !this.tabBadges &&
                !this.tabGroups &&
                !this.tabEvents
            );
        }
    },
    methods: {
        changeTab(value, type) {
            switch (type) {
                case "Profile":
                    this.tabProfile = value;
                    this.tabBadges = false;
                    this.tabGroups = false;
                    this.tabEvents = false;
                    break;
                case "Badges":
                    this.tabBadges = value;
                    this.tabProfile = false;
                    this.tabGroups = false;
                    this.tabEvents = false;
                    break;
                case "Groups":
                    this.tabGroups = value;
                    this.tabBadges = false;
                    this.tabProfile = false;
                    this.tabEvents = false;
                    break;
                case "Events":
                    this.tabEvents = value;
                    this.tabBadges = false;
                    this.tabGroups = false;
                    this.tabProfile = false;
                    break;
            }
        }
    }
};
</script>
<style lang="scss" scoped></style>
