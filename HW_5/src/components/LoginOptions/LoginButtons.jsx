"use client"

import { useState } from "react"
import "./LoginButtons.css"
import AppleIcon from "../../assets/icons/AppleIcon"
import GoogleIcon from "../../assets/icons/GoogleIcon"
import XIcon from "../../assets/icons/XIcon"

function LoginButtons() {
    // Состояние для отслеживания текущей вариации (2, 3, 4 или 5)
    const [variation, setVariation] = useState(2)

    // Обработчик клика для изменения вариации
    const handleClick = () => {
        // Циклически переключаем между вариациями 2, 3, 4, 5
        if (variation === 5) {
            setVariation(2)
        } else {
            setVariation(variation + 1)
        }
    }

    // Определяем классы для кнопок в зависимости от текущей вариации
    const getAppleClass = () => {
        return variation === 3 ? "login-button blue" : "login-button green"
    }

    const getGoogleClass = () => {
        return variation === 4 ? "login-button blue" : "login-button green"
    }

    const getXClass = () => {
        return variation === 5 ? "login-button blue" : "login-button green"
    }

    return (
        <div className="login-container" onClick={handleClick}>
            <button className={getAppleClass()}>
                <AppleIcon />
            </button>
            <button className={getGoogleClass()}>
                <GoogleIcon />
            </button>
            <button className={getXClass()}>
                <XIcon />
            </button>
        </div>
    )
}

export default LoginButtons;