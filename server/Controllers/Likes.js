import videofiles from "../Models/Videofile.js";
import mongoose from "mongoose";

export const likeVideoController = async (req, res) => {
    const { id: _id } = req.params;
    const { Like } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Video Unavailable...");
    }
    try {
        const updateLike = await videofiles.findByIdAndUpdate(
            _id,
            {
                $set: { "likes": Like }
            }
        )
        res.status(200).json(updateLike);
    }
    catch (error) {
        res.status(404).json("error", error);
    }
}