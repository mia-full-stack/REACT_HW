import styles from "./UserItem.module.css"

// Компонент для отображения отдельного пользователя
const UserItem = ({ user }) => {
    return (
        <div className={styles.userItem}>
            <h3 className={styles.userName}>{user.name}</h3>
            <p className={styles.userEmail}>{user.email}</p>
        </div>
    )
}

export default UserItem;
