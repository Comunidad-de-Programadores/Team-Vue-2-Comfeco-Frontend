import Vue from "vue";
import Vuelidate from 'vuelidate'
import Axios from 'axios'
import App from "./App.vue";
import "@/assets/tailwind/tailwind.css";
import router  from './routes'

Vue.prototype.$http = Axios;

Axios.interceptors.request.use((config) => {
  const oauth_bearer = localStorage.getItem('oauth-bearer');
  const user = localStorage.getItem('user');

  user ? config.headers.Authorization = user.access_token : oauth_bearer ? config.headers.Authorization = oauth_bearer : ''
  
  return config;
}, function(err) {
  return Promise.reject(err);
});

Vue.use(Vuelidate)

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
