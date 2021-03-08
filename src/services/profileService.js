import manageStorage from "./manageStorage";
import axiosService from "./axiosService";

export default class perfilService {
    getUser = async () => {
        const url = "/v1/user";
        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: false
            }).get(url);
            this.updateUserStorage(data);
            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    };

    getAreas = async () => {
        const url = `/v1/getAreas`;

        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: false
            }).get(url);

            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    };

    getCountries = async () => {
        const url = `/v1/getCountries`;

        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: false
            }).get(url);

            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    };

    updateUser = async model => {
        const url = `/v1/updateProfile`;

        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: false
            }).post(url, model);

            if (!data.error) {
                this.updateUserStorage(data.data);
            }

            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    };
    updateUserStorage = async currentUser => {
        const { access_token, expires_at } = manageStorage.getObject("user");

        const user = {
            access_token,
            expires_at,
            ...currentUser
        };
        await manageStorage.setObject("user", user);
        window.bus.$emit("updateUser");
    };
}
