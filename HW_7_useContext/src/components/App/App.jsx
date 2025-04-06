import { LanguageProvider } from "../../contexts/LanguageContext"
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector"
import TextDisplay from "../../components/TextDisplay/TextDisplay"

import './App.css'

function App() {


  return (
    <>
    {/* // Оборачиваем приложение в провайдер языкового контекста */}
    
    <LanguageProvider>
      <div className="app">
        <header>
          <h1> Переключение языка в React с помощью useContext и Provider</h1>
        </header>
        <main>
          {/* Компонент для выбора языка */}
          <LanguageSelector />

          {/* Компонент для отображения текста на выбранном языке */}
          <TextDisplay />
        </main>
      </div>
    </LanguageProvider>
    </>
  )
}

export default App
