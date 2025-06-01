import { useDispatch } from "react-redux";

import LoginForm from "./LoginForm/LoginForm";

import { loginUser } from "../../redux/auth/auth-thunks";


const Login = () => {

    const dispatch = useDispatch();

    const onLoginUser = data => {
        dispatch(loginUser(data));
    }

    return (
        <div>
            <LoginForm submitForm={onLoginUser} />
        </div>
    )
}

export default Login;