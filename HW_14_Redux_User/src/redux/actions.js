// Define action types
export const SET_USER_INFO = "SET_USER_INFO"

// Action creator for updating user information
export const setUserInfo = (name, status) => {
    return {
        type: SET_USER_INFO,
        payload: {
            name,
            status,
        },
    }
}
