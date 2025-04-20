import { Link } from "react-router-dom"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/">Мой Сайт</Link>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link to="/" className={styles.navLink}>
                                Главная
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/about" className={styles.navLink}>
                                О нас
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/contacts" className={styles.navLink}>
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
