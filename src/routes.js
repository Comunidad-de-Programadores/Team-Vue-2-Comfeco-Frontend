import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import RememberPassword from "@/pages/RememberPassword.vue";
import Home from "@/pages/Home";
import RecoverPassword from "@/pages/RecoverPassword.vue";
import CancelPassword from "@/pages/CancelPassword.vue";
import TerminosCondiciones from "@/pages/TerminosCondiciones.vue";
import Workshops from "@/pages/Workshops.vue";
import MyProfile from "@/pages/MyProfile.vue";

import manageStorage from "./services/manageStorage";

import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    { path: "/login", component: Login, meta: { layout: "SimpleTemplate" } },
    {
        path: "/register",
        component: Register,
        meta: { layout: "SimpleTemplate" }
    },
    {
        path: "/recover-password",
        component: RememberPassword,
        meta: { layout: "SimpleTemplate" }
    },
    {
        path: "/recuperarClave/:email",
        component: RecoverPassword,
        meta: { layout: "SimpleTemplate" }
    },
    {
        path: "/anularRecuperarClave/:email",
        component: CancelPassword,
        meta: { layout: "SimpleTemplate" }
    },
    {
        path: "/terminos-condiciones",
        component: TerminosCondiciones,
        meta: { layout: "SimpleTemplate" }
    },
    { path: "/home", component: Home, meta: { requiresAuth: true } },
    { path: "/talleres", component: Workshops, meta: { requiresAuth: true } },
    { path: "/perfil", component: MyProfile, meta: { requiresAuth: true } }
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
            return next({ path: "/login" });
        } else {
            return next();
        }
    } else {
        if (authUser.access_token) {
            return next({ path: "/home" });
        } else {
            return next();
        }
    }
});

export default router;
