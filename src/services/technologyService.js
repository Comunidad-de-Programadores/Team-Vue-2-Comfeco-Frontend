import axiosService from "./axiosService";

export default class technologyService {
    get = async () => {
        const url = `v1/technologies`;
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
}
