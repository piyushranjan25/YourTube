import React from 'react'
import Showvideo from '../Showvideo/Showvideo'
import { useSelector } from 'react-redux'

const Showvideolist = ({ videoId }) => {
    const vids = useSelector(state => state.videoReducer);

    return (
        <div className="Container_ShowVideoGrid">
            {
                vids?.data.filter(q => q._id === videoId).map(vi => {
                    return (
                        <div className="video_box_app" key={vi._id}>
                            <Showvideo vid={vi} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Showvideolist
