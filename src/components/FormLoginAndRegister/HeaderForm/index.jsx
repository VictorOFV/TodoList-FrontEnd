import styles from "./styles.module.scss"

function HeaderForm({ children }) {
    return (
        <div className={styles.headerForm}>
            {children}
        </div>
    )
}

export default HeaderForm