import React, { useState } from 'react'
import './Searchbar.css'
import { BsMicFill } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import Searchlist from './Searchlist'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [seacrhList, setSearchList] = useState(false)
    const titleArray = useSelector(state => state?.videoReducer)?.data?.filter(q => q?.videotitle.toUpperCase().includes(searchQuery.toUpperCase())).map(m => m?.videotitle)

    return (
        <>
            <div className="SearchBar_Container">
                <div className="SearchBar_Container2">
                    <div className="search_div">
                        <input type="text" className="iBox_SearchBar" placeholder="Search" onChange={e => setSearchQuery(e.target.value)}
                            value={searchQuery} onClick={e => setSearchList(true)} />
                        <Link to={`/search/${searchQuery}`}>
                            <FaSearch className="searchIcon_SearchBar" />
                        </Link>
                        <BsMicFill className="Mic_Searchbar" />
                        {searchQuery && seacrhList &&
                            <Searchlist setSearchQuery={setSearchQuery} titleArray={titleArray} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searchbar
