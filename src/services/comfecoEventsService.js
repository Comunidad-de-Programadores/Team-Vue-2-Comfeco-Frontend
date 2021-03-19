import axiosService from "./axiosService";

export default class comfecoEventsService {
    get = async () => {
        const url = `v1/comfecoEvents`;
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
    getByUser = async () => {
        const url = `v1/users/comfecoEvents`;
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
    assign = async id => {
        const url = `v1/comfecoEvents/${id}/assign`;
        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: false
            }).put(url);

            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    };
    unassign = async id => {
        const url = `v1/comfecoEvents/${id}/unassign`;
        try {
            const { data } = await axiosService({
                requiresAuth: true,
                isGeneralApi: false
            }).put(url);

            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    };
}
