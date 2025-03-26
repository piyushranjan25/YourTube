import mongoose from 'mongoose';

const videoFileSchema = new mongoose.Schema(
    {
        videotitle: {
            type: String,
            require: true,
        },
        filename: {
            type: String,
            require: true,
        },
        filetype: {
            type: String,
            require: true,
        },
        filepath: {
            type: String,
            require: true,
        },
        filesize: {
            type: String,
            require: true,
        },
        videochannel: {
            type: String,
            require: true,
        },
        likes: {
            type: Number,
            default: 0,
        },
        views: {
            type: Number,
            default: 0,
        },
        uploader: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Videofile", videoFileSchema);