import styles from "./styles.module.scss"

function BodyForm({ children }) {
    return (
        <div className={styles.bodyForm}>
            {children}
        </div>
    )
}

export default BodyForm