import * as api from '../Api'

export const postComment = (commentData) => async (dispatch) => {
    try {
        const { data } = api.postComment(commentData);
        dispatch({ type: "POST_COMMENT", payload: data });
        dispatch(getAllComments());
    }
    catch (error) {
        console.log(error);
    }
}

export const editComment = (commentData) => async (dispatch) => {
    try {
        const { id, commentBody } = commentData;
        const { data } = await api.editComment(id, commentBody);
        dispatch({ type: "EDIT_COMMENT", payload: data });
        dispatch(getAllComments());
    }
    catch (error) {
        console.log(error);
    }
}

export const getAllComments = () => async (dispatch) => {
    try {
        const { data } = await api.getAllComments();
        dispatch({ type: "FETCH_ALL_COMMENTS", payload: data });
        dispatch(getAllComments());
    }
    catch (error) {
        console.log(error);
    }
}

export const deleteComment = (id) => async (dispatch) => {
    try {
        await api.deleteComment(id);
        dispatch(getAllComments());
    }
    catch (error) {
        console.log(error);
    }
}