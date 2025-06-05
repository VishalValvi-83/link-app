import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Mail } from 'lucide-react';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
const Signup = () => {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: "ziplinkss.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_MSGID,
    appId: import.meta.env.VITE_APPID,
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [user, setUser] = React.useState({
    fullname: '',
    email: '',
    password: ''
  });

  const capitalizeFullName = (fullname) => {
    return fullname
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const capitalizedFullName = capitalizeFullName(user.fullname);

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user`,

        {
          fullname: capitalizedFullName,
          email: user.email,
          password: user.password
        }
      );

      const data = response.data;
      if (data.success) {
        toast.success("Signup successful!");
        setUser({
          fullname: "",
          email: "",
          password: ""
        });

        window.location.href = "/user-login";
      } else if (email.length === 0) {
        toast.error("Please Enter Email")
        document.getElementById('email').classList.add('border-4 border-red-500/100')

      } else if (password.length === 0) {
        toast.error("Please Enter Password")
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error("An error occurred during signup. Please try again.");
    }
  };
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/google-signin`, {
        email: user.email,
        fullname: user.displayName,
      });

      if (response.data.success) {
        const loggedInUser = response.data.data;
        if (loggedInUser && loggedInUser._id) {
          localStorage.setItem("token", JSON.stringify(loggedInUser));
          toast.success("Signup successful!");
          setTimeout(() => {
            window.location.pathname = "/dashboard";
          }, 1000);
        } else {
          toast.error("Error: No user ID returned from backend");
        }
      } else {
        toast.error("Signup failed. Please try again.");
      }
    } catch (error) {
      toast.error("Signup failed. Please try again.");
      console.error(error);
    }
  };
  console.log("Backend URL:", `${import.meta.env.VITE_BACKEND_URL}/user`);

  return (
    <>

      <section className="bg-white dark:bg-gray-800">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2 ">
          <div className="relative flex items-end px-4 pb-10 pt-10 sm:pb-14 md:justify-center lg:pb-20 bg-gray-50 dark:bg-gray-800 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/4/girl-working-on-laptop.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            <div className="relative">
              <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                <h3 className="text-4xl font-bold text-white">
                  Join a growing community  <br className="hidden xl:block" />
                  & Simplify your links!
                </h3>
                <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">

                      Ease of Use
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      Unlimited Exports
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      Custom Links
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      Analytics Tracking
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center px-4 py-10 dark:bg-gray-900 sm:px-6 lg:px-8 sm:py-12  lg:py-14">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight dark:text-white text-black sm:text-4xl">
                Be a Part of Something Special - Sign Up
              </h2>
              <p className="mt-2 text-base font-light mr-1 dark:text-gray-200">
                Already have an account?
                <Link
                  to="/user-login"
                  title=""
                  className="font-medium text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 ms-1 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                > Login.
                </Link>
              </p>

              <form action="?" onSubmit={handleSubmit} method="POST" className="mt-8">
                <div className="space-y-5 ">
                  <div>
                    <label
                      for="name"
                      className="text-base font-medium text-gray-900 dark:text-white"
                    >First & Last name</label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>

                      <input
                        type="text"
                        id="name"
                        required
                        value={user.fullname}
                        onChange={(e) => {
                          setUser({ ...user, fullname: e.target.value })
                          document.getElementById('email').classList.remove('border-4 border-red-500/100')}}
                        placeholder="Enter First & Last name"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="email" className="text-base font-medium text-gray-900 dark:text-white"
                    >Email address</label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Mail className="w-5 h-5" />
                      </div>

                      <input
                        type="email"
                        id="email"
                        required
                        value={user.email}
                        onChange={(e) => {
                          setUser({ ...user, email: e.target.value })
                          document.getElementById('email').classList.remove('border-4 border-red-500/100')
                        }
                        }
                        placeholder="Enter email to get started"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      for="password"
                      className="text-base font-medium text-gray-900 dark:text-white"
                    >Password</label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                          />
                        </svg>
                      </div>

                      <input
                        type="password"
                        id="password"
                        required
                        value={user.password}
                        onChange={(e) => {
                          setUser({ ...user, password: e.target.value })
                          document.getElementById('email').classList.remove('border-4 border-red-500/100')
                        }
                        }
                        placeholder="Enter your password"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>
                  <div
                    class="g-recaptcha"
                    data-sitekey="6LdduAcrAAAAAI0GMxW-53M6kCR1fQ7lSVF2xczbY"
                  ></div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </form>

              <div className="mt-3 space-y-3">
                <button
                  type="button"
                  onClick={handleGoogleSignup}
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute inset-y-0 left-0 p-4">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.54 0 6.74 1.23 9.29 3.25l6.93-6.93C35.74 2.08 30.14 0 24 0 14.64 0 6.44 5.64 2.47 13.88l7.91 6.14C12.3 12.08 17.7 9.5 24 9.5z"
                      />
                      <path
                        fill="#34A853"
                        d="M46.5 24c0-1.64-.15-3.23-.44-4.76H24v9.02h12.7c-.55 2.96-2.2 5.47-4.7 7.16l7.31 5.67C43.82 37.1 46.5 30.96 46.5 24z"
                      />
                      <path
                        fill="#4A90E2"
                        d="M10.38 27.02c-.55-1.64-.87-3.38-.87-5.02s.32-3.38.87-5.02L2.47 13.88C.9 17.02 0 20.4 0 24s.9 6.98 2.47 10.12l7.91-6.14z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M24 48c6.14 0 11.74-2.08 16.22-5.62l-7.31-5.67c-2.3 1.54-5.2 2.44-8.91 2.44-6.3 0-11.7-3.58-14.62-8.86l-7.91 6.14C6.44 42.36 14.64 48 24 48z"
                      />
                    </svg>
                  </div>
                  Sign up with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
