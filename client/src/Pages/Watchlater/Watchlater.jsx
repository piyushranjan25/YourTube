import React from 'react'
import { useSelector } from 'react-redux'
import WHL from '../../Component/WHL/WHL'

const Watchlater = () => {
    const watchLaterVideoList = useSelector(state => state.watchLaterReducer);

    return (
        <div>
            <WHL page={"Watch Later"} videoList={watchLaterVideoList} />
        </div>
    )
}

export default Watchlater
