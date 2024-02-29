import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import api from "../services/apiBackend"

function useLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const login = async () => {
        try {
            const response = await api.post("/login", { email, password })
            const { user, token } = response.data
            localStorage.setItem("@user", JSON.stringify(user))
            localStorage.setItem("@token", token)
            navigate("/")
        } catch (error) {
            if (error.response?.data?.message) {
                toast.error(error.response.data.message)
            } else {
                console.error(error)
            }
        }
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        login()
    }

    return { email, password, setEmail, setPassword, handleSubmit }
}

export default useLogin