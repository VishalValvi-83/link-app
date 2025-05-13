import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD
import ReCAPTCHA from 'react-google-recaptcha';
import toast from "react-hot-toast";

const Signup = () => {
  const [recaptchaToken, setRecaptchaToken] = React.useState("");
=======
// import ReCAPTCHA from 'react-google-recaptcha';
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

  // const [recaptchaToken, setRecaptchaToken] = React.useState("");
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32
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

<<<<<<< HEAD
  React.useEffect(() => {
    // Dynamically load the reCAPTCHA script
    const loadRecaptchaScript = () => {
      if (!document.querySelector('script[src="https://www.google.com/recaptcha/api.js"]')) {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    };

    loadRecaptchaScript();
  }, []);
=======
  // React.useEffect(() => {
  //   // Dynamically load the reCAPTCHA script
  //   const loadRecaptchaScript = () => {
  //     if (!document.querySelector('script[src="https://www.google.com/recaptcha/api.js"]')) {
  //       const script = document.createElement("script");
  //       script.src = "https://www.google.com/recaptcha/api.js";
  //       script.async = true;
  //       script.defer = true;
  //       document.body.appendChild(script);
  //     }
  //   };

  //   loadRecaptchaScript();
  // }, []);
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate the form fields

<<<<<<< HEAD
    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/verify-recaptcha`,
        { token: recaptchaToken }, // Send the token to the backend
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      if (data.success) {
        alert("reCAPTCHA verified successfully!");
        // Proceed with form submission logic
      } else {
        alert("reCAPTCHA verification failed. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying reCAPTCHA:", error);
      alert("An error occurred while verifying reCAPTCHA. Please try again.");
    }
=======
    // if (!recaptchaToken) {
    //   alert("Please complete the reCAPTCHA.");
    //   return;
    // }

    // try {
    //     const response = await axios.post(
    //       `${import.meta.env.VITE_BACKEND_URL}/verify-recaptcha`,
    //       { token: recaptchaToken }, // Send the token to the backend
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );

    //     const data = response.data;
    //     if (data.success) {
    //       alert("reCAPTCHA verified successfully!");
    //       // Proceed with form submission logic
    //     } else {
    //       alert("reCAPTCHA verification failed. Please try again.");
    //     }
    //   } catch (error) {
    //     console.error("Error verifying reCAPTCHA:", error);
    //     alert("An error occurred while verifying reCAPTCHA. Please try again.");
    //   }
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32
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
<<<<<<< HEAD
        alert("Signup successful!");
=======
        toast.success("Signup successful!");
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32
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
<<<<<<< HEAD
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again.");
    }
  };

  const onRecaptchaChange = (token) => {
    setRecaptchaToken(token); // Save the token when the user completes the reCAPTCHA
  };
  // const Usersignup = async () => {

  // }
=======
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error("An error occurred during signup. Please try again.");
    }
  };

  // const onRecaptchaChange = (token) => {
  //   setRecaptchaToken(token); // Save the token when the user completes the reCAPTCHA
  // };
  // const Usersignup = async () => {

  // }
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
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32
  console.log("Backend URL:", `${import.meta.env.VITE_BACKEND_URL}/user`);

  return (
    <>

<<<<<<< HEAD
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="relative flex items-end px-4 pb-10 pt-10 sm:pb-14 md:justify-center lg:pb-20 bg-gray-50 sm:px-6 lg:px-8">
=======
      <section className="bg-white dark:bg-gray-800">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2 ">
          <div className="relative flex items-end px-4 pb-10 pt-10 sm:pb-14 md:justify-center lg:pb-20 bg-gray-50 dark:bg-gray-800 sm:px-6 lg:px-8">
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32
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

<<<<<<< HEAD
          <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-12 lg:py-14">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Be a Part of Something Special - Sign Up
              </h2>
              <p className="mt-2 text-base text-gray-600">
=======
          <div className="flex items-center justify-center px-4 py-10 dark:bg-gray-800 sm:px-6 lg:px-8 sm:py-12  lg:py-14">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight dark:text-white text-black sm:text-4xl">
                Be a Part of Something Special - Sign Up
              </h2>
              <p className="mt-2 text-base font-light text-gray-400">
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32
                Already have an account?
                <Link
                  to="/user-login"
                  title=""
<<<<<<< HEAD
                  className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
=======
                  className="font-medium text-blue-600 ms-1 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32
                > Login.
                </Link>
              </p>

              <form action="?" onSubmit={handleSubmit} method="POST" className="mt-8">
<<<<<<< HEAD
                <div className="space-y-5">
                  <div>
                    <label
                      for="name"
                      className="text-base font-medium text-gray-900"
=======
                <div className="space-y-5 ">
                  <div>
                    <label
                      for="name"
                      className="text-base font-medium text-gray-900 dark:text-white"
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32
                    >
                      First & Last name
                    </label>
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
                          document.getElementById('email').classList.remove('border-4 border-red-500/100')
                        }
                        }
<<<<<<< HEAD
                        placeholder="Enter your full name"
=======
                        placeholder="Enter First & Last name"
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
<<<<<<< HEAD
                    <label for="email" className="text-base font-medium text-gray-900"
                    >Email address</label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
=======
                    <label for="email" className="text-base font-medium text-gray-900 dark:text-white"
                    >Email address</label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        {/* <svg
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32
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
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
<<<<<<< HEAD
                        </svg>
=======
                        </svg> */}
                        <Mail className="w-5 h-5" />
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32
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
<<<<<<< HEAD
                      className="text-base font-medium text-gray-900"
=======
                      className="text-base font-medium text-gray-900 dark:text-white"
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32
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
<<<<<<< HEAD
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    onChange={onRecaptchaChange}

                  />
                  <script>
=======
                  {/* <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    onChange={onRecaptchaChange}

                  /> */}
                  {/* <script>
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32
                    {
                      function onRecaptchaChange(token) {
                        const event = new CustomEvent('recaptcha-complete', { detail: token });
                        window.dispatchEvent(event);
                      }
                    }
<<<<<<< HEAD
                  </script>
=======
                  </script> */}
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32
                  <div>
                    <button
                      type="submit"
                      // onClick={Usersignup}
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
<<<<<<< HEAD
=======
                  onClick={handleGoogleSignup}
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute inset-y-0 left-0 p-4">
                    <svg
<<<<<<< HEAD
                      className="w-6 h-6 text-rose-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
=======
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
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32
                    </svg>
                  </div>
                  Sign up with Google
                </button>


              </div>

<<<<<<< HEAD
              <p className="mt-5 text-sm text-gray-600">
=======
              {/* <p className="mt-5 text-sm text-gray-600">
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32
                This site is protected by reCAPTCHA and the Google
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Privacy Policy
                </a>
                &
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Terms of Service
                </a>
<<<<<<< HEAD
              </p>
=======
              </p> */}
>>>>>>> cbd1fd836154474bf08ba8a33a0a989afc952e32
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
