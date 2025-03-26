import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { BsThreeDots } from 'react-icons/bs'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine } from 'react-icons/ri'
import { likeVideo } from '../../action/video';
import { addToLikedVideo, deleteLikedVideo } from '../../action/likevideo';
import { addToWatchLater, deleteWatchLater } from '../../action/watchlater';
import './Likewatchlatersavebtn.css'

const Likewatchlatersavebtn = ({ vv, vid }) => {
  const dispatch = useDispatch();
  const [saveVideo, setSaveVideo] = useState(false);
  const [dislikeBtn, setDislikeBtn] = useState(false);
  const [likeBtn, setLikeBtn] = useState(false);
  const currentUser = useSelector((state) => state.currentUserReducer);
  const likedVideoList = useSelector(state => state.likedVideoReducer);
  const watchLaterList = useSelector(state => state.watchLaterReducer);

  useEffect(() => {
    likedVideoList?.data?.filter(
      (q) => q.videoId === vid && q.viewer === currentUser?.result._id
    ).map((m) => setLikeBtn(true));

    watchLaterList?.data?.filter(
      (q) => q.videoId === vid && q.viewer === currentUser?.result._id
    ).map((m) => setSaveVideo(true));
  }, [])

  const toggleSaveVideo = () => {
    if (currentUser) {
      if (saveVideo) {
        setSaveVideo(false);
        dispatch(deleteWatchLater({ videoId: vid, viewer: currentUser?.result._id }));
      }
      else {
        setSaveVideo(true);
        dispatch(addToWatchLater({ videoId: vid, viewer: currentUser?.result._id }));
      }
    }
    else alert("Please login to save video!");
  }

  const toggleLikeVideo = (e, like) => {
    if (currentUser) {
      if (likeBtn) {
        setLikeBtn(false);
        dispatch(likeVideo({ id: vid, Like: like - 1 }));
        dispatch(deleteLikedVideo({ videoId: vid, viewer: currentUser?.result._id }));
      }
      else {
        setLikeBtn(true);
        dispatch(likeVideo({ id: vid, Like: like + 1 }));
        dispatch(addToLikedVideo({ videoId: vid, viewer: currentUser?.result._id }));
        setDislikeBtn(false);
      }
    }
    else alert("Please login to like video!");
  }

  const toggleDislikeVideo = (e, like) => {
    if (currentUser) {
      if (dislikeBtn) {
        setDislikeBtn(false);
      }
      else {
        setDislikeBtn(true);
        if (likeBtn) {
          dispatch(likeVideo({ id: vid, Like: like - 1 }));
          dispatch(deleteLikedVideo({ videoId: vid, viewer: currentUser?.result._id }));
        }
        setLikeBtn(false);
      }
    }
    else alert("Please login to dislike video!");
  }

  return (
    <div className="btns_cont_videoPage">
      <div className="btn_VideoPage">
        <BsThreeDots />
      </div>
      <div className="btn_VideoPage">
        <div className="like_videoPage" onClick={(e) => toggleLikeVideo(e, vv?.likes)}>
          {likeBtn ? (
            <>
              <AiFillLike size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              <AiOutlineLike size={22} className="btns_videoPage" />
            </>
          )}
          <b>{vv?.likes}Likes</b>
        </div>
        <div className="like_videoPage" onClick={(e) => toggleDislikeVideo(e, vv?.likes)}>
          {dislikeBtn ? (
            <>
              <AiFillDislike size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              <AiOutlineDislike size={22} className="btns_videoPage" />
            </>
          )}
          <b>Dislike</b>
        </div>
        <div className="like_videoPage" onClick={(e) => toggleSaveVideo(e)}>
          {saveVideo ? (
            <>
              <MdPlaylistAddCheck size={22} className="btns_videoPage" />
              <b>Saved</b>
            </>
          ) : (
            <>
              <RiPlayListAddFill size={22} className="btns_videoPage" />
              <b>Save</b>
            </>
          )}
        </div>
        <div className="like_videoPage">
          <>
            <RiHeartAddFill size={22} className="btns_videoPage" />
            <b>Thanks</b>
          </>
        </div>
        <div className="like_videoPage">
          <>
            <RiShareForwardLine size={22} className="btns_videoPage" />
            <b>Share</b>
          </>
        </div>
      </div>
    </div>
  )
}

export default Likewatchlatersavebtn
