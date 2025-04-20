import { AppBar, Toolbar, Typography } from "@mui/material"
import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <AppBar position="fixed" className={styles.navbar}>
            <Toolbar>
                <Typography variant="h6" component="div" className={styles.navbarTitle}>
                    Material UI Приложение
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
