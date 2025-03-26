import React from 'react'
import Leftsidebar from '../Leftsidebar/Leftsidebar'
import WHLvideolist from './WHLvideolist'
import { useSelector, useDispatch } from 'react-redux'
import './WHL.css'
import { deleteHistory } from '../../action/history'

const WHL = ({ page, videoList }) => {
    const currentUser = useSelector((state) => state.currentUserReducer);
    const dispatch = useDispatch();

    const handleDeleteHistory = () => {
        if (currentUser) {
            dispatch(deleteHistory({ userId: currentUser?.result._id }))
        }
    }

    return (
        <div className="container_Pages_App">
            <Leftsidebar />
            <div className="container2_Pages_App">
                <p className="container_whl">
                    <div className="box_WHL leftside_whl">
                        <b>Your {page} Shown Here</b>
                        {
                            page === "History" &&
                            <div className="clear_History_btn" onClick={() => handleDeleteHistory()}>Clear History</div>
                        }
                    </div>
                    <div className="rightSide_whl">
                        <h1>{page}</h1>
                        <div className="whl_list">
                            <WHLvideolist page={page} currentUser={currentUser?.result?._id} videoList={videoList} />
                        </div>
                    </div>
                </p>
            </div>
        </div>
    )
}

export default WHL
