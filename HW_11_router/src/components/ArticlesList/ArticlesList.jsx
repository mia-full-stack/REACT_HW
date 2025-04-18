import { Link } from "react-router-dom"
import { articles } from "../../data/articles"
import "./ArticlesList.css"

function ArticlesList() {
    return (
        <div className="articles-list">
            <h1>Статьи | Articles</h1>
            <div className="articles-grid">
                {articles.map((article) => (
                    <div className="article-card" key={article.id}>
                        <div className="article-image">
                            <img src={article.imageUrl || "/placeholder.svg"} alt={article.title} />
                        </div>
                        <div className="article-content">
                            <h2>{article.title}</h2>
                            <p className="article-date">{article.date}</p>
                            <p className="article-excerpt">{article.excerpt}</p>
                            <Link to={`/articles/${article.id}`} className="read-more">
                                Читать далее | Read more
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ArticlesList;
