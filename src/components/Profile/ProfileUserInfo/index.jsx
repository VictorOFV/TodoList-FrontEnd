import { useContext } from "react"
import { PiSuitcaseSimple } from "react-icons/pi"
import { SlLocationPin } from "react-icons/sl"
import { HiLink } from "react-icons/hi2"
import { LiaBirthdayCakeSolid, LiaCalendarSolid } from "react-icons/lia"
import styles from "./styles.module.scss"
import ProfileContext from "../../../context/ProfileContext"

function ProfileUserInfo() {
    const { userProfile } = useContext(ProfileContext)
    return (
        <div className={styles.userInfo}>
            <div>
                <span><PiSuitcaseSimple /> Software developer</span>
                <span><SlLocationPin /> Porto Velho, RO</span>
            </div>
            <div>
                <span><HiLink /><a href="http://github.com/VictorOFV">github.com/VictorOFV</a></span>
                <span><LiaBirthdayCakeSolid /> Nascido em {new Date(userProfile.dateOfBirth).toLocaleDateString()}</span>
            </div>
            <span><LiaCalendarSolid />Ingressou em {new Date(userProfile.createdAt).toDateString()}</span>
        </div>
    )
}

export default ProfileUserInfo