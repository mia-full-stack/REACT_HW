import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../HomePage/HomePage"
import ArticlesList from "../ArticlesList/ArticlesList"
import ArticlePage from "../ArticlePage/ArticlePage"
import Navigation from "../Navigation/Navigation"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:id" element={<ArticlePage />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2025 Мой Простой Блог | My Simple Blog</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
