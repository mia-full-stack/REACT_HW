import { connect } from "react-redux"
import UserItem from "../UserItem/UserItem"
import styles from "./UserList.module.css"

// Компонент списка пользователей
const UserList = ({ users, filter }) => {
    // Фильтрация пользователей по имени
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div className={styles.userListContainer}>
            {filteredUsers.length > 0 ? (
                <div className={styles.userList}>
                    {filteredUsers.map((user) => (
                        <UserItem key={user.id} user={user} />
                    ))}
                </div>
            ) : (
                <p className={styles.noUsers}>Пользователи не найдены</p>
            )}
        </div>
    )
}

// Получение состояния из Redux store
const mapStateToProps = (state) => {
    return {
        users: state.users,
        filter: state.filter,
    }
}

// Подключение компонента к Redux
export default connect(mapStateToProps)(UserList);
