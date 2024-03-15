
import { Avatar, IconButton } from "@mui/material"
import { MdAddTask } from "react-icons/md";
import styles from "./styles.module.scss"
import Task from "../../components/Task";
import FormModalTask from "../../components/FormModalTask";
import useTask from "../../hooks/useTask";
import iconNotFound from "../../assets/iconNotFound.jpg"

function Checklist() {
    const { createTask, deleteTask, handleCheckboxFunction, editTask, setStateChecklist, stateChecklist } = useTask()

    return (
        <main>
            {!stateChecklist.checklist ? (<h2>Carregando...</h2>) : (
                <div>
                    <div className={styles.checklistHeader}>
                        <img className={styles.iconChecklist} src={stateChecklist.checklist.icon ?? iconNotFound} />
                        <div>
                            <h1>{stateChecklist.checklist.name}</h1>
                            <div className={styles.descriptionContainer}>
                                <p>{stateChecklist.checklist.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.listContainer}>
                        <div className={styles.taskContainerHeader}>
                            <h2>Tasks</h2>
                            <IconButton
                                onClick={() => setStateChecklist(prevState => ({ ...prevState, modalNewTask: true }))}
                                aria-label="add Task"
                                color="inherit"
                                size="large">

                                <MdAddTask />
                            </IconButton>
                        </div>
                        <div className={styles.tasksContainer}>
                            {stateChecklist.checklist.tasks.map(task => (
                                <Task
                                    key={task._id}
                                    task={task}
                                    handleCheckboxFunction={() => handleCheckboxFunction(task)}
                                    editTask={() => editTask(task)}
                                    deleteTask={() => deleteTask(task)}
                                    stateChecklist={stateChecklist}
                                    setStateChecklist={setStateChecklist}
                                />
                            ))}
                        </div>
                        <div className={styles.checklistAuthor}>
                            <Avatar
                                src={stateChecklist.checklist.author.avatar}
                                sx={{ width: 32, height: 32 }}
                            >
                                {stateChecklist.checklist.author.name[0]}</Avatar>
                            <p>Criado por <span>{stateChecklist.checklist.author.name}</span></p>
                        </div>
                    </div>
                </div>
            )}

            <FormModalTask
                open={stateChecklist.modalNewTask}
                stateChecklist={stateChecklist}
                setStateChecklist={setStateChecklist}
                createTask={createTask}
                handleClose={() => setStateChecklist(prevState => (
                    { ...prevState, modalNewTask: false, name: "", description: "" })
                )}
            >
                <h2>Adicionar Task</h2>
            </FormModalTask>

        </main>
    )
}

export default Checklist