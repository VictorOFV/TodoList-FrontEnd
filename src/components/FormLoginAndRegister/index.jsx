import styles from "./styles.module.scss"
import icon from "../../assets/icon.svg"

function FormLoginAndRegister({ children }) {
    return (
        <form className={styles.form}>
            <div className={styles.itemsContainer}>
                <div className={styles.sideForm}>
                    <img src={icon} />
                </div>
                <div className={styles.formContent}>
                    {children}
                </div>
            </div>
        </form>
    )
}

export default FormLoginAndRegister