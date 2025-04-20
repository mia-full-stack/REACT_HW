import { useState } from "react"
import { Container, Typography, Button } from "@mui/material"
import Navbar from "../Navbar/Navbar"
import WelcomeDialog from "../WelcomeDialog/WelcomeDialog"
import "./App.css"

function App() {
  // Состояние для управления открытием/закрытием диалогового окна
  const [open, setOpen] = useState(false)

  // Функция для открытия диалогового окна
  const handleClickOpen = () => {
    setOpen(true)
  }

  // Функция для закрытия диалогового окна
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="app">
      {/* Компонент верхней панели навигации */}
      <Navbar />
      {/* Основной контейнер приложения */}
      <Container className="main-container">
        {/* Заголовок приветствия */}
        <Typography variant="h4" component="h1" className="welcome-text">
          Добро пожаловать в React приложение с Material UI!
        </Typography>
        {/* Кнопка для открытия диалогового окна */}
        <Button variant="contained" color="primary" onClick={handleClickOpen} className="open-dialog-button">
          Открыть диалоговое окно
        </Button>
        {/* Компонент диалогового окна с передачей состояния и функции закрытия */}
        <WelcomeDialog open={open} handleClose={handleClose} />
      </Container>
    </div>
  )
}

export default App
