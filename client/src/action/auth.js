import * as api from '../Api'
import { setCurrentUser } from './currentuser';

export const login = (authData) => async (dispatch) => {
    try {
        const { data } = await api.login(authData);
        dispatch({ type: "AUTH", data });
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    }
    catch (error) {
        alert(error);
    }
}