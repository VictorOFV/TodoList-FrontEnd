import { useContext } from "react"
import { PiSuitcaseSimple } from "react-icons/pi"
import { SlLocationPin } from "react-icons/sl"
import { HiLink } from "react-icons/hi2"
import { LiaBirthdayCakeSolid, LiaCalendarSolid } from "react-icons/lia"
import { jobs } from "../../../utils/jobs.json"
import styles from "./styles.module.scss"
import ProfileContext from "../../../context/ProfileContext"
import convertDate from "../../../utils/formatDate"

function ProfileUserInfo() {
    const { userProfile } = useContext(ProfileContext)
    return (
        <div className={styles.userInfo}>
            <div>
                {!userProfile.profession ? null : (<span><PiSuitcaseSimple /> {jobs.find(job => job.name === userProfile.profession).translatedName}</span>)}
                {!userProfile.location ? null : (<span><SlLocationPin /> {userProfile.location}</span>)}
            </div>
            <div>
                {!userProfile.site ? null : (<span><HiLink /><a target="_blank" href={userProfile.site}>{userProfile.site}</a></span>)}
                {!userProfile.dateOfBirth ? null : (<span><LiaBirthdayCakeSolid /> Nascido em {convertDate(userProfile.dateOfBirth, "PPP")}</span>)}
            </div>
            <span><LiaCalendarSolid />Ingressou em {convertDate(userProfile.createdAt, "PPPP")}</span>
        </div>
    )
}

export default ProfileUserInfo