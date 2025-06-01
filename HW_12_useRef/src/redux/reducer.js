import { SET_FILTER } from "./actions"

// Начальное состояние приложения
const initialState = {
    // Список пользователей
    users: [
        { id: 1, name: "Иван Иванов", email: "ivan@example.com" },
        { id: 2, name: "Мария Петрова", email: "maria@example.com" },
        { id: 3, name: "Алексей Сидоров", email: "alex@example.com" },
        { id: 4, name: "Елена Смирнова", email: "elena@example.com" },
        { id: 5, name: "Дмитрий Козлов", email: "dmitry@example.com" },
    ],
    // Строка фильтра
    filter: "",
}

// Редьюсер для обработки действий
const reducer = (state = initialState, action) => {
    switch (action.type) {
        // Обработка действия установки фильтра
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload,
            }
        // Возврат текущего состояния для неизвестных действий
        default:
            return state
    }
}

export default reducer
