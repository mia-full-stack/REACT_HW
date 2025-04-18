import { connect } from "react-redux"
import { setFilter } from "../../redux/actions"
import styles from "./Filter.module.css"

// Компонент фильтра пользователей
const Filter = ({ filter, setFilter }) => {
    // Обработчик изменения значения фильтра
    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }

    return (
        <div className={styles.filterContainer}>
            <input
                type="text"
                className={styles.filterInput}
                placeholder="Поиск пользователей..."
                value={filter}
                onChange={handleFilterChange}
            />
        </div>
    )
}

// Получение состояния из Redux store
const mapStateToProps = (state) => {
    return {
        filter: state.filter,
    }
}

// Подключение действий Redux
const mapDispatchToProps = {
    setFilter,
}

// Подключение компонента к Redux
export default connect(mapStateToProps, mapDispatchToProps)(Filter)
