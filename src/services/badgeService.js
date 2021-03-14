import axiosService from "./axiosService";

export default class badgeService {
    async getBadgesUser(page){
        const url = `v1/users/badges?page=${page}`;
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