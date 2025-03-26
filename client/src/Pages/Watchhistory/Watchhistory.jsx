import React from 'react'
import WHL from '../../Component/WHL/WHL'
import { useSelector } from 'react-redux'

const Watchhistory = () => {
    const watchHistoryVideoList = useSelector(state => state.historyReducer);

    return (
        <div>
            <WHL page={"History"} videoList={watchHistoryVideoList} />
        </div>
    )
}

export default Watchhistory
