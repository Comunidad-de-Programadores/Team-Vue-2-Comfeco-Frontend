import axiosService from "./axiosService";

export default class teamService {
    get = async () => {
        const url = `v1/teams`;
        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: true
            }).get(url);

            return data;
        } catch (error) {
            console.error(error.messages);
            return Promise.reject(error.messages);
        }
    };
    getCurrent = async () => {
        const url = `v1/teams/me`;
        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: false
            }).get(url);

            return data;
        } catch (error) {
            console.error(error.messages);
            return Promise.reject(error.messages);
        }
    };
}
