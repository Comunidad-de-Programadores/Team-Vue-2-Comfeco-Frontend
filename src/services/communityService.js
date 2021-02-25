import axiosService from "./axiosService";

export default class communityService {
    getList = async () => {
        const url = "/v1/communities";
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
}
