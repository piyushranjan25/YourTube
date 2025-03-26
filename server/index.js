import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import userRoutes from './Routes/User.js'
import videoRoutes from './Routes/Video.js'
import commentRoutes from './Routes/Comment.js'
import path from 'path';


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use('/uploads', express.static(path.join('Uploads')));

app.get("/", (req, res) => {
    res.send("YourTube is working")
});

app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/video", videoRoutes);
app.use("/comment", commentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL).then(() => {
    console.log("MongoDB Database connected")
}).catch((error) => {
    console.log(error)
});