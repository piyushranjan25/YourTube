import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './Videoupload.css'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { uploadVideo } from '../../action/video';

const Videoupload = ({ setVideoUploadPage }) => {
    const [title, setTitle] = useState("");
    const [videoFile, setVideoFile] = useState("");
    const [progress, setProgress] = useState(0);
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.currentUserReducer);

    const handleSetVideoFile = (e) => {
        setVideoFile(e.target.files[0])
    }

    const fileOption = {
        onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setProgress(percentage);
            if (percentage === 100) {
                setTimeout(function () { }, 3000);
                setVideoUploadPage(false);
            }
        },
    }

    const uploadVideoFile = () => {
        if (!title) {
            alert("Please enter a title of the video");
        }
        else if (!videoFile) {
            alert("Please attach a video file");
        }
        else if (videoFile.size > 1000000) {
            alert("Please attach video files less than 1kb");
        }
        else {
            const fileData = new FormData();
            fileData.append("file", videoFile);
            fileData.append("title", title);
            fileData.append("channel", currentUser?.result?._id);
            fileData.append("uploader", currentUser?.result?.name);
            console.log(videoFile);
            dispatch(uploadVideo({ fileData: fileData, fileOption: fileOption }));
        }
    }
    return (
        <div className="container_VidUpload">
            <input type="submit" name="text" value={"X"} onClick={() => setVideoUploadPage(false)} className="ibtn_x" />
            <div className="container2_VidUpload">
                <div className="ibox_div_vidupload">
                    <input type="text" maxLength={30} placeholder="Enter title of your video" className="ibox_vidupload" onChange={(e) => { setTitle(e.target.value) }} />
                    <label htmlFor="file" className="ibox_vidupload btn_vidUpload">
                        <input type="file" name="file" style={{ fontSize: "1rem" }} onChange={(e) => { handleSetVideoFile(e) }} className="ibox_vidupload" />
                    </label>
                </div>
                <div className="ibox_div_vidupload">
                    <input type="submit" value={"Upload"} onClick={() => uploadVideoFile()} className="ibox_vidupload btn_vidUpload" />
                    <div className="loader ibox_div_vidupload">
                        <CircularProgressbar
                            value={progress}
                            text={`${progress}`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: "butt",
                                textSize: "20px",
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255, 255, 255, ${progress / 100})`,
                                textColor: "#f88",
                                trailColor: "#adff2f",
                                backgroundColor: "#3e98c7",
                            })}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videoupload
