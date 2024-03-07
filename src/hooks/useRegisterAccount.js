import { useState } from "react"
import api from "../services/apiBackend"
import { toast } from "react-toastify"

function useRegisterAccount() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const register = async () => {
        try {
            await api.post("/users", { name, email, username, password, confirmPassword })
            setName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")

            toast.success("Conta criada com sucesso!")
        } catch (error) {
            if (error?.response?.data?.message) {
                toast.error(error?.response?.data?.message)
            }
        }
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        register()
    }

    return { name, email, username, password, confirmPassword, setName, setEmail, setUsername, setPassword, setConfirmPassword, handleSubmit }
}

export default useRegisterAccount