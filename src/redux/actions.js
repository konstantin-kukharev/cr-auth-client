import { CHANGE_PAGE, AUTHORIZE, LOGOUT } from "./actionTypes";

export const changePage = id => ({
    type: CHANGE_PAGE,
    payload: {
        id
    }
});

export const authorize = content => ({
    type: AUTHORIZE,
    payload: { content }
});

export const logout = content => ({
    type: LOGOUT,
    payload: { content }
});