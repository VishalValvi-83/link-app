import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icon from './../assets/favicon.png'
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    // databaseURL: import.meta.env.VITE_DBURL,
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
        window.location.reload(); // Reload the page to reflect the sign-out
      })
      .catch((error) => {
        console.error(error);
      });
    // Clear user data from local storage
    localStorage.removeItem('User');
    localStorage.removeItem('token');
  };

  const fallbackPhoto = "https://avatar.iran.liara.run/public/47"; // Default profile photo

  useEffect(() => {
    // const storedUser = localStorage.getItem('firebase:authUser:AIzaSyBeIaQdHnNAgERgtfbpHENvFAe5-GjY7wc:[DEFAULT]');
    const storedUser = localStorage.getItem('User') || localStorage.getItem('token');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <nav className={`bg-white fixed w-full z-20 top-0 start-0 ${window.scrollY > 0 ? 'border-b border-gray-200' : ''} dark:bg-gray-900`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Icon} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ZipLink</span>
          </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {user != null ?
              (<><button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <div className="w-8 h-8 rounded-full">
                  {user !== null ? <img src={user?.photoURL || fallbackPhoto} className="w-8 h-8 mx-auto rounded-full" alt="user photo" />
                    :
                    <svg className="w-8 h-8 mx-auto" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>}
                </div>
              </button>
                {/* Dropdown menu */}
                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                  <div className="px-4 py-3">
                    <span id='userInfo' className="block text-sm text-gray-900 dark:text-white"> {user ? user?.displayName || user.fullname : "Guest"}</span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400"> {user ? user?.email || "No Email" : "Guest"}</span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <Link to="/dashboard" className="block mx-auto px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
                    </li>
                    {user != null ?
                      <li>
                        <button className="block mx-auto px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-blue-600 rounded border border-blue-600 dark:text-gray-200 dark:hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" id='signOut' onClick={handleSignOut}>Sign out</button>
                      </li> : null}
                  </ul>

                </div>
                <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                </button> </>)

              :
              (<div className="flex items-center space-x-3 rtl:space-x-reverse">
                <button className="block mx-auto px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-blue-600 rounded border border-blue-600 dark:text-gray-200 dark:hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" id='sign-in' onClick={handleSignIn}>Log in</button>
                <Link className="px-4 py-2 text-white bg-blue-800 rounded-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-300" to={"/user-signup"}>
                  Get Started
                </Link>
              </div>)
            }
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/" className={`block py-2 px-3 ${window.location.pathname === '/' ? 'md:text-blue-700 md:dark:text-blue-500' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`} aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/service" className={`block py-2 px-3 ${window.location.pathname === '/service' ? 'md:text-blue-700 md:dark:text-blue-500' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Services</Link>
              </li>
              <li>
                <Link to="/about" className={`block py-2 px-3 ${window.location.pathname === '/about' ? 'md:text-blue-700 md:dark:text-blue-500 ' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>About</Link>
              </li>
              <li>
                <Link to="/contact" className={`block py-2 px-3 ${window.location.pathname === '/contact' ? 'md:text-blue-700 md:dark:text-blue-500' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
