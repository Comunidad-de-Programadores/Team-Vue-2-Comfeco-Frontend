import Vue from "vue";
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import App from "./App.vue";
import "@/assets/tailwind/tailwind.css";
import { routes } from './routes'

Vue.use(VueRouter)
  
const router = new VueRouter({
	routes,
	linkExactActiveClass: 'is-active',
	mode: 'history'
})

Vue.use(Vuelidate)

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
