import axiosService from "./axiosService";

export default class activitiesService {
    async get() {
        const url = `v1/users/activities`;
        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: false
            }).get(url);

            return data;
        } catch (error) {
            console.log(error.messages);
            return Promise.reject(error.messages);
        }
    }
}
