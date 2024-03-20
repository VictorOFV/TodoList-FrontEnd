import { useContext, useEffect, useState } from "react"
import { authContext } from "../../context/Auth"
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import styles from "./styles.module.scss"
import border from "../../assets/fundo.png"
import ProfileNav from "./ProfileNav";
import ProfileUserInfo from "./ProfileUserInfo";
import ProfileAboutMe from "./ProfileAboutMe";
import ProfileNamesTitle from "./ProfileNamesTitle";
import noBanner from "../../assets/noBanner.svg"
import noAvatar from "../../assets/noAvatar.jpg"

function Profile() {
    const { user, api } = useContext(authContext)
    const { username } = useParams()
    const [userProfile, setUserProfile] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getUserProfile = async () => {
            try {
                if (user.username === username) {
                    setUserProfile(user)
                    return
                }

                const response = await api.get(`/users/${username}`)
                setUserProfile(response.data.user)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        getUserProfile()
    })

    return (
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
                            <ProfileNamesTitle userProfile={userProfile} />
                            <ProfileAboutMe userProfile={userProfile} />
                            <ProfileUserInfo userProfile={userProfile} />
                        </div>
                        <ProfileNav userProfile={userProfile} />
                    </>
                )}
            </div>
        </div>
    )
}

export default Profile