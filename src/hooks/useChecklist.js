import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { authContext } from "../context/Auth";

function useChecklist() {
    const { api, user } = useContext(authContext)
    const [openModal, setOpenModal] = useState(false)
    const [buttonLoading, setButtonLoading] = useState(false)
    const [checklists, setChecklists] = useState([])
    const [checklistData, setChecklistData] = useState({
        name: "",
        description: "",
        priority: "",
        icon: "",
        imageURL: ""
    })

    useEffect(() => {
        const getChecklists = async () => {
            const response = await api.get("/checklist")
            setChecklists(response.data.checklists)
        }
        getChecklists()
    }, [])

    const createChecklist = async () => {
        setButtonLoading(true)
        try {
            const formData = new FormData()
            formData.append('icon', checklistData.icon);
            formData.append('name', checklistData.name);
            formData.append('description', checklistData.description);
            formData.append('priority', checklistData.priority);
            formData.append('author', user._id);

            const response = await api.post("/checklist", formData)
            cleanInputs()
            setChecklists(prevState => ([...prevState, response.data.checklist]))

            toast.success(`A checklist ${response.data.checklist.name} foi criada com sucesso!`)
        } catch (error) {
            console.error(error)
        } finally {
            setButtonLoading(false)
        }
    }

    const deleteChecklist = async (checklist) => {
        const response = await api.delete(`/checklist/${checklist._id}`)
        setChecklists(prevState => prevState.filter(check => check._id !== response.data.checklist._id))
        toast.success(`A checklist ${response.data.checklist.name} foi deletada com sucesso!`)
    }

    const updateChecklist = async (checklist) => {
        setButtonLoading(true)
        try {
            const formData = new FormData()
            formData.append('icon', checklistData.icon);
            formData.append('name', checklistData.name);
            formData.append('description', checklistData.description);
            formData.append('priority', checklistData.priority);
            formData.append('author', user._id);

            const response = await api.put(`/checklist/${checklist._id}`, formData)
            console.log(response)
            setChecklists(prevState => prevState.map(check => check._id === checklist._id ? response.data.checklist : check))
        } catch (error) {
            console.error(error)
        } finally {
            setButtonLoading(false)
        }
    }

    const handleCloseModal = () => {
        setOpenModal(false)
        cleanInputs()
    }

    const cleanInputs = () => {
        for (let data in checklistData) {
            checklistData[data] = ""
        }
    }

    return { openModal, buttonLoading, checklistData, checklists, setOpenModal, handleCloseModal, createChecklist, updateChecklist, deleteChecklist, cleanInputs, setChecklistData }
}

export default useChecklist