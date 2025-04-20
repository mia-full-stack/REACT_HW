import { connect } from "react-redux"

// User component to display user information
const User = ({ name, status }) => {
    return (
        <div className="user-info">
            <h2>Информация о пользователе</h2>
            <p>
                <strong>Имя:</strong> {name}
            </p>
            <p>
                <strong>Статус:</strong> {status}
            </p>
        </div>
    )
}

// Map Redux state to component props
const mapStateToProps = (state) => {
    return {
        name: state.user.name,
        status: state.user.status,
    }
}

// Connect component to Redux store
export default connect(mapStateToProps)(User)
