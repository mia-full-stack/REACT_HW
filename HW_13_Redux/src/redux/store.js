import { legacy_createStore } from "redux"
import { devToolsEnhancer } from "@redux-devtools/extension"
import reducer from "./reducer"

// Создание хранилища Redux с использованием devToolsEnhancer
const store = legacy_createStore(
    reducer,
    // Использование devToolsEnhancer для подключения Redux DevTools
    devToolsEnhancer(),
)

export default store