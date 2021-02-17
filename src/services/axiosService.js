import axios from "axios";
import manageStorage from "./manageStorage";

export default ({ requiresAuth = false, isGeneralApi = false } = {}) => {
    const options = {};
    const headers = {};
    options.baseURL = "https://comfeco.tk/api";
    headers["X-Requested-With"] = "XMLHttpRequest";

    if (requiresAuth) {
        const storageKey = isGeneralApi ? "oauth" : "user";
        const token = manageStorage.getObject(storageKey);
        headers.Authorization = `Bearer ${token.access_token}`;
    }
    options.headers = headers;
    const instance = axios.create(options);

    instance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            return Promise.reject(error);
        }
    );
    return instance;
};
