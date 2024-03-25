import { useContext } from "react"
import { BiSolidUserDetail } from "react-icons/bi"
import styles from "./styles.module.scss"
import ProfileContext from "../../../context/ProfileContext"

function ProfileAboutMe() {
    const { userProfile } = useContext(ProfileContext)
    return (
        <div className={styles.bio}>
            <h4 className={styles.aboutMeText}>
                <BiSolidUserDetail size={25} /> SOBRE MIM
            </h4>
            {!userProfile.bio ? null : (<p>{userProfile.bio}</p>)}
        </div>
    )
}

export default ProfileAboutMe