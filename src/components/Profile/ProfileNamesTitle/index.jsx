import { Button } from "@mui/material"
import { useContext } from "react"
import { authContext } from "../../../context/Auth"
import styles from "./styles.module.scss"
import ProfileContext from "../../../context/ProfileContext"

function ProfileNamesTitle() {
    const { user } = useContext(authContext)
    const { userProfile, setOpenModal, follow, unfollow } = useContext(ProfileContext)

    return (
        <div className={styles.names}>

            <div>
                <h2>{userProfile.name}</h2>
                <span className={styles.username}>@{userProfile.username}</span>
            </div>
            <div className={styles.followers}>
                <span><span className={styles.followValue}>{userProfile.following.length}</span> Seguindo</span>
                <span><span className={styles.followValue}>{userProfile.followers.length}</span> Seguidores</span>
            </div>
            {user._id === userProfile._id ? (
                <Button onClick={() => setOpenModal(true)} variant="outlined" color="inherit">Editar Perfil</Button>
            ) : (
                <>
                    {userProfile.followers.includes(user._id) ? (
                        <Button onClick={unfollow} variant="outlined" color="inherit">Deixar de Seguir</Button>
                    ) : (
                        <Button onClick={follow} variant="outlined" color="inherit">Seguir</Button>
                    )}
                </>
            )}
        </div>
    )
}

export default ProfileNamesTitle