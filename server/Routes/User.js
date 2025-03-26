import express from 'express'
import { login } from '../Controllers/Auth.js'
import { updateChannelData, getAllChannels } from '../Controllers/Channel.js';

const routes = express.Router();
routes.post("/login", login);
routes.patch("/update/:id", updateChannelData);
routes.get("/getallchannel", getAllChannels);

export default routes;