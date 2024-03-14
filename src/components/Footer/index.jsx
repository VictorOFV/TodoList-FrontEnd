import styles from "./styles.module.scss"
import { FaFacebook, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.links}>
                    <a href=""><FaFacebook /></a>
                    <a href=""><FaGithub /></a>
                    <a href=""><FaInstagram /></a>
                    <a href=""><FaDiscord /></a>
                </div>
                <hr />
                <p>© 2024 • Desenvolvido por <a href="">@VictorManoel</a>.</p>
            </div>
        </footer>
    )
}

export default Footer