import Link from "../model/Link.js";
import { isUrlSafe } from "../utils/checkUrlSafety.js";
import User from "./../model/Users.js"

const postLink = async (req, res) => {
    try {
        const { target, title, slug, view, user } = req.body;

        const link = new Link({ target, title, slug, view, user });
        // Check if URL starts with https
        if (!link.target.startsWith("https://")) {
            return res.status(400).json({
                success: false,
                message: "Invalid target URL. It must start with https://"
            });
        }

        // Check if URL is safe
        const safe = await isUrlSafe(target);
        if (!safe) {
            return res.status(400).json({
                success: false,
                message: "The provided URL is unsafe or may contain malware."
            });
        }
        // Check if slug is already taken
        const existing = await Link.findOne({ slug });
        if (existing) {
            return res.status(400).json({
                success: false,
                message: "Slug already exists. Please choose another one."
            });
        }
        const savedLink = await link.save();
        res.json({
            success: true,
            data: savedLink,
            message: "Link saved successfully"
        });
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
            return res.status(404).json({
                success: false,
                message: "Link not found"
            })
        }

        link.view = link.view + 1;
        await link.save();
        return res.redirect(link.target)

    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }

}

const getlinks = async (req, res) => {
    try {
        const { userId } = req.query;
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "User  ID is required",
                data: null,
            });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User  not found",
                data: null,
            });
        }

        const links = await Link.find({ user: user._id })
            .sort({ createdAt: -1 })
            .select("_id title slug target view createdAt");

        if (links.length === 0) {
            return res.status(200).json({
                success: true,
                message: "No links found, create links to get started",
                data: [],
            });
        }

        res.json({
            success: true,
            data: links,
            message: "Links fetched successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: error.message,
        });
        console.error(error);
    }
};
//delete link
const deleteLink = async (req, res) => {
    try {
        const { id } = req.params;


        const link = await Link.findById(id);
        if (!link) {
            return res.status(404).json({
                success: false,
                message: "Link not found",
            });
        }

        await Link.findByIdAndDelete(id);

        res.json({
            success: true,
            message: "Link deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const updateLink = async (req, res) => {
    try {
        const { id } = req.params;
        const { target, title, slug } = req.body;
        const link = await Link.findById(id);
        if (!link) {
            return res.status(404).json({
                success: false,
                message: "Link not found",
                data: null,
            });
        }

        link.target = target;
        link.title = title;
        link.slug = slug;
        await link.save();
        res.json({
            success: true,
            message: "Link updated successfully",
            data: link,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: error.message,
        });
    }
};

export {
    postLink,
    getSlugRedic,
    getlinks,
    deleteLink,
    updateLink
}