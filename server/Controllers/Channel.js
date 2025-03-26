import mongoose from 'mongoose'
import users from '../Models/Auth.js'

export const updateChannelData = async (req, res) => {
    const { id: _id } = req.params;
    const { name, desc } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).send("Channel Unavailable...");
    }

    try {
        const updateData = await users.findByIdAndUpdate(
            _id,
            {
                $set: {
                    name: name,
                    desc: desc,
                },
            },
            { new: true }
        );
        res.status(200).json(updateData);
    }
    catch (error) {
        res.status(405).json({ message: error.message });
        return;
    }
}

export const getAllChannels = async (req, res) => {
    try {
        const allChannels = await users.find();
        const allChannelData = [];
        allChannels.forEach((channel) => {
            allChannelData.push({
                _id: channel._id,
                name: channel.name,
                email: channel.email,
                desc: channel.desc
            });
        })
        console.log("Processed Channels Data:", allChannelData);
        res.status(200).json(allChannelData)
    }
    catch (error) {
        res.status(405).json({ message: error.message });
        return;
    }
}