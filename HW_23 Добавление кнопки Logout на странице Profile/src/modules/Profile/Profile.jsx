import { useDispatch } from "react-redux";

import PageTitle from "../../shared/components/PageTitle/PageTitle";
import Button from "../../shared/components/Button/Button";

import { logoutUser } from "../../redux/auth/auth-thunks";


const Profile = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
    }

    return (
        <div>
            <PageTitle>Welcome to the Profile!</PageTitle>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    )
};

export default Profile;