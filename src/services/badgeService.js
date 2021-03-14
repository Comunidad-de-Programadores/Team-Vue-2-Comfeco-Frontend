import axiosService from "./axiosService";

export default class badgeService {
    async getBadgesUser(){
        const url = `v1/users/badges`;
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
    async getAllBadges(page){
        const url = `v1/badges?page=${page}`;
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
    }
}