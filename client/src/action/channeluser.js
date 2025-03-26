import * as api from '../Api';

export const fetchAllChannel = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllChannel();
        console.log(data);
        dispatch({ type: "FETCH_CHANNELS", payload: data });

    }
    catch (error) {
        console.log(error);
    }
}

export const updateChannelData = (id, updateData) => async (dispatch) => {
    try {
        const { data } = await api.updateChannelData(id, updateData);
        dispatch({ type: "UPDATE_DATA", payload: data });

    }
    catch (error) {
        console.log(error);
    }
}