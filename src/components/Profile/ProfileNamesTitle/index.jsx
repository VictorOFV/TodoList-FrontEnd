import { Button } from "@mui/material"
import { useContext } from "react"
import { authContext } from "../../../context/Auth"
import styles from "./styles.module.scss"

function ProfileNamesTitle() {
    const { user } = useContext(authContext)
    return (
        <div className={styles.names}>
            <div>
                <h2>{user.name}</h2>
                <span className={styles.username}>@{user.username}</span>
            </div>
            <div className={styles.followers}>
                <span><span className={styles.followValue}>15</span> Seguindo</span>
                <span><span className={styles.followValue}>21</span> Seguidores</span>
            </div>
            <Button variant="outlined" color="inherit">Editar Perfil</Button>
        </div>
    )
}

export default ProfileNamesTitle