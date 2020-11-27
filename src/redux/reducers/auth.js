import { AUTHORIZE, LOGOUT } from "../actionTypes";

const initialState = {
    authorized: false,
    token: null,
    error: null,
    apiUrl: `${process.env.REACT_APP_API_PATH}`
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch (action.type) {
        case AUTHORIZE: {
            const token = action.payload.token;
            return {
                ...state,
                authorized: true,
                token: token
            };
        }
        case LOGOUT: {
            return {
                ...state,
                authorized: false,
                token: null
            };
        }
        default:
            return state;
    }
}
