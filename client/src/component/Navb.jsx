import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icon from './../assets/favicon.png'
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { LogOut, Menu } from "lucide-react";
import FallbackPhoto from '../assets/FallBackUserImg.png'

const Navbarnew = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const firebaseConfig = {
        apiKey: import.meta.env.VITE_APIKEY,
        authDomain: import.meta.env.VITE_AUTHDOMAIN,
        projectId: import.meta.env.VITE_PROJECTID,
        storageBucket: "ziplinkss.firebasestorage.app",
        messagingSenderId: import.meta.env.VITE_MSGID,
        appId: import.meta.env.VITE_APPID,
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleSignIn = () => {
        const storedUser = localStorage.getItem('token') || localStorage.getItem('User');
        if (!storedUser) {
            navigate('/user-login');
        }
    };
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem('firebase:authUser:AIzaSyBeIaQdHnNAgERgtfbpHENvFAe5-GjY7wc:[DEFAULT]'); // Clear user data
                navigate('/user-login');
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
            });
        localStorage.removeItem('User');
        localStorage.removeItem('token');
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('User') || localStorage.getItem('token');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <nav className={`w-full justify-between fixed z-20 top-0 start-0  dark:bg-gray-900  bg-white  ${window.scrollY > 0 ? 'shadow-md' : ''} `}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between transition ease-in-out mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Icon} className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">URL Shortner</span>
                </Link>
                {/* Navigation Links - Desktop */}
                <div className="hidden md:flex  space-x-6 dark:text-white text-gray-700 text-sm">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                        <li>
                            <Link to="/" className={`block py-2 px-3 ${window.location.pathname === '/' ? 'md:text-blue-700 md:dark:text-blue-500' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`} aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className={`block py-2 px-3 ${window.location.pathname === '/about' ? 'md:text-blue-700 md:dark:text-blue-500 ' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>About</Link>
                        </li>
                        <li>
                            <Link to="/service" className={`block py-2 px-3 ${window.location.pathname === '/service' ? 'md:text-blue-700 md:dark:text-blue-500' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Services</Link>
                        </li>

                        <li>
                            <Link to="/contact" className={`block py-2 px-3 ${window.location.pathname === '/contact' ? 'md:text-blue-700 md:dark:text-blue-500' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Contact</Link>
                        </li>
                        <li>
                            <Link to="/help" className={`block py-2 px-3 ${window.location.pathname === '/help' ? 'md:text-blue-700 md:dark:text-blue-500' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Help</Link>
                        </li>
                    </ul>
                </div>

                {/* Profile and Hamburger - Right Section */}
                <div className='space-x-3 inline-flex items-center rtl:space-x-reverse'>
                    {user != null ?
                        <div className="flex items-center cursor-pointer space-x-4">
                            {/* Profile Dropdown */}
                            <div className="relative ">
                                {user !== null ? <img src={user?.photoURL || FallbackPhoto} onClick={() => setIsOpen(!isOpen)} className="w-8 h-8 mx-auto rounded-full" alt="user photo" />
                                    :
                                    <svg className="w-8 h-8 mx-auto" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>}

                                {isOpen && (
                                    <div role="menu" className="absolute dark:bg-gray-800 dark:text-white right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 py-2">
                                        <div className="px-4 py-3">
                                            <span id='userInfo' className="block text-sm text-gray-900 dark:text-white"> {user ? user?.displayName || user.fullname : "Guest"}</span>
                                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400"> {user ? user?.email || "No Email" : "Guest"}</span>
                                        </div>
                                        <Link to="/user/profile" role="menuitem"
                                            className="block px-4 py-2 text-sm  hover:bg-gray-600"
                                        >My profile
                                        </Link>
                                        <Link to="/dashboard" className="block mx-auto px-4 py-2 text-sm text-gray-700 hover:bg-gray-600 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
                                        <div className="border-t pt-3 my-2 ">
                                            {user != null ?
                                                <button className="flex btn justify-center mx-auto items-center px-2 py-2 text-sm text-red-600 hover:bg-gray-600 rounded border border-blue-600 dark:text-gray-300 dark:hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-36" id='signOut' onClick={handleSignOut}> <LogOut className="w-4 h-4 mr-2" /> Logout</button>
                                                : null}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div> : (<div className="flex items-center">
                            <button className="block mx-auto px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-blue-600 rounded border border-blue-600 dark:text-gray-200 dark:hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" id='sign-in' onClick={handleSignIn}>Log in</button>
                        </div>)
                    }
                    {/* Hamburger Icon - Mobile */}
                    <div className="md:hidden inlie-block">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            <Menu className="w-6 h-6 dark:text-white text-gray-700" />
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute animate__animated animate__backInDown top-16 right-0 w-1/2 bg-white dark:bg-gray-800 shadow-md rounded-md z-40 md:hidden">
                        <ul className="flex flex-col font-medium rounded-lg rtl:space-y-reverse md:mt-0 md:border-0 ">
                            <li>
                                <Link to="/" className={`block py-2 px-3 rounded ${window.location.pathname === '/'
                                    ? 'text-blue-700 dark:text-blue-500'
                                    : 'hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600'
                                    }`} aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/service" className={`block py-2 px-3 rounded ${window.location.pathname === '/service'
                                    ? 'text-blue-700 dark:text-blue-500'
                                    : 'hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600'
                                    }`} aria-current="page">Services</Link>
                            </li>
                            <li>
                                <Link to="/about" className={`block py-2 px-3 ${window.location.pathname === '/about' ? 'text-blue-700 dark:text-blue-500'
                                    : 'hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600'
                                    }`} aria-current="page">About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className={`block py-2 px-3 ${window.location.pathname === '/contact' ? 'text-blue-700 dark:text-blue-500'
                                    : 'hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600'
                                    }`} aria-current="page">Contact</Link>
                            </li>
                            <li>
                                <Link to="/help" className={`block py-2 px-3 ${window.location.pathname === '/help' ? 'text-blue-700 dark:text-blue-500'
                                    : 'hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600'
                                    }`} aria-current="page">Help</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
export default Navbarnew;
