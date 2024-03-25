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
import useProfile from "../../hooks/useProfile";

function Profile() {
    const profile = useProfile()

    return (
        <ProfileContext.Provider value={profile}>
            <div>
                <div className={styles.profileContainer}>
                    {profile.loading ?
                        (<Skeleton className={styles.banner} baseColor="#011853" highlightColor="#1565C0" />) :
                        (<img className={styles.banner} src={profile.userProfile.banner ?? noBanner} />)}

                    <div className={styles.avatar} style={{ backgroundImage: `url(${border})` }}>
                        {profile.loading ? (<Skeleton className={styles.avatarImage} baseColor="#011853" highlightColor="#1565C0" />) :
                            (<img className={styles.avatarImage} src={profile.userProfile.avatar ?? noAvatar} />)}
                    </div>

                    {profile.loading ? null : (
                        <>
                            <div className={styles.infoContainer}>
                                <ProfileNamesTitle />
                                <ProfileAboutMe />
                                <ProfileUserInfo />
                            </div>
                            <ProfileNav />
                        </>
                    )}
                </div>

                <FormModalProfile />
            </div>
        </ProfileContext.Provider>
    )
}

export default Profile