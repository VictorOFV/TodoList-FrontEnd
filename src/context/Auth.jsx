import { createContext } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const authContext = createContext()

function AuthProvider({ children }) {
    const { user, logout, api } = useAuth()

    if (!user) return <Navigate to={"/login"} />

    return (
        <authContext.Provider value={{ logout, user, api }}>
            {children}
        </authContext.Provider>
    )
}

export { AuthProvider, authContext }