import { legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

// Импортируем корневой редюсер
// Это файл, который объединяет все редюсеры приложения в один
import rootReducer from "./reducers";

// Создаем Redux хранилище
// Используем legacy_createStore и devToolsEnhancer для поддержки Redux DevTools
const store = createStore(rootReducer, devToolsEnhancer())

export default store;

