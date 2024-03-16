import { Button, Checkbox } from "@mui/material"
import { MdEdit, MdDelete } from "react-icons/md";
import { useContext, useState } from "react";
import styles from "./styles.module.scss";
import Confirm from "../Confirm";
import FormModalTask from "../FormModalTask";
import { authContext } from "../../context/Auth";

function Task({ task, handleCheckboxFunction, deleteTask, editTask, stateChecklist, setStateChecklist }) {
    const [confirm, setConfirm] = useState(false)
    const [modalEditTask, setModalEditTask] = useState(false)
    const { user } = useContext(authContext)

    const handleModalEditOpen = () => {
        setStateChecklist(prevState => ({
            ...prevState,
            name: task.name,
            description: task.description
        }))
        setModalEditTask(true)
    }

    const handleModalEditClose = () => {
        setModalEditTask(false)
        setStateChecklist(prevState => ({
            ...prevState,
            name: "",
            description: ""
        }))
    }

    const confirmFunction = () => {
        deleteTask()
        setConfirm(false)
    }

    return (
        <div key={task._id} className={styles.task}>
            <Checkbox
                id={task._id}
                checked={task.done}
                onClick={handleCheckboxFunction}
                disabled={stateChecklist.checklist.author._id === user._id ? false : true}
                sx={{
                    color: "#1976D2"
                }}
            />
            <label htmlFor={task._id}>{task.name}</label>
            <p className={styles.description}>{task.description}</p>
            {stateChecklist.checklist.author._id === user._id ? (
                <div className={styles.taskButtons}>
                    <Button size="small" variant="contained" onClick={handleModalEditOpen}>
                        <MdEdit /> Editar
                    </Button>
                    <Button size="small" variant="contained" color="error" onClick={() => setConfirm(true)}>
                        <MdDelete /> Deletar
                    </Button>
                </div>
            ) : null}

            <FormModalTask
                open={modalEditTask}
                stateChecklist={stateChecklist}
                setStateChecklist={setStateChecklist}
                createTask={editTask}
                handleClose={handleModalEditClose}
            >
                <h2>Task: {task.name}</h2>
            </FormModalTask>

            <Confirm
                open={confirm}
                closeModal={() => setConfirm(false)}
                confirmFunction={confirmFunction}
            >
                <h2>Deletar Task</h2>
                Você deseja realmente deletar a task {task.name}?
            </Confirm>
        </div>
    )
}

export default Task