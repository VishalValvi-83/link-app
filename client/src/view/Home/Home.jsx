import React from "react";
import "./Home.css";
import PromoLinkSections from "../../component/PromoCards";
import Navbarnew from "../../component/Navb";
import CreateLinkButton from "../../component/CreateLinkButton";
import Footer from "../../component/Footer";
import Aos from "aos";
import HeroCarousel from "../../component/HeroCarousel";

const Home = () => {

  Aos.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
    offset: 700,

  });



  return (
    <>
      <Navbarnew />
      {/* hero section */}
      <HeroCarousel/>

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
      <section className="text-gray-600 dark:text-white pt-5 dark:bg-gray-900 body-font">
        <div className="container p-5 mx-auto">
          <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-purple-500 py-4">FEATURES</h1>
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-100 mb-4">Create Smarter Links, Drive Better Results</h1>
            <p className="text-base text-lg leading-relaxe xl:w-2/4 text-justify lg:w-3/4 mx-auto">Transform long, messy URLs into concise, branded links that are easy to share and track. Elevate your marketing campaigns with detailed analytics, custom slugs, and secure link-sharing options designed for success.</p>
          </div>
          <div className="flex text-black flex-wrap xl:w-3/4 lg:w-4/2 sm:mx-auto sm:mb-2 -mx-2">

            <div data-aos="fade-right" className="p-2 text-black  sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">QR Code Generation</span>
              </div>
            </div>
            <div data-aos="fade-left" className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Click Tracking & Analytics</span>
              </div>
            </div>
            <div data-aos="fade-right" className="p-2 transition delay-200 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Custom Domain Support</span>
              </div>
            </div>
            <div data-aos="fade-left" className="p-2 transition delay-200 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Customizable Slugs</span>
              </div>
            </div>
            <div data-aos="fade-right" className="p-2 transition delay-300 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Spam & Malware Detection
                </span>
              </div>
            </div>
            <div data-aos="fade-left" className="p-2 transition delay-300 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Social Media Integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PromoLinkSections />
      <CreateLinkButton />
      <Footer />
    </>
  );
};

export default Home;
