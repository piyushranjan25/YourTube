import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Search from './Pages/Search/Search'
import Videopage from './Pages/Videopage/Videopage'
import Channel from './Pages/Channel/Channel'
import Library from './Pages/Library/Library'
import Likedvideo from './Pages/Likedvideo/Likedvideo'
import Watchhistory from './Pages/Watchhistory/Watchhistory'
import Watchlater from './Pages/Watchlater/Watchlater'
import Yourvideos from './Pages/Yourvideos/Yourvideos'

const Allroutes = ({ setEditCreateChannelBtn, setVideoUploadPage }) => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search/:searchQuery' element={<Search />} />
      <Route path='/videopage/:vid' element={<Videopage />} />
      <Route path='/channel/:cid' element={<Channel setEditCreateChannelBtn={setEditCreateChannelBtn} setVideoUploadPage={setVideoUploadPage} />} />
      <Route path='/Library' element={<Library />} />
      <Route path='/Likedvideo' element={<Likedvideo />} />
      <Route path='/Watchhistory' element={<Watchhistory />} />
      <Route path='/Watchlater' element={<Watchlater />} />
      <Route path='/Yourvideos' element={<Yourvideos />} />

    </Routes>
  )
}

export default Allroutes
