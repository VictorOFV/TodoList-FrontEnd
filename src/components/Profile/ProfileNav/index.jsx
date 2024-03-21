import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@mui/material"
import styles from "./styles.module.scss"
import ProfileContext from "../../../context/ProfileContext"

function ProfileNav() {
    const { userProfile } = useContext(ProfileContext)
    const { pathname } = useLocation()

    return (
        <nav className={styles.nav}>
                <Link to={`/profile/${userProfile.username}`} className={pathname === `/profile/${userProfile.username}` ? styles.active : null}>
                    <Button>
                        Checklists
                    </Button>
                </Link>
                <Link to={`/profile/${userProfile.username}/tasks`} className={pathname === `/profile/${userProfile.username}/tasks` ? styles.active : null}>
                    <Button>
                        Tasks
                    </Button>
                </Link>
                <Link to={`/profile/${userProfile.username}/comments`} className={pathname === `/profile/${userProfile.username}/comments` ? styles.active : null}>
                    <Button>
                        Comentários
                    </Button>
                </Link>
                <Link to={`/profile/${userProfile.username}/following`} className={pathname === `/profile/${userProfile.username}/following` ? styles.active : null}>
                    <Button>
                        Seguindo
                    </Button>
                </Link>
                <Link to={`/profile/${userProfile.username}/followers`} className={pathname === `/profile/${userProfile.username}/followers` ? styles.active : null}>
                    <Button>
                        Seguidores
                    </Button>
                </Link>
        </nav>
    )
}

export default ProfileNav