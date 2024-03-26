import { useCallback, useContext, useState } from "react"
import { useDropzone } from "react-dropzone"
import ProfileContext from "../context/ProfileContext"

function useProfileModal() {
    const { setUserData } = useContext(ProfileContext)
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

    const avatarInput = useDropzone({ onDrop: onAvatarDrop, multiple: false });
    const bannerInput = useDropzone({ onDrop: onBannerDrop, multiple: false });

    return {
        isDragging,
        avatarInput,
        bannerInput,
        onDragOver,
        onDragLeaveAndOnDrop
    }
}

export default useProfileModal