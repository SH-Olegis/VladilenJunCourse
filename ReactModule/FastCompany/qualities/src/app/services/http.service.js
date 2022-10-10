import axios from "axios";
import logger from "./log.service";
import config from "../config.json";

axios.defaults.baseURL = config.apiPoint;

axios.interceptors.response.use(res => res, (error) => {
    const expectedErrors = error.response && error.response.status >= 400 && error.response.status < 500;

    if(!expectedErrors) {
        logger.log(error)
    }

    return Promise.reject(error)
})

const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}

export default httpService