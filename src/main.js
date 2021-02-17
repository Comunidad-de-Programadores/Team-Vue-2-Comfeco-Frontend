import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "@/assets/tailwind/tailwind.css";
import router from "./routes";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
