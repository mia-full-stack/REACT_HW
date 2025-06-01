// Определение типов действий
export const SET_FILTER = "SET_FILTER"

// Действие для установки фильтра
export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        payload: filter,
    }
}
