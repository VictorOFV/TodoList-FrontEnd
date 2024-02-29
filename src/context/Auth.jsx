import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const authContext = createContext()

function AuthProvider({ children }) {
    const { user, logout, api, token } = useAuth()

    if (!user || !token) return logout()

    return (
        <authContext.Provider value={{ logout, user, api }}>
            {children}
        </authContext.Provider>
    )
}

export { AuthProvider, authContext }