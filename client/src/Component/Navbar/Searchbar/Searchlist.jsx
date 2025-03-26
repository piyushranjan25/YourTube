import React from 'react'
import {FaSearch} from 'react-icons/fa'
const Searchlist = ({setSearchQuery, titleArray}) => {
  return (
    <>
        <div className="Container_SearchList">
            {titleArray.map(m=>{
                return <p key={m} onClick={e=>setSearchQuery(m)} className="titleItem">
                    <FaSearch /> {m}
                </p>
            })}
        </div>
    </>
  )
}

export default Searchlist
