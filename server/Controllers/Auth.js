import users from '../Models/Auth.js'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
    const { email } = req.body;

    try {
        const extingUser = await users.findOne({ email });
        if (!extingUser) {
            try {
                const newUser = await users.create({ email });
                const token = jwt.sign({
                    email: newUser.email, _id: newUser._id
                }, process.env.JWT_SECRET, { expiresIn: "1h" });
                res.status(200).json({ result: newUser, token });
            }
            catch (error) {
                res.status(500).json({ mess: "Something went wrong..." });
                return;
            }
        }
        else {
            const token = jwt.sign({
                email: extingUser.email, _id: extingUser._id
            }, process.env.JWT_SECRET, { expiresIn: "1h" });
            res.status(200).json({ result: extingUser, token });
        }
    }
    catch (error) {
        res.status(500).json({ mess: "Something went wrong..." })
        return;
    }
}