import { useRef, useEffect } from "react"

function ValueDisplay({ value }) {
    // Создаем реф для хранения предыдущего значения пропса
    // useRef возвращает изменяемый объект, который сохраняется между рендерами
    const previousValueRef = useRef()

    // Используем useEffect для обновления рефа после каждого рендера
    useEffect(() => {
        // После каждого рендера сохраняем текущее значение как предыдущее для следующего рендера
        previousValueRef.current = value
        // Зависимость [value] означает, что эффект будет выполняться только при изменении value
    }, [value])

    return (
        <div className="value-display">
            <div className="value-box">
                <h2>Текущее значение:</h2>
                {/* Отображаем текущее значение из пропса или "(пусто)" если значение отсутствует */}
                <p className="value-text">{value || "(пусто)"}</p>
            </div>

            <div className="value-box">
                <h2>Предыдущее значение:</h2>
                {/* Отображаем предыдущее значение из рефа или "(нет)" если предыдущего значения нет */}
                <p className="value-text">{previousValueRef.current || "(нет)"}</p>
            </div>
        </div>
    )
}

export default ValueDisplay
