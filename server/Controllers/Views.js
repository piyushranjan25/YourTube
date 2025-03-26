import videofiles from "../Models/Videofile.js";
import mongoose from "mongoose";

export const viewsController = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Video Unavailable...");
    }
    try {
        const files = await videofiles.findById(_id);
        const Views = files.views;
        const updateView = await videofiles.findByIdAndUpdate(
            _id,
            {
                $set: { views: Views + 1 }
            }
        );
        res.status(200).json(updateView);
    }
    catch (error) {
        res.status(404).json("error", error);
    }
}