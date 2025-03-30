import User from "../model/Users.js";
import bcryptjs from "bcryptjs";


const postSingup = async (req, res) => {


    try {
        const { fullname, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.json({
                success: false,
                message: "User already exists",
                error: "Email already in use"
            })
        }

        const hashpassword = await bcryptjs.hash(password, 10);
        const user = new User({ fullname, email, password: hashpassword });
        const saveduser = await user.save()
        res.json({
            success: true,
            message: "Signup Done Successfully",
            data: saveduser
        })


    }
    catch (e) {
        console.error(e)
        res.json({
            success: false,
            message: e.message,
            data: null
        })
    }

}

const postlogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User  not found" });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Incorrect password" });
        }

        res.json({ success: true, message: "Login Successfully", data: user });
    } catch (e) {
        console.error(e);
        res.status(400).json({ success: false, message: "Invalid Email or Password" });
    }
};
export {
    postSingup,
    postlogin
}