import manageStorage from "./manageStorage";
// import Vue from "vue";

import axiosService from "./axiosService";

export default class authService {
    // axios = this.axios;
    constructor() {
        // console.log(window);
        // console.log(window.axios);
    }
    getAuthToken = async () => {
        const url = "/oauth/token";
        try {
            const { data } = await axiosService().post(url, {
                grant_type: "client_credentials",
                client_id: 3,
                client_secret: "4lBcdZEMhkWjBzqzKcdyNoMd3nGYK2HaY5n0x6L7",
                scope: "app-client-guest"
            });
            manageStorage.setObject("oauth", data);
        } catch (error) {
            return Promise.reject(error.response);
        }
    };

    login = async model => {
        const url = "/v1/login";
        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: true
            }).post(url, model);
            if (!data.error) manageStorage.setObject("user", data.user);
            return data;
        } catch (error) {
            return Promise.reject(error.response);
        }
    };

    register = async model => {
        const url = "/v1/register";
        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: true
            }).post(url, model);
            if (!data.error) manageStorage.setObject("user", data.user);
            return data;
        } catch (error) {
            return Promise.reject(error.response);
        }
    };

    recoverPassword = async model => {
        const url = "/v1/recoverPassword";
        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: true
            }).post(url, model);

            return data;
        } catch (error) {
            alert("ERROR");
            console.log("error", error.response.data);
        }
    };

    cancelRecoverPassword = async model => {
        const url = "/v1/cancelRecoverPassword";
        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: true
            }).post(url, model);
            if (data.error) {
                alert("ERROR");
                return;
            }
        } catch (error) {
            console.log("error", error.response.data);
        }
    };

    generatePassword = async model => {
        const url = "/v1/generatePassword";
        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: true
            }).post(url, model);
            if (data.error) {
                alert("ERROR");
                return;
            }
        } catch (error) {
            console.log("error", error.response.data);
        }
    };
}
