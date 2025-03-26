import History from "../Models/History.js";

export const historyController = async (req, res) => {
    const historyData = req.body;
    const addToHistory = new History(historyData);

    try {
        await addToHistory.save();
        res.status(200).json("Added to history...");
    }
    catch (error) {
        res.status(400).json(error.message);
        return;
    }
}

export const getAllHistory = async (req, res) => {
    try {
        const files = await History.find();
        res.status(200).send(files);
    }
    catch (error) {
        res.status(400).json(error.message);
        return;
    }
}

export const deleteHistory = async (req, res) => {
    const { userId: userId } = req.params;
    try {
        await History.deleteMany({
            viewer: userId,
        });
        res.status(200).json({ message: "Removed from history..." });
    }
    catch (error) {
        res.status(400).json(error.message);
        return;
    }
}