import { useContext, useEffect, useState } from "react"
import { authContext } from "../../context/Auth"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import styles from "./styles.module.scss"
import border from "../../assets/fundo.png"
import ProfileNav from "./ProfileNav";
import ProfileUserInfo from "./ProfileUserInfo";
import ProfileAboutMe from "./ProfileAboutMe";
import ProfileNamesTitle from "./ProfileNamesTitle";
import noBanner from "../../assets/noBanner.svg"
import noAvatar from "../../assets/noAvatar.jpg"
import FormModalProfile from "../FormModalProfile";
import ProfileContext from "../../context/ProfileContext";

function Profile() {
    const { user, api, setUser } = useContext(authContext)
    const { username } = useParams()
    const [userProfile, setUserProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadingButton, setLoadingButton] = useState(false)
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
                formData.append(data, userData[data])
            }
    
            const response = await api.put(`/users/${user._id}`, formData)
            setUser(response.data.user)
            localStorage.setItem("@user", JSON.stringify(response.data.user))
            toast.success("Perfil editado com sucesso! 😁")
        } finally {
            setLoadingButton(false)
        }
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

    return (
        <ProfileContext.Provider value={{ userProfile, openModal, userData, loadingButton, closeModal, setOpenModal, setUserData, updateUser }}>
            <div>
                <div className={styles.profileContainer}>
                    {loading ?
                        (<Skeleton className={styles.banner} baseColor="#011853" highlightColor="#1565C0" />) :
                        (<img className={styles.banner} src={userProfile.banner ?? noBanner} />)}

                    <div className={styles.avatar} style={{ backgroundImage: `url(${border})` }}>
                        {loading ? (<Skeleton className={styles.avatarImage} baseColor="#011853" highlightColor="#1565C0" />) :
                            (<img className={styles.avatarImage} src={userProfile.avatar ?? noAvatar} />)}
                    </div>

                    {loading ? null : (
                        <>
                            <div className={styles.infoContainer}>
                                <ProfileNamesTitle />
                                <ProfileAboutMe />
                                <ProfileUserInfo />
                            </div>
                            <ProfileNav userProfile={userProfile} />
                        </>
                    )}
                </div>

                <FormModalProfile />
            </div>
        </ProfileContext.Provider>
    )
}

export default Profile