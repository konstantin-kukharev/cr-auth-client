import { CHANGE_PAGE } from "../actionTypes";
import UserPage from "../../components/page/User";
import UserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

const initialState = {
    menu: [
        {
            name: 'Пользователи',
            code: 'user',
            link: '/user',
            icon: UserCircleIcon,
            page: UserPage
        }
    ],
    currentPageIndex: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch (action.type) {
        case CHANGE_PAGE: {
            const { id } = action.payload;
            return {
                ...state,
                currentPageIndex: id,
            };
        }
        default:
            return state;
    }
}
