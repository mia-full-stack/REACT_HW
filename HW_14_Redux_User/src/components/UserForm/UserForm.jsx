import { useState } from "react"
import { connect } from "react-redux"
import { setUserInfo } from "../../redux/actions"

// Компонент UserForm для обновления информации о пользователе
const UserForm = ({ currentName, currentStatus, updateUserInfo }) => {
    // Локальное состояние для полей формы
    const [name, setName] = useState(currentName)
    const [status, setStatus] = useState(currentStatus)
    const [nameError, setNameError] = useState("")

    // Обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault()

        // Простая валидация
        if (name.trim() === "") {
            setNameError("Имя не может быть пустым")
            return
        }

        // Обновляем информацию о пользователе в хранилище Redux
        updateUserInfo(name, status)
        setNameError("")
    }

    return (
        <div className="user-form">
            <h2>Изменить информацию</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Имя:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    {nameError && <p className="error">{nameError}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="status">Статус:</label>
                    <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="Онлайн">Онлайн</option>
                        <option value="Отошел">Отошел</option>
                        <option value="Не беспокоить">Не беспокоить</option>
                        <option value="Оффлайн">Оффлайн</option>
                    </select>
                </div>

                <button type="submit">Обновить</button>
            </form>
        </div>
    )
}

// Функция для связывания состояния Redux с пропсами компонента
const mapStateToProps = (state) => {
    return {
        currentName: state.user.name,
        currentStatus: state.user.status,
    }
}

// Функция для связывания действий Redux с пропсами компонента
const mapDispatchToProps = (dispatch) => {
    return {
        updateUserInfo: (name, status) => dispatch(setUserInfo(name, status)),
    }
}

// Подключаем компонент к хранилищу Redux
export default connect(mapStateToProps, mapDispatchToProps)(UserForm)
