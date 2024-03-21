import { Box, Button, Modal, TextField } from "@mui/material"
import { FaUser } from "react-icons/fa";
import { LoadingButton } from "@mui/lab";
import { useDropzone } from "react-dropzone";
import { useCallback, useContext, useState } from "react";
import ProfileContext from "../../context/ProfileContext";
import noAvatar from "../../assets/noAvatar.jpg"
import noBanner from "../../assets/noBanner.svg"
import styles from "./styles.module.scss"

function FormModalProfile() {
    const { openModal, closeModal, userData, setUserData, updateUser, loadingButton } = useContext(ProfileContext)

    const [isDragging, setIsDragging] = useState({
        avatar: false,
        banner: false,
    })

    const onAvatarDrop = useCallback((file) => {
        const avatarURL = URL.createObjectURL(file[0])
        setUserData(currentValue => ({ ...currentValue, avatar: file[0], avatarURL: avatarURL }))
        onDragLeaveAndOnDrop("avatar")
    }, [])

    const onBannerDrop = useCallback((file) => {
        const bannerURL = URL.createObjectURL(file[0])
        setUserData(currentValue => ({ ...currentValue, banner: file[0], bannerURL: bannerURL }))
        onDragLeaveAndOnDrop("banner")
    }, [])

    const onDragOver = (type) => { // adiciona um estilo ao iniciar uma ação de drop
        setIsDragging((prevState) => ({
            ...prevState,
            [type]: true,
        }))
    }

    const onDragLeaveAndOnDrop = (type) => { // retira o estilo ao terminar a ação de drop
        setIsDragging((prevState) => ({
            ...prevState,
            [type]: false,
        }))
    }

    const { getRootProps: getAvatarRootProps, getInputProps: getAvatarInputProps } = useDropzone({ onDrop: onAvatarDrop, multiple: false });
    const { getRootProps: getBannerRootProps, getInputProps: getBannerInputProps } = useDropzone({ onDrop: onBannerDrop, multiple: false });

    return (
        <Modal
            open={openModal}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
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
                                {...getBannerRootProps()}
                                className={styles.dropzoneBanner}
                                onDragOver={() => onDragOver('banner')}
                                onDragLeave={() => onDragLeaveAndOnDrop('banner')}
                            >
                                <input {...getBannerInputProps()} />
                                <img src={userData.bannerURL ?? noBanner} className={isDragging.banner ? styles.dragging : ''} />
                                <p>Selecionar Novo Banner</p>
                            </div>
                            <div>
                                <div
                                    {...getAvatarRootProps()}
                                    className={styles.dropzoneAvatar}
                                    onDragOver={() => onDragOver('avatar')}
                                    onDragLeave={() => onDragLeaveAndOnDrop('avatar')}
                                >
                                    <input name="avatar" {...getAvatarInputProps()} />
                                    <img src={userData.avatarURL ?? noAvatar} className={isDragging.avatar ? styles.dragging : ''} />
                                    <p>Escolher Novo Avatar</p>
                                </div>
                            </div>
                        </div>

                        <TextField
                            name="fullname"
                            value={userData.name}
                            label="Nome"
                            variant="filled"
                            helperText=""
                            error={false}
                            required sx={
                                {
                                    backgroundColor: "#00000030"
                                }
                            }
                        />
                        <TextField
                            name="bio"
                            value={userData.bio}
                            label="Bio"
                            variant="filled"
                            multiline
                            rows={3}
                            helperText=""
                            error={false}
                            required sx={
                                {
                                    backgroundColor: "#00000030"
                                }
                            }
                        />
                        <TextField
                            name="location"
                            label="Localização"
                            variant="filled"
                            helperText=""
                            error={false}
                            required sx={
                                {
                                    backgroundColor: "#00000030"
                                }
                            }
                        />
                        <TextField
                            name="site"
                            label="Site"
                            variant="filled"
                            helperText=""
                            error={false}
                            required sx={
                                {
                                    backgroundColor: "#00000030"
                                }
                            }
                        />
                    </div>
                </div>
                <div className={styles.modalFooter}>
                    <LoadingButton
                        variant="contained"
                        color="success"
                        type="submit"
                        loading={loadingButton}
                        onClick={updateUser}
                        sx={{
                            ".MuiCircularProgress-svg": {
                                color: "#fff"
                            }
                        }}
                    >
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