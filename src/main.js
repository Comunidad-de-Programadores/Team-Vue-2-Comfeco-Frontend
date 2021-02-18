import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "@/assets/tailwind/tailwind.css";
import router from "./routes";
import hello from "hellojs";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

hello.init(
    {
        google: process.env.VUE_APP_GOOGLE_ID,
        facebook: process.env.VUE_APP_FACEBOOK_ID
    },
    { redirect_uri: "inside" }
);

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
