import { useSelector } from "react-redux";

import { selectAllUsers } from "../../redux/users/users-selector";

const UserList = () => {

    const items = useSelector(selectAllUsers);

    const elements = items.map(item => (
        <li key={item.id}>{item.name} ({item.email})</li>
    ))

    return (
        <div>
            <h2>Список пользователей:</h2>
            <ul>{elements}</ul>
        </div>
    )
};

export default UserList;