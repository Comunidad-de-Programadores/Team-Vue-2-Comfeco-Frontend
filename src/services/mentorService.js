import axiosService from "./axiosService";

export default class mentorService {
    get = async (page, area) => {
        const url = `v1/mentors?page=${page}&area=${area}`;
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
