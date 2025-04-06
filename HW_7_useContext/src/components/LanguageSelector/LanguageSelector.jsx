
import { useContext } from "react"
import { LanguageContext } from "../../../src/contexts/LanguageContext"
import styles from "./LanguageSelector.module.css"

const LanguageSelector = () => {
    // Получаем текущий язык и функцию изменения из контекста
    const { language, setLanguage } = useContext(LanguageContext)

    // Обработчик изменения языка
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value)
    }

    return (
        <div className={styles.languageSelector}>
            <label htmlFor="language-select">
                {language === "ru" && "Выберите язык:"}
                {language === "en" && "Select language:"}
                {language === "de" && "Sprache wählen:"}
            </label>
            <select id="language-select" value={language} onChange={handleLanguageChange}>
                <option value="ru">Русский</option>
                <option value="en">English</option>
                <option value="de">Deutsch</option>
            </select>
        </div>
    )
}

export default LanguageSelector

