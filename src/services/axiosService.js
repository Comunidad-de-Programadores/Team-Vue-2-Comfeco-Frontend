import axios from "axios";
import manageStorage from "./manageStorage";

export default ({ requiresAuth = false, isGeneralApi = false } = {}) => {
    const options = {};
    const headers = {};
    options.baseURL = process.env.VUE_ROOT_API;
    // options.baseURL = "http://localhost/Team-Vue-2-Comfeco-Backend/public/api";

    function checkOAuthToken() {
        return new Promise(resolve => {
            let oauthObject = manageStorage.getObject("oauth");
            if (JSON.stringify(oauthObject) === "{}") resolve(false);
            resolve(true);
        });
    }

    if (requiresAuth) {
        const storageKey = isGeneralApi ? "oauth" : "user";
        const token = manageStorage.getObject(storageKey);
        headers.Authorization = `Bearer ${token.access_token}`;
    }

    options.headers = headers;
    const instance = axios.create(options);

    instance.interceptors.request.use(
        async request => {
            request.headers["Accept"] = "application/json";
            request.headers["X-Requested-With"] = "XMLHttpRequest";

            if (
                request.url.includes("v1") &&
                isGeneralApi &&
                !(await checkOAuthToken())
            ) {
                const { data } = await axios.post(
                    `${options.baseURL}/oauth/token`,
                    {
                        grant_type: "client_credentials",
                        client_id: 3,
                        client_secret:
                            "gbDi1yBYvoYkDRtk3waVp3KfFNLJpCRI4I874yjw",
                        scope: "app-client-guest"
                    }
                );
                manageStorage.setObject("oauth", data);
                request.headers.Authorization = `Bearer ${data.access_token}`;

                return request;
            }
            return request;
        },
        error => {
            return Promise.reject(error);
        }
    );

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
