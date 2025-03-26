import React from 'react'
import Leftsidebar from '../../Component/Leftsidebar/Leftsidebar'
import Showvideogrid from '../../Component/Showvideogrid/Showvideogrid'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Search = () => {
    const { searchQuery } = useParams();

    const vids = useSelector(state => state?.videoReducer)?.data?.filter(q => q?.videotitle.toUpperCase().includes(searchQuery.toUpperCase()));

    return (
        <div className="container_Pages_App">
            <Leftsidebar />
            <div className="container2_Pages_App">
                <Showvideogrid vid={vids} />
            </div>
        </div>
    )
}

export default Search
