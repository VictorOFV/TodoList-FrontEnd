import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/apiBackend";

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

    useEffect(() => {
        const verifyToken = async () => {
            try {
                await api.get("/verify-token");
            } catch (error) {
                if (error?.response?.status === 401) {
                    logout()
                } else {
                    console.error(error)
                }
            }
        };
        verifyToken();
    }, [token, user]);

    const logout = () => {
        localStorage.removeItem("@token")
        localStorage.removeItem("@user")
        navigate("/login")
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    return { user, token, api, logout }
}

export default useAuth