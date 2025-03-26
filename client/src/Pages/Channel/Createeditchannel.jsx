import React, { useState } from 'react'
import './Createeditchannel.css'
import { updateChannelData } from '../../action/channeluser';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../action/auth'


const Createeditchannel = ({ setEditCreateChannelBtn }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.currentUserReducer);

    const [name, setName] = useState(currentUser?.result.name)
    const [desc, setDesc] = useState(currentUser?.result?.desc)

    const handleSubmit = () => {
        if (!name) {
            alert("Please enter name")
        }
        else if (!desc) {
            alert("Please enter Description")
        }
        else {
            dispatch(updateChannelData(currentUser?.result._id, { name: name, desc: desc }));
            setEditCreateChannelBtn(false);
            setTimeout(() => {
                dispatch(login({ email: currentUser.result.email }))
            }, 5000);
        }
    }

    return (
        <div className="container_CreateEditChanel">
            <input type="submit" name="text" value={"X"} className="ibtn_x" onClick={() => setEditCreateChannelBtn(false)} />
            <div className="container2_CreateEditChanel">
                <h1>{currentUser?.result?.name ? <>Edit</> : <>Create</>} Your Channel</h1>
                <input type="text" placeholder="Enter your channel name" name="text" value={name} onChange={(e) => setName(e.target.value)} className="ibox" />
                <textarea type="text" rows={15} placeholder="Enter channel description" className="ibox" value={desc} onChange={(e) => setDesc(e.target.value)} id=""></textarea>
                <input type="submit" value={"submit"} onClick={() => handleSubmit()} className="ibtn" />
            </div>
        </div>
    )
}

export default Createeditchannel
