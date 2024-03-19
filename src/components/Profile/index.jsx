import { useContext } from "react"
import { authContext } from "../../context/Auth"
import styles from "./styles.module.scss"
import border from "../../assets/fundo.png"
import ProfileNav from "./ProfileNav";
import ProfileUserInfo from "./ProfileUserInfo";
import ProfileAboutMe from "./ProfileAboutMe";
import ProfileNamesTitle from "./ProfileNamesTitle";

function Profile() {
    const { user } = useContext(authContext)

    return (
        <div>
            <div className={styles.profileContainer}>
                <img className={styles.banner} src={user.banner} />
                <div className={styles.avatar} style={{ backgroundImage: `url(${border})` }}>
                    <img src={user.avatar} />
                </div>

                <div className={styles.infoContainer}>
                    <ProfileNamesTitle />
                    <ProfileAboutMe />
                    <ProfileUserInfo />
                </div>
                <ProfileNav />
            </div>
        </div>
    )
}

export default Profile