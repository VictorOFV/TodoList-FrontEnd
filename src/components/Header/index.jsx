import { Link } from "react-router-dom"
import styles from "./styles.module.scss"
import logo from "../../assets/icon.svg"
import { IconButton, Menu, MenuItem } from "@mui/material"
import { useContext, useState } from "react"
import { authContext } from "../../context/Auth"

function Header() {
    const [open, setOpen] = useState(false)
    const { logout, user } = useContext(authContext)

    console.log(user)

    return (
        <header className={styles.header}>
            <Link to={"/"}><img className={styles.logo} src={logo} alt="logo" /></Link>
            <div className={styles.navContainer}>
                <nav>
                    <Link to={"/"}>Minhas Tasks</Link>
                    <Link to={"/globals"}>Task Globais</Link>
                </nav>
                <div>
                    <IconButton onClick={() => setOpen(true)} >
                        <img className={styles.avatar} src={user.avatar} alt="avatar" />
                    </IconButton>
                </div>
            </div>

            <Menu
                className={styles.menu}
                id="basic-menu"
                open={open}
                onClose={() => setOpen(false)}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{
                    marginTop: "2rem",
                    marginLeft: "-5rem"
                }}
            >
                <MenuItem className={styles.menuItem}>
                    <Link style={{ color: "#000", width: "100%"}} to={`/profile/${user._id}`}>Perfil</Link>
                </MenuItem>
                <MenuItem className={styles.menuItem}>
                    <Link style={{ color: "#000", width: "100%" }} to={"/settings"}>Configuração</Link>
                </MenuItem>
                <MenuItem className={styles.menuItem} onClick={logout}>Sair</MenuItem>
            </Menu>
        </header>
    )
}

export default Header