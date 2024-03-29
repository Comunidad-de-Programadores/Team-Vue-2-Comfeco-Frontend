import axios from "axios";
import manageStorage from "./manageStorage";

export default ({ requiresAuth = false, isGeneralApi = false } = {}) => {
    const options = {};
    const headers = {};
    const oauthkey = process.env.VUE_APP_OAUTH_KEY;
    options.baseURL = process.env.VUE_APP_ROOT_API;
    const client_id = process.env.VUE_APP_API_CLIENT_ID
        ? process.env.VUE_APP_API_CLIENT_ID
        : 1;
    function checkOAuthToken() {
        return new Promise(resolve => {
            let oauthObject = manageStorage.getObject("oauth");
            JSON.stringify(oauthObject) === "{}" && resolve(false);
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
                        client_id: client_id,
                        client_secret: oauthkey,
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
            if (
                error.response.status === 401 &&
                error.response.data.message === "Unauthenticated."
            ) {
                console.log("AQUI");
                window.bus.$emit("logout");
            }
            return Promise.reject(error);
        }
    );
    return instance;
};
