"use client"

import { useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { articles } from "../../data/articles"
import styles from "./ArticlePage.module.css"

function ArticlePage() {
    const { id } = useParams()
    const navigate = useNavigate()

    // Находим статью по id
    const article = articles.find((article) => article.id === Number.parseInt(id))

    // Если статья не найдена, перенаправляем на страницу со списком статей
    useEffect(() => {
        if (!article) {
            navigate("/articles")
        }
    }, [article, navigate])

    if (!article) {
        return <div>Статья не найдена. Перенаправление...</div>
    }

    return (
        <div className={styles.articlePage}>
            <div className={styles.articleHeader}>
                <h1>{article.title}</h1>
                <p className={styles.articleMeta}>
                    <span className={styles.articleDate}>{article.date}</span>
                    <span className={styles.articleAuthor}>Автор: {article.author}</span>
                </p>
            </div>

            <div className={styles.articleFeaturedImage}>
                <img src={article.imageUrl || "/placeholder.svg"} alt={article.title} />
            </div>

            <div className={styles.articleContent}>
                {article.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <div className={styles.articleNavigation}>
                <Link to="/articles" className={styles.backToArticles}>
                    ← Назад к списку статей | Back to articles
                </Link>
            </div>
        </div>
    )
}

export default ArticlePage
