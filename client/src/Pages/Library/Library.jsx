import React from "react";
import { useSelector } from 'react-redux';
import Leftsidebar from "../../Component/Leftsidebar/Leftsidebar";
import { FaHistory } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import WHLvideolist from "../../Component/WHL/WHLvideolist";
import './Library.css'

const Library = () => {
    const currentUser = useSelector((state) => state.currentUserReducer);
    const watchHistoryVideoList = useSelector(state => state.historyReducer);
    const likedVideoList = useSelector(state => state.likedVideoReducer);
    const watchLaterVideoList = useSelector(state => state.watchLaterReducer);

    return (
        <div className="container_Pages_App">
            <Leftsidebar />
            <div className="container2_Pages_App">
                <div className="container_libraryPage">
                    <h1 className="title_container_LibraryPage">
                        <b>
                            <FaHistory />
                        </b>
                        <b>History</b>
                    </h1>
                    <div className="container_videoList_LibraryPage">
                        <WHLvideolist
                            page={"History"}
                            currentUser={currentUser?.result?._id}
                            videoList={watchHistoryVideoList}
                        />
                    </div>
                </div>
                <div className="container_libraryPage">
                    <h1 className="title_container_LibraryPage">
                        <b>
                            <MdOutlineWatchLater />
                        </b>
                        <b>Watch Later</b>
                    </h1>
                    <div className="container_videoList_LibraryPage">
                        <WHLvideolist
                            page={"Watch Later"}
                            currentUser={currentUser?.result?._id}
                            videoList={watchLaterVideoList}
                        />
                    </div>
                </div>
                <div className="container_libraryPage">
                    <h1 className="title_container_LibraryPage">
                        <b>
                            <AiOutlineLike />
                        </b>
                        <b>Liked Videos</b>
                    </h1>
                    <div className="container_videoList_LibraryPage">
                        <WHLvideolist
                            page={"Liked Videos"}
                            currentUser={currentUser?.result._id}
                            videoList={likedVideoList}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Library;
