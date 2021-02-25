import manageStorage from "./manageStorage";
import axiosService from "./axiosService";
import hello from "hellojs";

export default class authService {
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
            // console.log(error);
            console.log("error2", error);
            return Promise.reject(error);
        }
    };

    loginSocial = async socialNetwork => {
        const url = "/v1/socialLogin";
        return new Promise((resolve, reject) => {
            try {
                hello(socialNetwork).login({ scope: "email" });
                hello.on("auth.login", async auth => {
                    let user = await hello(auth.network).api("me");
                    let model = {
                        user_id: null,
                        name: user.name,
                        email: user.email,
                        provider: socialNetwork,
                        token: auth.authResponse.access_token,
                        expiresIn: auth.authResponse.expires_in,
                        id: user.id,
                        avatar: user.picture
                    };

                    const { data } = await axiosService({
                        requiresAuth: true,
                        isGeneralApi: true
                    }).post(url, model);
                    if (!data.error) manageStorage.setObject("user", data.user);

                    resolve(data);
                });
            } catch (error) {
                return reject(error);
            }
        });
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
            return Promise.reject(error);
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
            console.log("error", error);
        }
    };

    generatePassword = async model => {
        const url = "/v1/generatePassword";
        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: true
            }).post(url, model);

            return data;
        } catch (error) {
            console.log("error", error);
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
            console.log("error", error);
        }
    };

    validateRecoverPasswordExpiration = async model => {
        const url = "/v1/validateRecoverPasswordExpiration";
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
            console.log("error", error);
        }
    };

    logout = async function() {
        await manageStorage.clear();
    };
}
