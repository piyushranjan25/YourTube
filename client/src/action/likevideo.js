import * as api from '../Api'

export const addToLikedVideo = (likedVideoData) => async (dispatch) => {
    try {
        const { data } = await api.addToLikedVideo(likedVideoData);
        dispatch({ type: "POST_LIKED_VIDEO", data });
        dispatch(getAllLikedVideos());
    }
    catch (error) {
        console.log(error);
    }
}

export const getAllLikedVideos = () => async (dispatch) => {
    try {
        const { data } = await api.getAllLikedVideos();
        dispatch({ type: "FETCH_ALL_LIKED_VIDEOS", payload: data });
    }
    catch (error) {
        console.log(error);
    }
}

export const deleteLikedVideo = (likedVideoData) => async (dispatch) => {
    try {
        const { videoId, viewer } = likedVideoData;
        await api.deleteLikedVideo(videoId, viewer);
        dispatch(getAllLikedVideos());
    }
    catch (error) {
        console.log(error);
    }
}