import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Allroutes from '../src/Allroutes'
import Navbar from './Component/Navbar/Navbar';
import Drawersidebar from './Component/Leftsidebar/Drawersidebar';
import Createeditchannel from './Pages/Channel/Createeditchannel';
import Videoupload from './Pages/Videoupload/Videoupload';
import { fetchAllChannel } from './action/channeluser';
import { useDispatch } from 'react-redux'
import { getAllVideos } from './action/video';
import { getAllComments } from './action/comment';
import { getAllHistory } from './action/history';
import { getAllLikedVideos } from './action/likevideo';
import { getAllWatchLater } from './action/watchlater';

function App() {
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({ display: "none" });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllChannel());
    dispatch(getAllVideos());
    dispatch(getAllComments());
    dispatch(getAllHistory());
    dispatch(getAllLikedVideos());
    dispatch(getAllWatchLater());
  }, [dispatch]);

  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({ display: "flex" });
    }
    else {
      setToggleDrawerSidebar({ display: "none" });
    }
  }

  const [editCreateChannelBtn, setEditCreateChannelBtn] = useState(false);
  const [videoUploadPage, setVideoUploadPage] = useState(false);


  return (
    <Router>
      {videoUploadPage && <Videoupload setVideoUploadPage={setVideoUploadPage} />}
      {editCreateChannelBtn &&
        <Createeditchannel setEditCreateChannelBtn={setEditCreateChannelBtn} />
      }
      <Navbar setEditCreateChannelBtn={setEditCreateChannelBtn} toggleDrawer={toggleDrawer} />
      <Drawersidebar toggleDrawer={toggleDrawer} toggleDrawerSidebar={toggleDrawerSidebar} />
      <Allroutes setEditCreateChannelBtn={setEditCreateChannelBtn} setVideoUploadPage={setVideoUploadPage} />
    </Router>
  )
}

export default App;
