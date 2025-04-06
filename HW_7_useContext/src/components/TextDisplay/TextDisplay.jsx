import { useContext } from "react"
import { LanguageContext } from "../../../src/contexts/LanguageContext"


import styles from "./TextDisplay.module.css"





const TextDisplay = () => {
    // Получаем текущий язык из контекста
    const { language } = useContext(LanguageContext)

    // Объект с переводами для разных языков
    const translations = {
        ru: {
            title: "Добро пожаловать в наше приложение!",
            description: "Это многоязычное приложение на React с использованием Context API.",
            features: ["Переключение языков", "Использование React-hook useContext", "Простой и понятный код"],
        },
        en: {
            title: "Welcome to our application!",
            description: "This is a multilingual React application using Context API.",
            features: ["Language switching", "Using React useContext", "Simple and clear code"],
        },
        de: {
            title: "Willkommen in unserer Anwendung!",
            description: "Dies ist eine mehrsprachige React-Anwendung mit useContext API.",
            features: ["Sprachumschaltung", "Verwendung von React Context", "Einfacher und klarer Code"],
        },
    }

    // Получаем текущие переводы в зависимости от выбранного языка
    const currentTranslation = translations[language]

    return (
        <div className={styles.textDisplay}>
            <h1>{currentTranslation.title}</h1>
            <p>{currentTranslation.description}</p>
            <div className={styles.features}>
                <h3>
                    {language === "ru" && "Особенности:"}
                    {language === "en" && "Features:"}
                    {language === "de" && "Funktionen:"}
                </h3>
                <ul>
                    {currentTranslation.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TextDisplay;

