import React, { useEffect, useState } from "react";
import {
    User,
    Mail,
    LogOut,
    Edit2,
    Edit3,
    Trash2,
} from "lucide-react";
import FallbackPhoto from "./../../assets/FallBackUserImg.png";
import Navbarnew from "../Navb";
import Footer from "../Footer";
import axios from "axios";
import { toast } from "react-hot-toast";
const Profile = () => {
    const [user, setUser] = useState();
    const [editOpen, setEditOpen] = useState(false);
    const [editData, setEditData] = useState({ fullname: "", email: "" });
    useEffect(() => {
        const userData = localStorage.getItem("User") || localStorage.getItem("token");
        if (userData) {
            setUser(JSON.parse(userData));
            setEditData({
                fullname: userData.fullname || userData.displayName || "",
                email: userData.email || "",
            });
        }
    }, []);

    // Open modal and set initial values
    const handleEditProfile = () => {
        setEditData({
            fullname: user?.fullname || user?.displayName || "",
            email: user?.email || "",
        });
        setEditOpen(true);
    };

    // Handle input changes
    const handleEditChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    // Submit updated profile
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/update-profile/${user._id}`,
                editData,

                { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
            );
            toast.success("Profile updated!");
            setUser({ ...user, ...editData });
            localStorage.setItem("User", JSON.stringify({ ...user, ...editData }));
            setEditOpen(false);
        } catch (err) {
            console.log(err.response?.data?.message || err);
            toast.error(err.response?.data?.message || "Update failed");
        }
    };

    return (
        <>
            <Navbarnew />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800 flex flex-col justify-center items-center py-8 px-2">
                <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl mt-8 shadow-xl p-6">
                    <div className="flex flex-col items-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900 flex items-center justify-center text-3xl font-bold text-fuchsia-700 dark:text-white mb-2 overflow-hidden">
                            {user?.photoURL ? (
                                <img
                                    src={user.photoURL}
                                    alt="Profile"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            ) : (
                                // (user?.fullname || user?.displayName || "U")[0]
                                <img
                                    src={FallbackPhoto}
                                    alt="Profile"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            )}
                        </div>
                        <div className="text-xl font-semibold text-gray-900 dark:text-white">{user?.fullname || user?.displayName}</div>
                        <div className="text-xs text-gray-400 mt-2 py-1 px-3 bg-gray-800 rounded-md "> Joined on : {" "}
                            {user?.createdAt ? new Date(user.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : ""}.
                        </div>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl relative p-4 mb-6">
                        <div className="flex items-center gap-3 mb-3">
                            <User className="w-5 h-5 text-fuchsia-600" />
                            <span className="text-gray-800 dark:text-gray-200">{user?.fullname || user?.displayName}</span>
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                            <Mail className="w-5 h-5 text-blue-600" />
                            <span className="text-gray-800 dark:text-gray-200">{user?.email}</span>
                        </div>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-6 flex flex-col gap-3">
                        <button className="w-full flex items-center justify-center gap-2 py-2 rounded-xl dark:text-white font-semibold text-blue-700  bg-blue-100 hover:bg-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 transition"
                            onClick={handleEditProfile}
                        ><Edit2 className="w-5 h-5" />Edit Profile</button>
                        <button className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-red-600 font-semibold bg-red-50 dark:bg-red-900 hover:bg-red-100 dark:hover:bg-red-800 transition"
                        // onClick={handleDeleteAccount}
                        ><Trash2 className="w-5 h-5" />Delete Account</button>
                    </div>
                    <button className="w-full py-3 rounded-xl dark:text-white font-semibold text-fuchsia-700  bg-fuchsia-100 dark:bg-fuchsia-900 hover:bg-fuchsia-200 dark:hover:bg-fuchsia-800 transition mb-2"
                    // onClick={onLogout}
                    ><LogOut className="inline-block mr-2 w-5 h-5" />Sign out
                    </button>
                </div>
                {editOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-xs">
                            <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Edit Profile</h2>
                            <form onSubmit={handleEditSubmit} className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    name="fullname"
                                    value={editData.fullname}
                                    onChange={handleEditChange}
                                    placeholder="Full Name"
                                    className="px-3 py-2 rounded border border-gray-300 dark:bg-gray-900 dark:text-white"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={editData.email}
                                    onChange={handleEditChange}
                                    placeholder="Email"
                                    className="px-3 py-2 rounded border border-gray-300 dark:bg-gray-900 dark:text-white"
                                    required
                                />
                                <div className="flex gap-2 justify-end">
                                    <button
                                        type="button"
                                        onClick={() => setEditOpen(false)}
                                        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};



const ProfileDesktop = () => {
    const [user, setUser] = useState();
    const [editOpen, setEditOpen] = useState(false);
    const [editData, setEditData] = useState({ fullname: "", email: "" });
    useEffect(() => {
        const userData = localStorage.getItem("User") || localStorage.getItem("token");
        if (userData) {
            setUser(JSON.parse(userData));
            setEditData({
                fullname: userData.fullname || userData.displayName || "",
                email: userData.email || "",
            });
        }
    }, []);

    // Open modal and set initial values
    const handleEditProfile = () => {
        setEditData({
            fullname: user?.fullname || user?.displayName || "",
            email: user?.email || "",
        });
        setEditOpen(true);
    };

    // Handle input changes
    const handleEditChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    // Submit updated profile
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/update-profile/${user._id}`,
                editData,

                { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
            );
            toast.success("Profile updated!");
            setUser({ ...user, ...editData });
            localStorage.setItem("User", JSON.stringify({ ...user, ...editData }));
            setEditOpen(false);
        } catch (err) {
            console.log(err.response?.data?.message || err);
            toast.error(err.response?.data?.message || "Update failed");
        }
    };



    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("User") || localStorage.getItem("token"));
        if (userData) setUser(userData);
    }, []);

    return (
        <>
            <Navbarnew />
            <section className="min-h-screen bg-gradient-to-br from-gray-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center py-12 px-4">
                <div className="w-full max-w-5xl bg-gray-400 dark:bg-gray-900 rounded-2xl shadow-2xl p-10 mt-10 flex flex-row  gap-10">

                    <div className="flex flex-col items-center w-1/3 border-r border-gray-200 dark:border-gray-800 pr-8">
                        <div className="w-28 h-28 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900 flex items-center justify-center text-4xl font-bold text-fuchsia-700 dark:text-white mb-4 overflow-hidden">
                            {user?.photoURL ? (
                                <img
                                    src={user.photoURL}
                                    alt="Profile"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            ) : (
                                // (user?.fullname || user?.displayName || "U")[0]
                                <img src={FallbackPhoto}
                                    alt="Profile"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            )}
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{user?.fullname || user?.displayName}</div>
                        <div className="text-xs text-gray-400 mt-2 py-1 px-3 bg-gray-800 rounded-md">
                            Joined on:{" "}
                            {user?.createdAt
                                ? new Date(user.createdAt).toLocaleDateString(undefined, {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })
                                : ""}
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-8">
                        <div className="bg-gray-600 dark:bg-gray-800 rounded-xl relative p-6 mb-2">
                            <div className="flex items-center gap-3 border-b-2 border-spacing-2 border-gray-500 dark:border-gray-600 mb-4">
                                <User className="w-5 h-5 text-fuchsia-300 dark:text-fuchsia-600" />
                                <span className="text-gray-50 text-lg dark:text-gray-200">{user?.fullname || user?.displayName}</span>
                            </div>
                            <div className="flex items-center gap-3 border-b-2 border-spacing-2 border-gray-500 dark:border-gray-600 mb-4">
                                <Mail className="w-5 h-5 text-blue-300 dark:text-blue-500" />
                                <span className="text-gray-50 text-lg dark:text-gray-200">{user?.email}</span>
                            </div>

                        </div>
                        <div className="flex gap-4">
                            <button onClick={handleEditProfile}
                                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl dark:text-white font-semibold text-blue-700  bg-blue-100 hover:bg-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 transition"
                            ><Edit2 className="w-5 h-5" />
                                Edit Profile
                            </button>
                            <button
                                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl dark:text-white font-semibold text-fuchsia-700  bg-fuchsia-100 dark:bg-fuchsia-900 hover:bg-fuchsia-200 dark:hover:bg-fuchsia-800 transition"
                            ><LogOut className="w-5 h-5" />
                                Sign out
                            </button>
                            <button
                                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-red-700  bg-red-100 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-800 transition"
                            ><Trash2 className="w-5 h-5" />
                                Delete Account
                            </button>

                        </div>
                    </div>
                </div>

                {editOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-xs">
                            <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Edit Profile</h2>
                            <form onSubmit={handleEditSubmit} className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    name="fullname"
                                    value={editData.fullname}
                                    onChange={handleEditChange}
                                    placeholder="Full Name"
                                    className="px-3 py-2 rounded border border-gray-300 dark:bg-gray-900 dark:text-white"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={editData.email}
                                    onChange={handleEditChange}
                                    placeholder="Email"
                                    className="px-3 py-2 rounded border border-gray-300 dark:bg-gray-900 dark:text-white"
                                    required
                                />
                                <div className="flex gap-2 justify-end">
                                    <button
                                        type="button"
                                        onClick={() => setEditOpen(false)}
                                        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white"
                                    >Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                                    >Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </section>
            <Footer />
        </>
    );
};

export default Profile;
export { ProfileDesktop };