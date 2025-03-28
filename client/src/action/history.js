import * as api from '../Api'

export const addToHistory = (historyData) => async (dispatch) => {
    try {
        const { data } = await api.addToHistory(historyData);
        dispatch({ type: "POST_HISTORY", data });
        dispatch(getAllHistory());
    }
    catch (error) {
        console.log(error);
    }
}

export const getAllHistory = () => async (dispatch) => {
    try {
        const { data } = await api.getAllHistory();
        dispatch({ type: "FETCH_ALL_HISTORY", payload: data });
    }
    catch (error) {
        console.log(error);
    }
}

export const deleteHistory = (historyData) => async (dispatch) => {
    try {
        const { userId } = historyData;
        await api.deleteHistory(userId);
        dispatch(getAllHistory());
    }
    catch (error) {
        console.log(error);
    }
}