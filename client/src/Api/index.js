import axios from 'axios'

const API = axios.create({ baseURL: `http://localhost:5000/` });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("Profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("Profile")).token}`
    }
    return req;
})

export const login = (authData) => API.post("/user/login", authData);
export const updateChannelData = (id, updateData) => API.patch(`/user/update/${id}`, updateData);
export const fetchAllChannel = () => API.get("/user/getallchannel");

export const uploadVideo = (fileData, fileOption) => API.post("/video/uploadvideo", fileData, fileOption);
export const getVideos = () => API.get("/video/getvideos");
export const likeVideo = (id, Like) => API.patch(`/video/like/${id}`, { Like });
export const viewsVideo = (id) => API.patch(`/video/views/${id}`);

export const postComment = (commentData) => API.post("/comment/post", commentData);
export const deleteComment = (id) => API.delete(`/comment/delete/${id}`);
export const editComment = (id, commentBody) => API.patch(`/comment/edit/${id}`, { commentBody });
export const getAllComments = () => API.get("/comment/get");

export const addToHistory = (historyData) => API.post("/video/history", historyData);
export const getAllHistory = () => API.get("/video/getallhistory");
export const deleteHistory = (userId) => API.delete(`/video/deletehistory/${userId}`);

export const addToLikedVideo = (likedVideoData) => API.post("/video/likedvideo", likedVideoData);
export const getAllLikedVideos = () => API.get("/video/getalllikedvideos");
export const deleteLikedVideo = (videoId, viewer) => API.delete(`/video/deletelikedvideo/${videoId}/${viewer}`);

export const addToWatchLater = (watchLaterData) => API.post("/video/watchlater", watchLaterData);
export const getAllWatchLater = () => API.get("/video/getallwatchlater");
export const deleteWatchLater = (videoId, viewer) => API.delete(`/video/deletewatchlater/${videoId}/${viewer}`);