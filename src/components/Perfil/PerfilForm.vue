<template lang="pug">
    div
        div(class="flex mx-auto xl:max-w-screen-xl px-4")                
            a( @click="perfil = !perfil" class="w-1/6 m-auto cursor-pointer lg:text-left text-center", ref="bellContainer")
                i( class="text-lg fas fa-chevron-left" )  
            div(class="w-5/6 text-center lg:mr-40 mr-20")
                p(class="text-base lg:text-3xl m-5 font-bold") Editar Perfil
        form(@submit.prevent="updateProfile()" class="lg:p-20x pb-20")                
            div(class="flex mx-auto xl:max-w-screen-xl px-4")
                div(class="w-full box px-4")                        
                    img( :src="model.avatar" alt="avatar" class="w-40 h-40 object-cover rounded-full m-auto" )
                    .w-full.px-4.text-center
                        input( @change="handleImage" type="file" accept="image/*" )
            div(class="lg:flex mx-auto xl:max-w-screen-xl px-4")
                div(class="lg:w-1/2 m-4")
                    input( 
                        type="text" 
                        autofocus 
                        class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full " 
                        placeholder="Nick de usuario" 
                        v-model.trim="$v.model.nickname.$model"
                    )
                div(class="lg:w-1/2 m-4")
                    input( 
                        type="email" 
                        autofocus 
                        class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full " 
                        placeholder="Correo electrónico" 
                        v-model.trim="$v.model.email.$model"
                    )

            div(class="lg:flex mx-auto xl:max-w-screen-xl px-4")
                div(class="lg:w-full m-4")
                    select(class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full" v-model.trim="$v.model.area_id.$model" )
                        option(hidden selected value="0") Selecciona una opción
                        option(v-for="area in arr_areas", :value="area.id") {{ area.name }}

            div(class="lg:flex mx-auto xl:max-w-screen-xl px-4")
                div(class="lg:w-1/3 p-4")
                    select(class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full" v-model.trim="$v.model.genre.$model" )
                        option(hidden selected value="0") Selecciona una opción
                        option( value="M" ) Hombre
                        option( value="F" ) Mujer
                div(class="lg:w-1/3 p-4")
                    input( 
                        type="date" 
                        autofocus 
                        class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full " 
                        placeholder="Fecha de nacimiento"
                        v-model.trim="$v.model.birthday.$model"
                        pattern="[0-9]{4}/[0-9]{2}/[0-9]{2}"
                    )
                div(class="lg:w-1/3 p-4")
                    select(class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full" v-model.trim="$v.model.country_id.$model" )
                        option(hidden selected value="0") Selecciona una opción
                        option(v-for="pais in arr_paises", :value="pais.id") {{ pais.name }}

            div(class="lg:flex mx-auto xl:max-w-screen-xl px-4")
                div(class="lg:w-1/2 m-4")
                    input( 
                        type="password" 
                        autofocus 
                        class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full " 
                        placeholder="Contrasena" 
                        v-model.trim="$v.model.password.$model"
                    )
                div(class="lg:w-1/2 m-4")
                    input( 
                        type="password" 
                        autofocus 
                        class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full " 
                        placeholder="Repetir contrasena" 
                        v-model.trim="$v.model.password_confirmation.$model"
                    )
            
            div(class="lg:flex mx-auto xl:max-w-screen-xl px-4")
                div(class="lg:w-1/2 w-full flex p-4")
                    div(class="w-1/3 text-left m-auto")
                        p.text-white facebook.com/
                    div(class="w-2/3 m-auto")
                        input( 
                            type="text" 
                            autofocus 
                            class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full "
                            v-model.trim="$v.model.facebook_url.$model"
                        )
                div(class="lg:w-1/2 w-full flex p-4")
                    div(class="w-1/3 text-left m-auto")
                        p.text-white github.com/
                    div(class="w-2/3 m-auto")
                        input( 
                            type="text" 
                            autofocus 
                            class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full "
                            v-model.trim="$v.model.github_url.$model"
                        )

            div(class="lg:flex mx-auto xl:max-w-screen-xl px-4")
                div(class="lg:w-1/2 w-full flex p-4")
                    div(class="w-1/3 text-left m-auto")
                        p.text-white linkedin.com/in/
                    div(class="w-2/3 m-auto")
                        input( 
                            type="text" 
                            autofocus 
                            class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full " 
                            v-model.trim="$v.model.linkedin_url.$model"
                        )
                div(class="lg:w-1/2 w-full flex p-4")
                    div(class="w-1/3 text-left m-auto")
                        p.text-white twitter.com/
                    div(class="w-2/3 m-auto")
                        input( 
                            type="text" 
                            autofocus 
                            class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full " 
                            placeholder="Correo electrónico" 
                            v-model.trim="$v.model.twitter_url.$model"
                        )
            div(class="lg:flex mx-auto xl:max-w-screen-xl px-4")
                div(class="lg:w-full m-4")
                    textarea( 
                        type="text" 
                        autofocus 
                        class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full " 
                        placeholder="Biografia" 
                        v-model.trim="$v.model.biography.$model"
                    )   

            div(class="lg:flex flex-row-reverse px-4")        
                div(class="lg:w-1/2 m-4 ")   
                    button( class=" w-full block text-center py-3 px-3 mt-3 duration-300 rounded hover:bg-purple-500 bg-purple-600 text-white font-bold uppercase text-xs lg:m-4 focus:outline-none" :disabled="sending") Guardar cambios                        
</template>
<script>
import manageStorage from "../../services/manageStorage.js";
import perfilService from '../../services/perfilService.js';
import { required, email, sameAs } from "vuelidate/lib/validators";
import moment from "moment";
import errorManagement from "../../mixins/errorManagement";

import AvatarCropper from "vue-avatar-cropper"

export default {
    name: 'PerfilForm',
    props: ['tabPerfil'],
    mixins: [errorManagement],
    validations: {
        model: {
            nickname: {
                required
            },
            email: {
                required,
                email
            },
            genre: {
                required
            },
            birthday: {
                required
            },
            country_id: {
                required
            },
            password: {
                required
            },
            twitter_url: {
                required
            },
            facebook_url: {
                required
            },
            linkedin_url: {
                required
            },
            github_url: {
                required
            },
            biography: {
                required
            },
            area_id: {
                required
            },
            password_confirmation: {
                required,
                sameAsPassword: sameAs("password")
            }
        }
    },
    components: {
        AvatarCropper 
    },
    computed: {
        perfil:{ 
            get: function ()  {
                return this.tabPerfil
            },
            set: function(newValue) {
                this.$emit('update:tabPerfil', newValue);
            }
        },
    },
    data(){
        return {
            sending: false,
            arr_areas : null,
            arr_paises: null,
            perfilService: new perfilService(),
            model: {
                nickname: '',
                email: '',
                genre: '',
                birthday: '',
                country_id: '',
                password: '',
                password_confirmation: '',
                twitter_url: '',
                facebook_url: '',
                linkedin_url: '',
                github_url: '',
                avatar: '',
                biography:'',
                area_id: ''
            }
        }
    },
    async created(){
        let userConnected = await this.perfilService.getUserConnected(manageStorage.getObject('user').id)
        let areas = await this.perfilService.getAreas()
        let paises = await this.perfilService.getPaises()
        
        this.arr_paises = paises
        this.arr_areas = areas

        this.model.nickname = userConnected.nickname
        this.model.email = userConnected.email
        this.model.genre = userConnected.genre ? userConnected.genre : 0
        this.model.area_id = userConnected.area_id ? userConnected.area_id : 0
        this.model.biography = userConnected.biography
        this.model.birthday = userConnected.birthday
        this.model.country_id = userConnected.country_id ? userConnected.country_id : 0
        this.model.avatar = userConnected.avatar ? `http://localhost/Team-Vue-2-Comfeco-Backend/storage/app/public/${userConnected.avatar}` : 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80'
        this.model.twitter_url = userConnected.twitter_url
        this.model.facebook_url = userConnected.facebook_url
        this.model.linkedin_url = userConnected.linkedin_url
        this.model.github_url = userConnected.github_url
    },
    methods: {
        async handleImage(e){
            const selectImage = e.target.files[0]
            this.createBase64Image(selectImage)
        },
        createBase64Image(file){
            const reader = new FileReader();

            reader.onload = (e) => {
                console.log(e)
                this.model.avatar = e.target.result
            }

            reader.readAsDataURL(file)
        },
        async updateProfile() {
            this.sending = true;
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = "ERROR";
                this.$toast.open({
                    message: "Hubo un error",
                    type: "error"
                });
            } else {
                this.model.birthday = moment(this.model.birthday).format('DD/MM/YYYY')
                let response = await this.perfilService.updateUser(this.model);                    
                if (!response.error) {                    
                    this.$toast.open({
                        message: "Tus datos se han actualizado",
                        type: "success"
                    });                        
                } else {
                    this.showErrors(response);
                }
            }
            this.sending = false;
        }
    }
}
</script>
<style lang="scss" scoped>

</style>