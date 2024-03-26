import { Box, Button, MenuItem, Modal } from "@mui/material"
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { jobs } from "../../utils/jobs.json"
import ProfileContext from "../../context/ProfileContext";
import noAvatar from "../../assets/noAvatar.jpg"
import noBanner from "../../assets/noBanner.svg"
import styles from "./styles.module.scss"
import Input from "../Input";
import Select from "../Select";
import LoadingButton from "../LoadingButton";
import useProfileModal from "../../hooks/useProfileModal";

function FormModalProfile() {
    const { openModal, closeModal, userData, setUserData, updateUser, loadingButton } = useContext(ProfileContext)
    const { avatarInput, bannerInput, isDragging, onDragLeaveAndOnDrop, onDragOver } = useProfileModal()

    return (
        <Modal
            open={openModal}
            onClose={closeModal}
            className={styles.modal}
        >
            <Box className={styles.box}>
                <div className={styles.modalHeader}>
                    <FaUser /> Editar Perfil
                </div>
                <div className={styles.modalBody}>
                    <div className={styles.inputs}>
                        <div className={styles.dropzoneContainer}>
                            <div
                                {...bannerInput.getRootProps()}
                                className={styles.dropzoneBanner}
                                onDragOver={() => onDragOver('banner')}
                                onDragLeave={() => onDragLeaveAndOnDrop('banner')}
                            >
                                <input {...bannerInput.getInputProps()} />
                                <img src={userData.bannerURL ?? noBanner} className={isDragging.banner ? styles.dragging : ''} />
                                <p>Selecionar Novo Banner</p>
                            </div>
                            <div
                                {...avatarInput.getRootProps()}
                                className={styles.dropzoneAvatar}
                                onDragOver={() => onDragOver('avatar')}
                                onDragLeave={() => onDragLeaveAndOnDrop('avatar')}
                            >
                                <input name="avatar" {...avatarInput.getInputProps()} />
                                <img src={userData.avatarURL ?? noAvatar} className={isDragging.avatar ? styles.dragging : ''} />
                                <p>Escolher Novo Avatar</p>
                            </div>
                        </div>

                        <Input
                            name="fullname"
                            value={userData.name}
                            onChange={ev => setUserData(prevState => ({ ...prevState, name: ev.target.value }))}
                            label="Nome"
                            required
                        />
                        <Input
                            name="bio"
                            value={userData.bio}
                            onChange={ev => setUserData(prevState => ({ ...prevState, bio: ev.target.value }))}
                            label="Bio"
                            multiline
                            rows={3}
                        />
                        <Select
                            name="profession"
                            value={userData.profession ? userData.profession : ""}
                            onChange={ev => setUserData(prevState => ({ ...prevState, profession: ev.target.value }))}
                            label="Prioridade"
                            id={"profession"}
                        >
                            {jobs.sort((a, b) => a.translatedName.localeCompare(b.translatedName)).map(job => (
                                <MenuItem key={job.name} value={job.name}>{job.translatedName}</MenuItem>
                            ))}
                        </Select>
                        <Input
                            name="location"
                            value={userData.location}
                            onChange={ev => setUserData(prevState => ({ ...prevState, location: ev.target.value }))}
                            label="Localização"
                        />
                        <Input
                            name="site"
                            value={userData.site}
                            onChange={ev => setUserData(prevState => ({ ...prevState, site: ev.target.value }))}
                            label="Site"
                        />
                    </div>
                </div>
                <div className={styles.modalFooter}>
                    <LoadingButton loading={loadingButton} onClick={updateUser}>
                        Salvar
                    </LoadingButton>
                    <Button variant="contained" color="error" onClick={closeModal}>
                        Cancelar
                    </Button>
                </div>
            </Box>
        </Modal >
    )
}

export default FormModalProfile