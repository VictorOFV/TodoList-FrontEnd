import { BiSolidUserDetail } from "react-icons/bi"
import styles from "./styles.module.scss"

function ProfileAboutMe({ userProfile, loading }) {
    return (
        <div className={styles.bio}>
            <h4 className={styles.aboutMeText}>
                <BiSolidUserDetail size={25} /> SOBRE MIM
            </h4>
            {loading ? (<Skeleton count={2}/>) : (<p>{userProfile.bio}</p>)}
        </div>
    )
}

export default ProfileAboutMe