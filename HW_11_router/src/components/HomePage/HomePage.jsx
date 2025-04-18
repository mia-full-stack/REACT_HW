
import { Link } from "react-router-dom"
import styles from "./HomePage.module.css"

function HomePage() {
    return (
        <div className="home-page">
            <div className={styles.hero}>
                <h1>Добро пожаловать в мой блог!</h1>
                <h2>Welcome to my blog!</h2>
                <p>Здесь вы найдете интересные статьи на различные темы.</p>
                <p>Here you will find interesting articles on various topics.</p>
                <Link to="/articles" className={styles.ctaButton}>
                    Просмотреть статьи | View Articles
                </Link>
            </div>

            <div className={styles.featuredSection}>
                <h2>Избранные статьи | Featured Articles</h2>
                <div className={styles.featuredArticles}>
                    <div className={styles.featuredArticle}>
                        <h3>Начало работы с React</h3>
                        <p>Узнайте, как начать разработку с использованием библиотеки React...</p>
                        <Link to="/articles/1">Читать далее | Read more</Link>
                    </div>
                    <div className={styles.featuredArticle}>
                        <h3>Маршрутизация в React</h3>
                        <p>Изучите основы маршрутизации с использованием react-router-dom...</p>
                        <Link to="/articles/2">Читать далее | Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
