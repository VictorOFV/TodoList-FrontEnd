import styles from "./styles.module.scss"

function FooterForm({ children }) {
    return (
        <div className={styles.footerForm}>
            {children}
        </div>
    )
}

export default FooterForm