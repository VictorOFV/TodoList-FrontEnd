import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
    baseURL: "http://localhost:3333"
})

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.data?.message) {
            toast.error(error.response.data.message);
        } else {
            console.error(error);
        }
        return Promise.reject(error);
    }
);

export default api