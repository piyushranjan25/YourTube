import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { editComment, deleteComment } from '../../action/comment';
import './Comment.css'
import moment from 'moment'

const Displaycomment = ({ cId, userId, commentBody, commentOn, userCommented }) => {
    const [edit, setEdit] = useState(false);
    const [cmtBody, setCmtBody] = useState("");
    const [cmtId, setCmtId] = useState("");
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.currentUserReducer);

    const handleEdit = (ctId, ctBdy) => {
        setEdit(true)
        setCmtId(ctId)
        setCmtBody(ctBdy)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!cmtBody) {
            alert("Please type your comment...");
        }
        else {
            dispatch(editComment({ id: cmtId, commentBody: cmtBody }));
            setCmtBody("");
        }
        setEdit(false);
    }

    const handleDelete = (id) => {
        dispatch(deleteComment(id));
    }

    return (
        <>
            {edit ? (
                <>
                    <form className="comments_sub_form_comments" onSubmit={(e) => handleOnSubmit(e)}>
                        <input type="text" onChange={(e) => setCmtBody(e.target.value)} placeholder="Edit comments..." value={cmtBody} className="comment_ibox" />
                        <input type="submit" value="change" className="comment_add_btn_comments" />
                    </form>
                </>
            ) : (
                <p className="comment_body">{commentBody}</p>
            )}
            <p className="usercommented">{" "}- {userCommented} commented {moment(commentOn).fromNow()}</p>
            {currentUser?.result?._id === userId && (
                <p className="EditDel_DisplayComment">
                    <i onClick={() => handleEdit(cId, commentBody)}>Edit</i>
                    <i onClick={() => handleDelete(cId)}>Delete</i>
                </p>
            )}
        </>
    )
}

export default Displaycomment
