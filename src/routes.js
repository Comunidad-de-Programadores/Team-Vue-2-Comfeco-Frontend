import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import RememberPassword from "@/pages/RememberPassword.vue";
import Home from "@/pages/Home";
import RecoverPassword from "@/pages/RecoverPassword.vue";
import CancelPassword from "@/pages/CancelPassword.vue";
import TerminosCondiciones from "@/pages/TerminosCondiciones.vue";
import Talleres from "@/pages/Talleres.vue";
import MiPerfil from "@/pages/MiPerfil.vue";

import manageStorage from "./services/manageStorage";

import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/recover-password", component: RememberPassword },
    { path: "/home", component: Home, meta: { requiresAuth: true } },
    { path: "/recuperarClave/:email", component: RecoverPassword },
    { path: "/anularRecuperarClave/:email", component: CancelPassword },
    { path: "/terminos-condiciones", component: TerminosCondiciones },
    { path: "/talleres", component: Talleres, meta: { requiresAuth: true } },    
    { path: "/perfil", component: MiPerfil, meta: { requiresAuth: true } },
];

const router = new VueRouter({
    routes,
    linkExactActiveClass: "exact-active",
    linkActiveClass: "is-active",
    mode: "history"
});

router.beforeEach((to, from, next) => {
    const authUser = manageStorage.getObject("user");
    const requiredAuth = to.matched.some(record => record.meta.requiresAuth);
    
    if (requiredAuth) {
        if (!authUser.access_token) {
            return next({ path: "/" });
        } else {
            next();
        }
    } else {
        if (authUser.access_token) {
            return next({ path: "/home" });
        } else {
            next();
        }
    }
});

export default router;
