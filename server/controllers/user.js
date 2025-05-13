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
            message: "Signup Successfully",
            data: saveduser
        })


    }
    catch (e) {
        console.error(e)
<<<<<<< HEAD
        res.json({
            success: false,
            message: e.message,
            data: null
        })
=======
        // res.json({
        //     success: false,
        //     message: e.message,
        //     data: null
        // })
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32
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

const postGoogleSignin = async (req, res) => {
    const { email, fullname } = req.body;

    try {
        // Check if the user already exists by email
        let user = await User.findOne({ email });

        if (!user) {
            // If the user doesn't exist, create a new user
            user = new User({
                email,
                fullname,
                password: null,  // No password needed for Google users
            });

            const savedUser = await user.save();
            return res.json({
                success: true,
                message: "User created and logged in successfully",
                data: savedUser,
            });
        }

        // If the user exists, return their data
        res.json({
            success: true,
            message: "Logged in successfully",
            data: user,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again.",
        });
    }
};
export {
    postSingup,
    postlogin,
    postGoogleSignin
}