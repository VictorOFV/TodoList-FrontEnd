import { useContext, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import { FaEdit, FaFontAwesomeFlag, FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import styles from "./styles.module.scss";
import getLargestTimeDifference from "../../utils/getLargestTimeDifference";
import iconNotFound from "../../assets/iconNotFound.jpg"
import Confirm from "../Confirm";
import FormModalChecklist from "../FormModalChecklist";
import { authContext } from "../../context/Auth";

function Card({ checklist, deleteChecklist, updateChecklist, checklistData, setChecklistData, cleanInputs, buttonLoading }) {
    const [openConfirm, setOpenConfirm] = useState(false)
    const [openModalEdit, setOpenModalEdit] = useState(false)
    const { user } = useContext(authContext)
    const creationTime = getLargestTimeDifference(checklist.createdAt, new Date())

    const priorityObj = {
        high: { name: "Alta", color: "red" },
        medium: { name: "Média", color: "yellow" },
        low: { name: "Baixa", color: "green" }
    }

    const handleOpenModal = () => {
        setChecklistData(prevState => ({
            ...prevState,
            name: checklist.name,
            description: checklist.description,
            priority: checklist.priority,
            imageURL: checklist.icon
        }))

        setOpenModalEdit(true)
    }

    const handleCloseModal = () => {
        setOpenModalEdit(false)
        cleanInputs()
    }

    const handleConfirm = () => {
        setOpenConfirm(false)
        deleteChecklist(checklist)
    }

    return (
        <div className={styles.card}>
            {user._id === checklist.author._id ? (
                <div className={styles.buttons}>
                    <IconButton size="small" onClick={handleOpenModal}>
                        <FaEdit />
                    </IconButton>
                    <IconButton size="small" onClick={() => setOpenConfirm(true)}>
                        <MdDelete />
                    </IconButton>
                </div>
            ) : null}
            <Link to={`/checklist/${checklist._id}`}>
                <div className={styles.checklist}>
                    <img className={styles.checklistIcon} src={checklist.icon ?? iconNotFound} />
                    <div className={styles.checklistInfoContainer}>
                        <div className={styles.checklistTitle}>
                            <h2>{checklist.name}</h2>
                        </div>
                        <div className={styles.checklistDescription}>
                            <p>{checklist.description}</p>
                        </div>
                        <div className={styles.checklistInfo}>
                            <span className={styles.alignElements} style={{ color: priorityObj[checklist.priority].color }}><FaFontAwesomeFlag /> {priorityObj[checklist.priority].name}</span>
                            <span className={styles.alignElements}><FaRegClock />{creationTime}</span>
                        </div>
                        <div className={styles.checklistAuthor}>
                            <Avatar
                                src={checklist.author.avatar}
                                sx={{ width: 32, height: 32 }}
                            >
                                {checklist.author.name[0]}
                            </Avatar>
                            <p>Criado por <Link to={`/profile/${checklist.author.username}`}><span>@{checklist.author.username}</span></Link></p>
                        </div>
                    </div>
                </div>
            </Link>

            <Confirm
                open={openConfirm}
                closeModal={() => setOpenConfirm(false)}
                confirmFunction={handleConfirm}
            >
                <h3>Deletar Task</h3>
                <p>Você realmente deseja deletar a checklist {checklist.name}?</p>
            </Confirm>

            <FormModalChecklist
                checklistData={checklistData}
                setChecklistData={setChecklistData}
                openModal={openModalEdit}
                closeModal={handleCloseModal}
                buttonLoading={buttonLoading}
                submitFunction={() => updateChecklist(checklist)}
                modalTitle={"Editar Checklist"}
            />
        </div>
    )
}

export default Card