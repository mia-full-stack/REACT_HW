import { useState, useEffect } from "react"

function ListItems() {
    // Состояние для хранения списка элементов и значения ввода
    const [items, setItems] = useState([])
    const [inputValue, setInputValue] = useState("")

    // Функция для добавления нового элемента в список
    const addItem = () => {
        if (inputValue.trim() !== "") {
            setItems([...items, inputValue])
            setInputValue("") // Очищаем поле ввода после добавления
        }
    }

    // Намеренная проблема с производительностью: useEffect запускается при каждом изменении items
    useEffect(() => {
        console.log("Компонент ListItems обновлен")
    }, [items]) // Эта зависимость вызывает запуск эффекта каждый раз при изменении items

    // Обработка нажатия клавиши Enter для добавления элемента
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            addItem()
        }
    }

    return (
        <div className="list-container">
            <h2>Список элементов</h2>
            <div className="input-group">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Введите новый элемент"
                />
                <button onClick={addItem}>Добавить</button>
            </div>
            <ul className="items-list">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListItems

