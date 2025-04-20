import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>О компании</h3>
                        <p>Мы предоставляем качественные услуги и решения для наших клиентов с 2010 года.</p>
                    </div>
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Быстрые ссылки</h3>
                        <ul className={styles.footerLinks}>
                            <li>
                                <a href="/">Главная</a>
                            </li>
                            <li>
                                <a href="/about">О нас</a>
                            </li>
                            <li>
                                <a href="/contacts">Контакты</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Контакты</h3>
                        <p>г. Москва, ул. Примерная, д. 123</p>
                        <p>Телефон: +7 (999) 123-45-67</p>
                        <p>Email: info@example.com</p>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; {new Date().getFullYear()} Мой Сайт. Все права защищены.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
