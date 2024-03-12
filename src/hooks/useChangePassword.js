import { useContext, useState } from "react"
import { authContext } from "../context/Auth"
import { toast } from "react-toastify"

function useChangePassword() {
    const { api, user } = useContext(authContext)
    const [loading, setLoading] = useState(false)
    const [passwords, setPasswords] = useState({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: ""
    })

    const changePassword = async () => {
        setLoading(true)
        try {
            await api.patch(`/users/changePassword/${user._id}`, passwords)
            toast.success(`${user.name}, sua senha foi atualizada com sucesso. 😄`)
            for (let password in passwords) { // limpando os inputs
                passwords[password] = ""
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        changePassword()
    }

    return { loading, passwords, setPasswords, handleSubmit }
}

export default useChangePassword