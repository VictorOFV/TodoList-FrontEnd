import { Avatar } from "@mui/material";
import { FaFontAwesomeFlag, FaRegClock } from "react-icons/fa";
import styles from "./styles.module.scss";
import getLargestTimeDifference from "../../utils/getLargestTimeDifference";
import iconNotFound from "../../assets/iconNotFound.jpg"

function Card({ checklist, image, avatar }) {
    const creationTime = getLargestTimeDifference(checklist.createdAt, new Date())

    return (
        <div className={styles.checklist}>
            <img className={styles.checklistIcon} src={image ?? iconNotFound} />
            <div className={styles.checklistInfoContainer}>
                <div className={styles.checklistTitle}>
                    <h2>{checklist.name}</h2>
                </div>
                <div className={styles.checklistDescription}>
                    <p>{checklist.description}</p>
                </div>
                <div className={styles.checklistInfo}>
                    <span className={styles.alignElements} style={{ color: "red" }}><FaFontAwesomeFlag /> Alta</span>
                    <span className={styles.alignElements}><FaRegClock /> {creationTime}</span>
                </div>
                <div className={styles.checklistAuthor}>
                    <Avatar
                        src={avatar}
                        sx={{ width: 32, height: 32 }}
                    >
                        {checklist.author.name[0]}
                    </Avatar>
                    <p>Criado por <span>{checklist.author.name}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Card