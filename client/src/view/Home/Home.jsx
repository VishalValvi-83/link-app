import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
const Home = () => {
  return (
    <>
    <Navbar/>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
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
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full animate__animated animate__fadeInRight rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
