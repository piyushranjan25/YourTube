import * as api from '../Api';

export const uploadVideo = (videoData) => async (dispatch) => {
    try {
        const { fileData, fileOption } = videoData;
        const { data } = await api.uploadVideo(fileData, fileOption);
        dispatch({ type: "POST_VIDEO", data });
        dispatch(getAllVideos());
    }
    catch (error) {
        alert(error.response.data.message);
    }
}

export const getAllVideos = () => async (dispatch) => {
    try {
        const { data } = await api.getVideos();
        dispatch({ type: "FETCH_ALL_VIDEOS", payload: data });
    }
    catch (error) {
        console.log(error);
    }
}

export const likeVideo = (likeData) => async (dispatch) => {
    try {
        const { id, Like } = likeData;
        const { data } = await api.likeVideo(id, Like);
        dispatch({ type: "POST_LIKE", payload: data });
        dispatch(getAllVideos());
    }
    catch (error) {
        console.log(error);
    }
}

export const viewVideo = (viewData) => async (dispatch) => {
    try {
        const { id } = viewData;
        console.log(id);
        const { data } = await api.viewsVideo(id);
        dispatch({ type: "POST_VIEWS", data });
        dispatch(getAllVideos());
    }
    catch (error) {
        console.log(error);
    }
}