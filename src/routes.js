
import Register from '@/components/views/Register.vue'
import Login from '@/components/views/Login.vue'
import RememberPassword from '@/components/views/RememberPassword.vue'
import Inside from '@/components/views/Inside.vue'
import RecoverPassword from '@/components/views/RecoverPassword.vue'
import CancelPassword from '@/components/views/CancelPassword.vue'

export const routes = [
	{ path: '/', component: Login },
	{ path: '/register', component: Register },
	{ path: '/recover-password', component: RememberPassword },
	{ path: '/inside', component: Inside },
	{ path: '/recuperarClave/:email', component: RecoverPassword },
	{ path: '/anularRecuperarClave/:email', component: CancelPassword }
]