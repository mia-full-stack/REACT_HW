import { SET_USER_INFO } from "./actions"

// Initial state
const initialState = {
    user: {
        name: "Гость",
        status: "Онлайн",
    },
}

// Root reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            // Обновляем состояние при получении действия SET_USER_INFO
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    status: action.payload.status,
                },
            }
        default:
            // Возвращаем текущее состояние для неизвестных действий
            return state
    }
}

export default rootReducer;
