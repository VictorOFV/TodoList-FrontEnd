import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { authContext } from "../context/Auth"
import { toast } from "react-toastify"

function useTask() {
    const { id } = useParams()
    const { api } = useContext(authContext)

    const [stateChecklist, setStateChecklist] = useState({
        checklist: null,
        modalNewTask: false,
        name: "",
        description: ""
    })

    useEffect(() => {
        const getTasks = async () => {
            const response = await api.get(`/checklist/${id}`)
            setStateChecklist(prevState => ({ ...prevState, checklist: response.data.checklist }))
        }
        getTasks()
    }, [])

    const handleCheckboxFunction = async (task) => {
        setStateChecklist(prevState => ({
            ...prevState,
            checklist: {
                ...prevState.checklist,
                tasks: prevState.checklist.tasks.map(t => t._id === task._id ? { ...t, done: !task.done } : t)
            }
        }))

        await api.put(`/task/${task._id}`, { ...task, done: !task.done })
    }

    const createTask = async () => {
        const checklistObj = {
            name: stateChecklist.name,
            description: stateChecklist.description,
            done: false,
            checklist: stateChecklist.checklist._id
        }

        const response = await api.post("/task", checklistObj)

        setStateChecklist(prevState => ({
            ...prevState,
            name: "",
            description: "",
            checklist: {
                ...prevState.checklist,
                tasks: [...prevState.checklist.tasks, response.data.task]
            }
        }))

        toast.success(`A task ${response.data.task.name} foi criada com sucesso!`)
    }

    const deleteTask = async (task) => {
        const response = await api.delete(`/task/${task._id}`)

        setStateChecklist(prevState => ({
            ...prevState,
            checklist: {
                ...prevState.checklist,
                tasks: prevState.checklist.tasks.filter(t => t._id !== task._id)
            }
        }))
        toast.success(`A task ${response.data.task.name} foi deleta com sucesso`)
    }

    const editTask = async (task) => {
        try {
            const response = await api.put(`/task/${task._id}`, { ...task, name: stateChecklist.name, description: stateChecklist.description })
            setStateChecklist(prevState => ({
                ...prevState,
                checklist: {
                    ...prevState.checklist,
                    tasks: prevState.checklist.tasks.map(t => t._id === task._id ? { ...t, name: stateChecklist.name, description: stateChecklist.description } : t)
                }
            }))
            toast.success(`A task ${response.data.task.name} foi editada com sucesso!`)
        } catch (error) {
            console.log(error)
        }
    }

    return { handleCheckboxFunction, createTask, deleteTask, editTask, setStateChecklist, stateChecklist }
}

export default useTask