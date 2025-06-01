import { useState } from "react"
import "./App.css"
import ValueDisplay from "../ValueDisplay/ValueDisplay"

function App() {
  // Создаем состояние для хранения значения ввода
  const [inputValue, setInputValue] = useState("")

  // Обработчик изменения значения в поле ввода
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="app-container">
      <h1>Отслеживание значений пропсов</h1>

      <div className="input-container">
        <label htmlFor="valueInput">Введите значение:</label>
        {/* Поле ввода, которое обновляет состояние при изменении */}
        <input
          id="valueInput"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введите что-нибудь..."
        />
      </div>

      {/* Передаем текущее значение как пропс компоненту ValueDisplay */}
      <ValueDisplay value={inputValue} />
    </div>
  )
}

export default App