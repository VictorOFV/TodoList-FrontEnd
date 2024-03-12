import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom"
import styles from "../styles/settingsLayout.module.scss"

function SettingsLeyout() {
    const { pathname } = useLocation()

    return (
        <>
            <h1>Configurações</h1>

            <div className={styles.linksContainer}>
                <nav>
                    <Link
                        to={"/settings"}
                        style={{ borderBottomColor: pathname === "/settings" ? "#fff" : null }}>
                        <FaUserEdit /> Informações da Conta
                    </Link>
                    <Link
                        to={"/settings/change-password"}
                        style={{ borderBottomColor: pathname === "/settings/change-password" ? "#fff" : null }}>
                        <RiLockPasswordFill /> Trocar Senha
                    </Link>
                </nav>
                <hr />
            </div>
            <Outlet />
        </>
    )
}

export default SettingsLeyout