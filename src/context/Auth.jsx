import { createContext } from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const authContext = createContext()

function AuthProvider({ children }) {
    const { user, logout, api } = useAuth()

    return (
        <authContext.Provider value={{ logout, user, api }}>
            {children}
        </authContext.Provider>
    )
}

export { AuthProvider, authContext }