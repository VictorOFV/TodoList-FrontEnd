import { BiSolidUserDetail } from "react-icons/bi"
import { useContext } from "react"
import { authContext } from "../../../context/Auth"
import styles from "./styles.module.scss"

function ProfileAboutMe() {
    const { user } = useContext(authContext)
    return (
        <div className={styles.bio}>
            <h4 className={styles.aboutMeText}>
                <BiSolidUserDetail size={25} /> SOBRE MIM
            </h4>
            <p>{user.bio}</p>
        </div>
    )
}

export default ProfileAboutMe