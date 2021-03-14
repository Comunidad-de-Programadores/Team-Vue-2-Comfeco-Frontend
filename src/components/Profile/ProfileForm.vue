<template lang="pug">
    div
        div(class="flex mx-auto xl:max-w-screen-xl px-4")
            a( @click="closeEditProfile()" class="w-1/6 m-auto cursor-pointer lg:text-left text-center", ref="bellContainer")
                i( class="text-lg fas fa-chevron-left" )  
            div(class="w-5/6 text-center lg:mr-40 mr-20")
                p(class="text-base lg:text-3xl m-5 font-bold") Editar Perfil
        form(@submit.prevent="updateProfile()" class="lg:p-20x pb-20")
            div(class="flex mx-auto xl:max-w-screen-xl px-4")
                div(class="w-full box px-4")        
                    img(v-if="model.avatar" :src="model.avatar" alt="avatar" class="w-40 h-40 object-cover rounded-full m-auto" )
                    template(v-else)
                        div(class="flex justify-center")
                            <svg class="m-auto animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
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
                    div(v-if="customErrors.nickname")
                        .error.text-error.text-xs.text-center(v-html="customErrors.nickname")
                div(class="lg:w-1/2 m-4")
                    input( 
                        type="email" 
                        autofocus 
                        class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full " 
                        placeholder="Correo electrónico" 
                        v-model.trim="$v.model.email.$model"
                        disabled
                    )
                    div(v-if="customErrors.email")
                        .error.text-error.text-xs.text-center(v-html="customErrors.email")
            div(class="lg:flex mx-auto xl:max-w-screen-xl px-4")
                div(class="lg:w-full m-4")
                    select(class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full" v-model.trim="$v.model.area_id.$model" )
                        option(hidden selected value="0") Selecciona una opción
                        option(v-for="area in arr_areas", :value="area.id") {{ area.name }}
                    div(v-if="customErrors.area_id")
                        .error.text-error.text-xs.text-center(v-html="customErrors.area_id")
            div(class="lg:flex mx-auto xl:max-w-screen-xl px-4")
                div(class="lg:w-1/3 p-4")
                    select(class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full" v-model.trim="$v.model.genre.$model" )
                        option(hidden selected value="0") Selecciona una opción
                        option( value="M" ) Hombre
                        option( value="F" ) Mujer
                    div(v-if="customErrors.genre")
                        .error.text-error.text-xs.text-center(v-html="customErrors.genre")
                div(class="lg:w-1/3 p-4")
                    input( 
                        type="date" 
                        autofocus 
                        class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full " 
                        placeholder="Fecha de nacimiento"
                        v-model.trim="$v.model.birthday.$model"
                        pattern="[0-9]{4}/[0-9]{2}/[0-9]{2}"
                    )
                    div(v-if="customErrors.birthday")
                        .error.text-error.text-xs.text-center(v-html="customErrors.birthday")
                div(class="lg:w-1/3 p-4")
                    select(class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full" v-model.trim="$v.model.country_id.$model" )
                        option(hidden selected value="0") Selecciona una opción
                        option(v-for="pais in arr_countries", :value="pais.id") {{ pais.name }}
                    div(v-if="customErrors.country_id")
                        .error.text-error.text-xs.text-center(v-html="customErrors.country_id")
            div(class="lg:flex mx-auto xl:max-w-screen-xl px-4")
                div(class="lg:w-1/2 m-4")
                    input( 
                        type="password" 
                        autofocus 
                        class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full " 
                        placeholder="Contrasena" 
                        v-model.trim="$v.model.password.$model"
                    )
                    div(v-if="customErrors.password")
                        .error.text-error.text-xs.text-center(v-html="customErrors.password")
                div(class="lg:w-1/2 m-4")
                    input( 
                        type="password" 
                        autofocus 
                        class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full " 
                        placeholder="Repetir contrasena" 
                        v-model.trim="$v.model.password_confirmation.$model"
                    )
                    div(v-if="customErrors.password_confirmation")
                        .error.text-error.text-xs.text-center(v-html="customErrors.password_confirmation")
            
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
                        div(v-if="customErrors.facebook_url")
                            .error.text-error.text-xs.text-center(v-html="customErrors.facebook_url")
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
                        div(v-if="customErrors.github_url")
                            .error.text-error.text-xs.text-center(v-html="customErrors.github_url")

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
                        div(v-if="customErrors.linkedin_url")
                            .error.text-error.text-xs.text-center(v-html="customErrors.linkedin_url")
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
                        div(v-if="customErrors.twitter_url")
                            .error.text-error.text-xs.text-center(v-html="customErrors.twitter_url")
            div(class="lg:flex mx-auto xl:max-w-screen-xl px-4")
                div(class="lg:w-full m-4")
                    textarea( 
                        type="text" 
                        autofocus 
                        class="rounded py-3 px-3 mt-3 focus:outline-none bg-gray-100 w-full " 
                        placeholder="Biografia" 
                        v-model.trim="$v.model.biography.$model"
                    )
                    div(v-if="customErrors.biography")
                        .error.text-error.text-xs.text-center(v-html="customErrors.biography")

            div(class="lg:flex flex-row-reverse px-4")        
                div(class="lg:w-1/2 m-4 ")   
                    button( class=" w-full block text-center py-3 px-3 mt-3 duration-300 rounded hover:bg-purple-500 bg-purple-600 text-white font-bold uppercase text-xs lg:m-4 focus:outline-none" :disabled="sending") Guardar cambios                        
</template>
<script>
import profileService from "../../services/profileService.js";
import { required, email } from "vuelidate/lib/validators";
import moment from "moment";
import errorManagement from "../../mixins/errorManagement";

import AvatarCropper from "vue-avatar-cropper";

export default {
    name: "ProfileForm",
    props: ["tabProfile"],
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
            password_confirmation: {
                // required,
                // sameAsPassword: sameAs("password")
            },
            twitter_url: {
                required
            },
            facebook_url: {
                // required
            },
            linkedin_url: {
                // required
            },
            github_url: {
                // required
            },
            biography: {
                // required
            },
            area_id: {
                // required
            }
        }
    },
    components: {
        AvatarCropper
    },
    computed: {
        profile: {
            get: function() {
                return this.tabProfile;
            },
            set: function() {
                this.$emit("update:tabProfile", false);
            }
        }
    },
    data() {
        return {
            sending: false,
            arr_areas: null,
            arr_countries: null,
            profileService: new profileService(),
            model: {
                nickname: "",
                email: "",
                genre: "",
                birthday: "",
                country_id: "",
                password: "",
                password_confirmation: "",
                twitter_url: "",
                facebook_url: "",
                linkedin_url: "",
                github_url: "",
                avatar: "",
                biography: "",
                area_id: ""
            }
        };
    },
    async created() {
        let userConnected = await this.profileService.getUser();
        let areas = await this.profileService.getAreas();
        let countries = await this.profileService.getCountries();

        this.arr_countries = countries;
        this.arr_areas = areas;

        this.model = userConnected;

        this.model.avatar = userConnected.avatar
            ? userConnected.avatar
            : "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80";
    },
    methods: {
        async handleImage(e) {
            const selectImage = e.target.files[0];
            this.createBase64Image(selectImage);
        },
        createBase64Image(file) {
            const reader = new FileReader();

            reader.onload = e => {
                console.log(e);
                this.model.avatar = e.target.result;
            };

            reader.readAsDataURL(file);
        },
        async updateProfile() {
            this.sending = true;
            this.modelDataToSend = { ...this.model };
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = "ERROR";
                this.$toast.open({
                    message: "Hubo un error",
                    type: "error"
                });
            } else {
                if (
                    this.modelDataToSend.birthday != "" &&
                    this.modelDataToSend.birthday != null
                ) {
                    this.modelDataToSend.birthday = moment(
                        this.modelDataToSend.birthday
                    ).format("DD/MM/YYYY");
                }
                try {
                    let response = await this.profileService.updateUser(
                        this.modelDataToSend
                    );

                    if (!response.error) {
                        this.$toast.open({
                            message: "Tus datos se han actualizado",
                            type: "success"
                        });
                    }
                } catch (error) {
                    this.showErrors(error);
                }
            }
            this.sending = false;
        },
        closeEditProfile() {
            window.bus.$emit("profileTab", true);
        }
    }
};
</script>
<style lang="scss" scoped></style>
