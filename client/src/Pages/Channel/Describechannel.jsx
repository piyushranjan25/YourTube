import React from 'react'
import { useSelector } from 'react-redux';
import { FaEdit, FaUpload } from 'react-icons/fa';
import './Describechannel.css'

const Describechannel = ({ cid, setVideoUploadPage, setEditCreateChannelBtn }) => {

  const channel = useSelector(state => state.channelReducer);
  const currentChannel = channel.filter((c) => c._id === cid)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);
  console.log(channel);

  return (
    <div className="container3_chanel">
      <div className="chanel_logo_chanel">
        <b>{currentChannel?.name.charAt(0).toUpperCase()}</b>
      </div>
      <div className="description_chanel">
        <b>{currentChannel?.name}</b>
        <p>{currentChannel?.desc}</p>
      </div>
      {currentUser?.result._id === currentChannel?._id && (
        <>
          <p className="editbtn_chanel" onClick={() => setEditCreateChannelBtn(true)}>
            <FaEdit />
            <b>Edit Channel</b>
          </p>
          <p className="uploadbtn_chanel" onClick={() => setVideoUploadPage(true)}>
            <FaUpload />
            <b>Upload Video</b>
          </p>
        </>
      )}
    </div>

  )
}

export default Describechannel
