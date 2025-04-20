import { Link } from "react-router-dom"
import styles from "./Home.module.css"

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Добро пожаловать на наш сайт</h1>
                    <p className={styles.heroText}>Мы предлагаем качественные услуги и решения для вашего бизнеса</p>
                    <div className={styles.heroCta}>
                        <Link to="/contacts" className={styles.ctaButton}>
                            Связаться с нами
                        </Link>
                        <Link to="/about" className={styles.ctaLink}>
                            Узнать больше
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.featuresSection}>
                <h2 className={styles.sectionTitle}>Наши преимущества</h2>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>🚀</div>
                        <h3 className={styles.featureTitle}>Быстрая работа</h3>
                        <p className={styles.featureText}>Мы выполняем все задачи в кратчайшие сроки без потери качества</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>💼</div>
                        <h3 className={styles.featureTitle}>Профессионализм</h3>
                        <p className={styles.featureText}>Наша команда состоит из опытных специалистов в своей области</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>🔒</div>
                        <h3 className={styles.featureTitle}>Надежность</h3>
                        <p className={styles.featureText}>Мы гарантируем качество и надежность наших услуг</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
