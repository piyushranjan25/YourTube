import express from 'express';
import { likeVideoController } from '../Controllers/Likes.js';
import { viewsController } from '../Controllers/Views.js';
import { uploadVideo, getAllVideos } from '../Controllers/Video.js';
import { historyController, getAllHistory, deleteHistory } from '../Controllers/History.js';
import { watchLaterController, deleteWatchLater, getAllWatchLater } from '../Controllers/Watchlater.js';
import { likedVideoController, getAllLikedVideos, deleteLikedVideo } from '../Controllers/Likevideo.js';
import upload from '../Helper/Filehelper.js';
import auth from '../Middleware/Auth.js'

const routes = express.Router();

routes.post("/uploadvideo", auth, upload.single("file"), uploadVideo);

routes.get("/getvideos", getAllVideos);
routes.patch("/like/:id", auth, likeVideoController);
routes.patch("/views/:id", viewsController);

routes.post("/history", auth, historyController);
routes.get("/getallhistory", getAllHistory);
routes.delete("/deletehistory/:userId", auth, deleteHistory);

routes.post("/watchlater", auth, watchLaterController);
routes.get("/getallwatchlater", getAllWatchLater);
routes.delete("/deletewatchlater/:videoId/:viewer", auth, deleteWatchLater);

routes.post("/likedvideo", auth, likedVideoController);
routes.get("/getalllikedvideos", getAllLikedVideos);
routes.delete("/deletelikedvideo/:videoId/:viewer", auth, deleteLikedVideo);

export default routes;

