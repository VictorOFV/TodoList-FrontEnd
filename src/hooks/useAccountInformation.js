import { useContext, useState } from "react"
import { toast } from "react-toastify"
import { authContext } from "../context/Auth"

function useAccountInformation() {
    const { user, api, setUser } = useContext(authContext)
    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({
        name: user.name ?? null,
        email: user.email ?? null,
        username: user.username ?? null,
        dateOfBirth: user.dateOfBirth.split("T")[0] ?? null,
        gender: user.gender ?? ""
    })

    const updateUser = async () => {
        setLoading(true)
        try {
            const response = await api.put(`/users/${user._id}`, { ...user, ...userInfo })
            setUser(response.data.user)
            localStorage.setItem("@user", JSON.stringify(response.data.user))
            toast.success(`As informações de ${response.data.user.name} foram atualizadas com sucesso!`)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        updateUser()
    }

    return { loading, userInfo, setUserInfo, handleSubmit }
}

export default useAccountInformation