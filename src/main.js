import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "@/assets/tailwind/tailwind.css";
import "@/assets/styles/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "./routes";
import hello from "hellojs";
import moment from "moment";
import InfiniteLoading from "vue-infinite-loading";
require("./utils/EventBus");

Vue.use(InfiniteLoading);
Vue.use(Vuelidate);
Vue.use(moment);



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
