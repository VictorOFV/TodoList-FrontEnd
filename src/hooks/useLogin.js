import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/apiBackend"

function useLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const login = async () => {
        try {
            setLoading(true)
            const response = await api.post("/login", { email, password })
            const { user, token } = response.data
            localStorage.setItem("@user", JSON.stringify(user))
            localStorage.setItem("@token", token)
            navigate("/")
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        login()
    }

    return { email, password, loading, setEmail, setPassword, handleSubmit }
}

export default useLogin