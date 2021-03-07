import axiosService from "./axiosService";

export default class perfilService {
    getUserConnected = async (id) => {
        const url = `/v1/showUserConnected/${id}`;
          
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

    getAreas = async() => {
        const url = `/v1/showAreas`;
          
        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: false
            }).get(url);

            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    getPaises = async() => {
        const url = `/v1/showCountries`;
          
        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: false
            }).get(url);

            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    updateUser = async (model) => {
        const url = `/v1/updateProfile`;
          
        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: false
            }).put(url, model);

            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
