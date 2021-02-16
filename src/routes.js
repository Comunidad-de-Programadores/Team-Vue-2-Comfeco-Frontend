import Register from '@/components/views/Register.vue'
import Login from '@/components/views/Login.vue'
import RememberPassword from '@/components/views/RememberPassword.vue'
import Inside from '@/components/views/Inside.vue'
import RecoverPassword from '@/components/views/RecoverPassword.vue'
import CancelPassword from '@/components/views/CancelPassword.vue'

import VueRouter from 'vue-router'
import Vue from "vue";

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: Login },
	{ path: '/register', component: Register },
	{ path: '/recover-password', component: RememberPassword },
	{ path: '/inside', component: Inside, meta: { requiresAuth: true } },
	{ path: '/recuperarClave/:email', component: RecoverPassword },
	{ path: '/anularRecuperarClave/:email', component: CancelPassword }
];

const router = new VueRouter({
	routes,
	linkExactActiveClass: 'is-active',
	mode: 'history'
})

router.beforeEach((to, from, next) => {
	const authUser = JSON.parse(localStorage.getItem('user'))

	if(to.meta.requiresAuth){
		if (authUser && authUser.access_token) {
			next()
		} else {
			next({ path: '/' })
		}
	} else if (authUser && authUser.access_token){
		next({ path: '/inside' })
	} else {
		next();
	}
})

export default router