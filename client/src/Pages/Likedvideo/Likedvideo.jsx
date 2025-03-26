import React from 'react'
import WHL from '../../Component/WHL/WHL'
import { useSelector } from 'react-redux'

const Likedvideo = () => {
    const likedVideoList = useSelector(state => state.likedVideoReducer);

    return (
        <div>
            <WHL page={"Liked Video"} videoList={likedVideoList} />
        </div>
    )
}

export default Likedvideo
