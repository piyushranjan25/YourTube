import Watchlater from "../Models/Watchlater.js";

export const watchLaterController = async (req, res) => {
    const watchLaterData = req.body;
    const addToWatchLater = new Watchlater(watchLaterData);

    try {
        await addToWatchLater.save();
        res.status(200).json("Added to watch later...");
    }
    catch (error) {
        res.status(400).json(error.message);
        return;
    }
}

export const getAllWatchLater = async (req, res) => {
    try {
        const files = await Watchlater.find();
        res.status(200).send(files);
    }
    catch (error) {
        res.status(400).json(error.message);
        return;
    }
}

export const deleteWatchLater = async (req, res) => {
    const { videoId: videoId, viewer: viewer } = req.params;

    try {
        await Watchlater.findOneAndDelete({
            videoId: videoId,
            viewer: viewer,
        });
        res.status(200).json({ message: "Removed from watch later..." });
    }
    catch (error) {
        res.status(400).json(error.message);
        return;
    }
}
