import axiosService from "./axiosService";

export default class authService {
    getWorkshops = async (page, area) => {
        const url = `v1/workshops?page=${page}&area=${area}`;
        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: true
            }).get(url);

            return data;
        } catch (error) {
            console.log(error.messages);
            return Promise.reject(error.messages);
        }
    };
}
