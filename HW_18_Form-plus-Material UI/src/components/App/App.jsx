import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Home from "../Home/Home"
import About from "../About/About"
import Contacts from "../Contacts/Contacts"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
