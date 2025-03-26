import videofiles from "../Models/Videofile.js";

export const uploadVideo = async (req, res) => {
    if (req.file === undefined) {
        res.status(404).json({ message: "Please upload a mp.4 video file only" });
    }
    else {
        try {
            const file = new videofiles({
                videotitle: req.body.title,
                filename: req.file.originalname,
                filepath: req.file.path,
                filetype: req.file.mimetype,
                filesize: req.file.size,
                videochannel: req.body.channel,
                uploader: req.body.uploader
            });
            console.log(file);
            await file.save();
            res.status(200).send("File Uploaded Successfully");
        }
        catch (error) {
            res.status(404).json(error.message);
            return;
        }
    }
}

export const getAllVideos = async (req, res) => {
    try {
        const files = await videofiles.find();
        res.status(200).send(files);
    }
    catch (error) {
        res.status(404).json(error.message);
        return;
    }
}