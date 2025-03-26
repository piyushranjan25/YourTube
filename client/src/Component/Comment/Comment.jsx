import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { postComment } from '../../action/comment';
import './Comment.css'
import Displaycomment from './Displaycomment'

const Comment = ({ videoid }) => {
    const [commentText, setCommentText] = useState("");
    const currentUser = useSelector((state) => state.currentUserReducer);
    const commentList = useSelector(state => state.commentReducer);
    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (currentUser) {
            if (!commentText) alert("Please type your comment");
            else {
                dispatch(postComment({
                    videoId: videoid,
                    userId: currentUser?.result._id,
                    commentBody: commentText,
                    userCommented: currentUser?.result.name,
                }));
                setCommentText("");
            }
        }
        else alert("Please login to comment");
    }

    return (
        <>
            <form className="comments_sub_form_comments" onSubmit={(e) => handleOnSubmit(e)}>
                <input type="text" onChange={(e) => setCommentText(e.target.value)} placeholder="add comment..."
                    value={commentText} className="comment_ibox" />
                <input type="submit" value="add" className="comment_add_btn_comments" />
            </form>
            <div className="display_comment_container">
                {commentList?.data?.filter((q) => videoid === q?.videoId)
                    .reverse().map((m) => {
                        return <Displaycomment cId={m._id} userId={m.userId} commentBody={m.commentBody} commentOn={m.commentedOn} userCommented={m.userCommented} />
                    })}
            </div>
        </>
    )
}

export default Comment
