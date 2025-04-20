import React from "react"
import styles from "./userList.module.css"

// Компонент UserList, который отображает список пользователей
const UserList = ({ users }) => {
    console.log("Rendering UserList component") // Для демонстрации когда компонент перерендеривается

    return (
        <div className={styles.userList}>
            {users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                        <li key={user.id} className={styles.userItem}>
                            <span className={styles.userId}>{user.id}.</span>
                            <span className={styles.userName}>{user.name}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={styles.noUsers}>Пользователи не найдены</p>
            )}
        </div>
    )
}

// Используем React.memo для предотвращения ненужных перерендеров
export default React.memo(UserList)
