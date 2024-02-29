import { useEffect, useState } from "react";
import api from "../services/apiBackend";
import { useNavigate } from "react-router-dom";

function useAuth() {
    const navigate = useNavigate()

    const [user] = useState(() => {
        const getUserLocalStorage = localStorage.getItem("@user")
        if (!getUserLocalStorage) return null
        return JSON.parse(getUserLocalStorage)
    })

    const [token] = useState(() => {
        const getTokenLocalStorage = localStorage.getItem("@token")
        if (!getTokenLocalStorage) return ""
        return getTokenLocalStorage
    })

    const logout = () => {
        localStorage.removeItem("@token")
        localStorage.removeItem("@user")
        navigate("/login")
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    api.interceptors.response.use(
        response => response,
        error => {
            if (error?.response?.status === 401) {
                logout()
            }
            return Promise.reject(error);
        }
    );

    return { user, api, logout }
}

export default useAuth