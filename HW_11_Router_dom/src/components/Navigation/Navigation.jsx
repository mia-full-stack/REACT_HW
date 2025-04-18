import { NavLink } from "react-router-dom"
import styles from "./Navigation.module.css"

function Navigation() {
    return (
        <nav className={styles.navigation}>
            <div className={styles.logo}>
                <h1>Мой Блог | My Blog</h1>
            </div>
            <ul className={styles.navLinks}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                        Главная | Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/articles" className={({ isActive }) => (isActive ? "active" : "")}>
                        Статьи | Articles
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;