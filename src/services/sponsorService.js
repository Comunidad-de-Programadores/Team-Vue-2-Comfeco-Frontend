import axiosService from "./axiosService";

export default class authService {
    get = async (page, area) => {
        const url = `v1/sponsors?page=${page}&area=${area}`;
        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: true
            }).get(url);

            return data;
        } catch (error) {
            return Promise.reject(error.messages);
        }
    };
}
