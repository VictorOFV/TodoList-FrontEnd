import styles from "./styles.module.scss";
import { FaFontAwesomeFlag, FaRegClock } from "react-icons/fa";

function Card({ checklist, image, avatar }) {
    return (
        <div className={styles.checklist}>
            <img className={styles.checklistIcon} src={image} />
            <div className={styles.checklistInfoContainer}>
                <div className={styles.checklistTitle}>
                    <h2>{checklist.name}</h2>
                </div>
                <div className={styles.checklistDescription}>
                    <p>{checklist.description}</p>
                </div>
                <div className={styles.checklistInfo}>
                    <span style={{ color: "red" }}><FaFontAwesomeFlag /> Alta</span>
                    <span><FaRegClock /> Há 2 horas</span>
                </div>
                <hr />
                <div className={styles.checklistAuthor}>
                    <img src={avatar} />
                    <p>Criado por <span>{checklist.author.name}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Card