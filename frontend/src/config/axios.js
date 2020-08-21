import axios from 'axios'
import LocalStorageService from '../services/localStorageService'

axios.defaults.baseURL = "http://192.168.99.100:8000";

axios.interceptors.request.use(
    (config) => {
        if (config.url.includes("/login") || config.url.includes("/register")) {
            return config;
        }

        const token = localStorage.getItem("ACCESS_TOKEN");
        config.headers["Authorization"] = `Bearer ${token}`;
        return config;
    },
    (error) => {
        throw error;
    }
);

export default axios