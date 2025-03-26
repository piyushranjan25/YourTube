import mongoose from 'mongoose'

const watchLaterVideoSchema = mongoose.Schema({
    videoId: { type: String, require: true },
    viewer: { type: String, require: true },
    likedOn: { type: Date, default: Date.now }
});

export default mongoose.model("Watchlater", watchLaterVideoSchema);