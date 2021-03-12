import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "@/assets/tailwind/tailwind.css";
import "@/assets/styles/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "vue-toast-notification/dist/theme-sugar.css";
import router from "./routes";
import hello from "hellojs";
import moment from "moment";
import InfiniteLoading from "vue-infinite-loading";
import VueToast from "vue-toast-notification";
import swalPlugin from "@/plugins/SwalPlugin";

require("./utils/EventBus");
require("dotenv").config();

Vue.use(InfiniteLoading);
Vue.use(Vuelidate);
Vue.use(moment);
Vue.use(VueToast);
Vue.use(swalPlugin);

Vue.config.productionTip = false;

hello.init(
    {
        google: process.env.VUE_APP_GOOGLE_ID,
        facebook: process.env.VUE_APP_FACEBOOK_ID
    },
    { redirect_uri: "home" }
);

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
