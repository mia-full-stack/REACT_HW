export const selectAuthSuccess = store => store.auth.success;

export const selectIsLogin = store => {
    const { token } = store.auth;
    return Boolean(token);
}