import React from 'react'
import Describechannel from './Describechannel'
import Leftsidebar from '../../Component/Leftsidebar/Leftsidebar'
import Showvideogrid from '../../Component/Showvideogrid/Showvideogrid'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Channel = ({ setEditCreateChannelBtn, setVideoUploadPage }) => {

  const { cid } = useParams();
  const vids = useSelector(state => state.videoReducer)?.data?.filter(q => q?.videochannel === cid).reverse();

  return (
    <div className="container_Pages_App">
      <Leftsidebar />
      <div className="container2_Pages_App">
        <Describechannel cid={cid} setVideoUploadPage={setVideoUploadPage} setEditCreateChannelBtn={setEditCreateChannelBtn} />
        <Showvideogrid vids={vids} />
      </div>
    </div>
  )
}

export default Channel
