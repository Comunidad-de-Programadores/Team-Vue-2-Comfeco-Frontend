import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import RememberPassword from "@/pages/RememberPassword.vue";
import Inside from "@/pages/Inside.vue";
import RecoverPassword from "@/pages/RecoverPassword.vue";
import CancelPassword from "@/pages/CancelPassword.vue";

import manageStorage from "./services/manageStorage";

import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/inside"
    },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/recover-password", component: RememberPassword },
    { path: "/inside", component: Inside, meta: { requiresAuth: true } },
    { path: "/recuperarClave/:email", component: RecoverPassword },
    { path: "/anularRecuperarClave/:email", component: CancelPassword }
];

const router = new VueRouter({
    routes,
    linkExactActiveClass: "exact-active",
    linkActiveClass: "is-active",
    mode: "history"
});

router.beforeEach((to, from, next) => {
    const authUser = manageStorage.getObject("user");
    console.log(authUser);
    const requiredAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiredAuth && !authUser.access_token) {
        return next({ path: "/login" });
    }
    next();
});

export default router;
