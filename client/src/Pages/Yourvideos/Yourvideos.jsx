import React from 'react'
import { useSelector } from 'react-redux';
import './Yourvideos.css'
import Showvideogrid from '../../Component/Showvideogrid/Showvideogrid'
import Leftsidebar from '../../Component/Leftsidebar/Leftsidebar'

const Yourvideos = () => {
    const currentUser = useSelector((state) => state.currentUserReducer);
    const yourVideoList = useSelector(state => state.videoReducer)?.data?.filter(q => q.videochannel === currentUser?.result._id).reverse();

    return (
        <div className="container_Pages_App">
            <Leftsidebar />
            <div className="container2_Pages_App">
                <div className="container_yourvideo">
                    <h1>Your Videos</h1>
                    {
                        currentUser ? (
                            <>
                                <Showvideogrid vid={yourVideoList} />
                            </>
                        ) : (
                            <h3>Please login to see your uploaded video list</h3>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Yourvideos
