import Link from "../model/Link.js";
import User from "./../model/Users.js"

const postLink = async (req, res) => {
    try {
        const { target, title, slug, view, user } = req.body

        const link = new Link({ target, title, slug, view, user })


        if (link.target.includes("https")) {
            const savedLink = await link.save()
            res.json({
                success: true,
                data: savedLink,
                message: "Link saved successfully"
            })
        }
        else {
            res.status(400).json({
                success: false,
                message: "Invalid target URL. It must start with http"
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: error.message
        })
        console.error(error)

    }

}

const getSlugRedic = async (req, res) => {
    try {
        const { slug } = req.params;
        const link = await Link.findOne({ slug });

        if (!link) {
            return res.json({
                success: false,
                message: "Link not found"
            })
        }

        link.view = link.view + 1;
        await link.save();
        res.redirect(link.target)

        res.json({
            success: true,
            slug: slug,
            message: "redirecting to target"
        })

    } catch (error) {
        console.error(error)
    }

}

const getlinks = async (req, res) => {
    try {
        const { userId } = req.query
        const user = await User.findById(userId)
        if (!user) {
            return res.json({
                success: false,
                message: "User not found",
                data: null
            })
        }
        const links = await Link.find({ user: user._id }).sort({ createdAt: -1 })
        res.json({
            success: true,
            data: links,
            message: "Links fetched successfully"
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: error.message
        })
        console.error(error);

    }
}



export {
    postLink,
    getSlugRedic,
    getlinks
}