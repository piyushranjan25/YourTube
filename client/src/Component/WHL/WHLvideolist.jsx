import React from "react";
import Showvideolist from "../Showvideolist/Showvideolist";

const WHLvideolist = ({ page, currentUser, videoList }) => {

    return (
        <>
            {currentUser ? (
                <>
                    {
                        videoList?.data?.filter(q => q?.viewer === currentUser).reverse().map(m => {
                            console.log(m);
                            return (
                                <>
                                    <Showvideolist videoId={m?.videoId} key={m?._id} />
                                </>
                            )
                        })
                    }
                </>
            ) : (
                <>
                    <h2 style={{ color: "white" }}>Please login to watch your {page}</h2>
                </>

            )}
        </>
    );
};

export default WHLvideolist;
