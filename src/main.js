import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "@/assets/tailwind/tailwind.css";
import router from "./routes";
import hello from 'hellojs'

Vue.use(Vuelidate);

Vue.config.productionTip = false;

hello.init({
	google: '501944538956-torb6md00226jjhl2cvoioj4mqfb6dra.apps.googleusercontent.com',
    facebook: '271140541041745'
}, {redirect_uri: 'inside'});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
