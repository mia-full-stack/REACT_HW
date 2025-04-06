import { createContext, useState } from "react"

// Создаем контекст для языка
export const LanguageContext = createContext()

// Компонент-провайдер для языкового контекста
export const LanguageProvider = ({ children }) => {
    
    // Состояние для хранения текущего языка, по умолчанию русский
    const [language, setLanguage] = useState("ru")

    return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

