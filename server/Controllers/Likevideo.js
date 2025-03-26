import Likevideo from "../Models/Likevideo.js";

export const likedVideoController = async (req, res) => {
    const likedVideoData = req.body;
    const addToLikedVideo = new Likevideo(likedVideoData);

    try {
        await addToLikedVideo.save();
        res.status(200).json("Added to liked videos...");
    }
    catch (error) {
        res.status(400).json(error.message);
        return;
    }
}

export const getAllLikedVideos = async (req, res) => {
    try {
        const files = await Likevideo.find();
        res.status(200).send(files);
    }
    catch (error) {
        res.status(400).json(error.message);
        return;
    }
}

export const deleteLikedVideo = async (req, res) => {
    const { videoId: videoId, viewer: viewer } = req.params;

    try {
        await Likevideo.findOneAndDelete({
            videoId: videoId,
            viewer: viewer,
        });
        res.status(200).json({ message: "Removed from liked videos..." });
    }
    catch (error) {
        res.status(400).json(error.message);
        return;
    }
}