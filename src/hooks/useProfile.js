import { useContext, useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { authContext } from "../context/Auth"

function useProfile() {
    const { user, api, setUser } = useContext(authContext)
    const { username } = useParams()
    const [userProfile, setUserProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadingButton, setLoadingButton] = useState(false)
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)
    const [userData, setUserData] = useState({
        ...user,
        avatarURL: user.avatar,
        bannerURL: user.banner
    })

    useEffect(() => {
        const getUserProfile = async () => {
            try {
                if (user.username === username) return setUserProfile(user)
                const response = await api.get(`/users/${username}`)
                setUserProfile(response.data.user)
            } finally {
                setLoading(false)
            }
        }
        getUserProfile()
    }, [username, user])

    const updateUser = async () => {
        try {
            setLoadingButton(true)
            const formData = new FormData()

            for (let data in userData) {
                if (userData[data] !== null) {
                    formData.append(data, userData[data])
                }
            }

            const response = await api.put(`/users/${user._id}`, formData)
            setUser(response.data.user)
            localStorage.setItem("@user", JSON.stringify(response.data.user))
            toast.success("Perfil editado com sucesso! 😁")
        } finally {
            setLoadingButton(false)
        }
    }

    const follow = async () => {
        const response = await api.post(`/users/${userProfile._id}/follow`)
        setUser(response.data.user)
    }

    const unfollow = async () => {
        const response = await api.post(`/users/${userProfile._id}/unfollow`)
        setUser(response.data.user)
    }

    const closeModal = () => {
        setOpenModal(false)
        cleanInputs()
    }

    const cleanInputs = () => {
        setUserData({
            ...user,
            avatarURL: user.avatar,
            bannerURL: user.banner
        })
    }

    return {
        userProfile,
        openModal,
        userData,
        loadingButton,
        loading,
        setOpenModal,
        setUserData,
        follow,
        unfollow,
        closeModal,
        updateUser
    }
}

export default useProfile