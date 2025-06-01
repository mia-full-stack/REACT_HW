import { createStore } from "redux"
import reducer from "./reducer"

// Создание хранилища Redux
const store = createStore(
    reducer,
    // Подключение Redux DevTools для отладки (опционально)
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
