
import Register from '@/components/views/Register.vue'
import Login from '@/components/views/Login.vue'
import RememberPassword from '@/components/views/RememberPassword.vue'

export const routes = [
	{ path: '/', component: Login },
	{ path: '/register', component: Register },
	{ path: '/recover-password', component: RememberPassword }	
]