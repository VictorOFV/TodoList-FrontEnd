import { Link } from "react-router-dom"
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material"
import { useContext, useState } from "react"
import { authContext } from "../../context/Auth"
import styles from "./styles.module.scss"
import logo from "../../assets/icon.svg"


function Header() {
    const [open, setOpen] = useState(false)
    const { logout, user } = useContext(authContext)

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link to={"/"}><img className={styles.logo} src={logo} alt="logo" /></Link>
                <div className={styles.navContainer}>
                    <nav>
                        <Link to={"/"}>Minhas Tasks</Link>
                        <Link to={"/global-tasks"}>Task Globais</Link>
                    </nav>
                    <div>
                        <IconButton onClick={() => setOpen(true)} >
                            <Avatar variant="rounded" alt={user.name} src={user.avatar}>{user.name[0]}</Avatar>
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
                        marginLeft: "-25rem"
                    }}
                >
                    <MenuItem className={styles.menuItem}>
                        <Link style={{ color: "#000", width: "100%" }} to={`/profile/${user.username}`}>Perfil</Link>
                    </MenuItem>
                    <MenuItem className={styles.menuItem}>
                        <Link style={{ color: "#000", width: "100%" }} to={"/settings"}>Configuração</Link>
                    </MenuItem>
                    <MenuItem className={styles.menuItem} onClick={logout}>Sair</MenuItem>
                </Menu>
            </div>
        </header>
    )
}

export default Header