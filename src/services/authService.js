import manageStorage from "./manageStorage";
import axiosService from "./axiosService";
import hello from "hellojs";

export default class authService {
    getAuthToken = async () => {
        const url = "/oauth/token";
        try {
            const { data } = await axiosService().post(url, {
                grant_type: "client_credentials",
                client_id: process.env.VUE_API_CLIENT_ID
                    ? process.env.VUE_API_CLIENT_ID
                    : 3,
                client_secret: process.env.VUE_APP_OAUTH_KEY,
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
            return Promise.reject(error);
        }
    };

    loginSocial = async socialNetwork => {
        const url = "/v1/socialLogin";
        let scope = "";
        switch (socialNetwork) {
            case "facebook":
                scope = "public_profile,email";
                break;
            case "google":
                scope = "https://www.googleapis.com/auth/userinfo.email";
                break;
            default:
                scope = "email";
                break;
        }
        return new Promise((resolve, reject) => {
            try {
                hello(socialNetwork).login({ scope: scope });
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
            return Promise.reject(error);
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
            return Promise.reject(error);
        }
    };

    cancelRecoverPassword = async model => {
        const url = "/v1/cancelRecoverPassword";
        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: true
            }).post(url, model);
            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    };

    validateRecoverPasswordExpiration = async model => {
        const url = "/v1/validateRecoverPasswordExpiration";
        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: true
            }).post(url, model);
            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    };

    logout = async function() {
        await manageStorage.clear();
    };
}
