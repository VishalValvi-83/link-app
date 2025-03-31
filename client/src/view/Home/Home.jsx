import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Createlink from "../../component/createlink";
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white hero-section dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white animate__animated animate__fadeInDown">
              Shorten, Share, and Track Your URLs
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 animate__animated animate__zoomIn transition ease-in-out delay-200 hover:text-sky-400 duration-300">
              Simplify your online presence with our URL shortener. Create custom links, track clicks, and analyze performance.
            </p>
            <a href="#" className="inline-flex items-center animate__animated animate__fadeInLeft justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">Shorten Your URL
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 animate__animated animate__fadeInRight"> Learn More</a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://go.ox4.in/Assets/image/Define-GoShort.png" alt="mockup" />
          </div>
        </div>
      </section>
      {/* <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 pt-32 pb-10 lg:flex lg:h-3/6 lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r animate__animated animate__fadeInDown from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              One Short Link,
              <span className="sm:block"> Infinite Connections. </span>
            </h1>

            <p className="mx-auto text-slate-400 animate__animated animate__zoomIn mt-4 max-w-xl sm:text-xl/relaxed  transition ease-in-out delay-200 hover:text-sky-400 duration-300">
              Easily shorten and customize your URLs. Track performance, analyze
              clicks, and grow your audience with precision.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full animate__animated animate__fadeInLeft rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#createlink"
              >
                Get Started
              </a>

              <Link
                className="block w-full animate__animated animate__fadeInRight rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                to="/service"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <Createlink />
      <section className="text-gray-600 dark:text-white dark:bg-gray-900 body-font">
        <div className="container px-5 my-5 mx-auto">
          <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-purple-500 mb-4">FEATURES</h1>
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Create Smarter Links, Drive Better Results</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Transform long, messy URLs into concise, branded links that are easy to share and track. Elevate your marketing campaigns with detailed analytics, custom slugs, and secure link-sharing options designed for success.</p>
          </div>
          <div className="flex text-black flex-wrap lg:w-4/ sm:mx-auto  sm:mb-2 -mx-2">
            <div className="p-2 text-black sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">QR Code Generation</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Click Tracking & Analytics</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Custom Domain Support</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Customizable Slugs</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Spam & Malware Detection
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Social Media Integration</span>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Try Now</button>
        </div>
      </section>
    </>
  );
};

export default Home;
