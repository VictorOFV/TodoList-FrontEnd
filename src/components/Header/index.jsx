import styles from "./styles.module.scss"
import logo from "../../assets/icon.svg"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className={styles.header}>
            <Link to={"/"}><img src={logo} alt="logo" /></Link>
        </header>
    )
}

export default Header