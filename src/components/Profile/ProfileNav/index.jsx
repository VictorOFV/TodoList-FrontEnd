import { Link, useLocation } from "react-router-dom"
import { Button } from "@mui/material"
import { useContext } from "react"
import { authContext } from "../../../context/Auth"
import styles from "./styles.module.scss"

function ProfileNav() {
    const { user } = useContext(authContext)
    const { pathname } = useLocation()

    return (
        <nav className={styles.nav}>
            <Link to={`/profile/${user.username}`} className={pathname === `/profile/${user.username}` ? styles.active : null}>
                <Button>
                    Checklists
                </Button>
            </Link>
            <Link to={`/profile/${user.username}/tasks`} className={pathname === `/profile/${user.username}/tasks` ? styles.active : null}>
                <Button>
                    Tasks
                </Button>
            </Link>
            <Link to={`/profile/${user.username}/comments`} className={pathname === `/profile/${user.username}/comments` ? styles.active : null}>
                <Button>
                    Comentários
                </Button>
            </Link>
            <Link to={`/profile/${user.username}/following`} className={pathname === `/profile/${user.username}/following` ? styles.active : null}>
                <Button>
                    Seguindo
                </Button>
            </Link>
            <Link to={`/profile/${user.username}/followers`} className={pathname === `/profile/${user.username}/followers` ? styles.active : null}>
                <Button>
                    Seguidores
                </Button>
            </Link>
        </nav>
    )
}

export default ProfileNav