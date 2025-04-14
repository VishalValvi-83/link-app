import React, { useEffect } from "react";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import AnalyticImage from "./../assets/Dashboard-cuate.png";
import QrCodeImage from './../assets/qrcodeanimate.svg'
import LinkUsage from "./../assets/worldLinkEntrance.svg";
import { LayoutDashboard, QrCodeIcon } from "lucide-react";
import toast from "react-hot-toast";

export default function HeroCarousel() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("token") || localStorage.getItem("User");
    const user = JSON.parse(userData);
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const createLink = () => {
    if (isLoggedIn) {
      toast.loading("Loading..");
      setTimeout(() => {
        toast.dismiss();
        window.location.href = "/create-link";
      }, 2000);
    } else {
      toast.error("Please login to create a link.");
      setTimeout(() => {
        window.location.href = "/user-login";
      }, 2000);
    }
  };

  const viewDashboard = () => {
    if (isLoggedIn) {
      window.location.href = "/dashboard";
    } else {
      toast.error("Please login to view the dashboard.");
      setTimeout(() => {
        window.location.href = "/user-login";
      }, 2000);
    }
  };
  const generateQRCode = () => {
    if (isLoggedIn) {
      window.location.href = "/create-link";
    } else {
      toast.error("Please login to view the dashboard.");
      setTimeout(() => {
        window.location.href = "/user-login";
      }, 2000);
    }
  }

  return (
    <section className="h-screen bg-white dark:bg-gray-900">
      <Carousel slideInterval={5000}>
        <div className="flex items-center justify-center px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="my-auto">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 animate__animated animate__fadeInDown dark:text-white">
                Shorten, Share, and Track Your URLs
              </h1>
              <p className="mt-4 font-light  animate__animated animate__zoomIn transition ease-in-out delay-200 hover:text-sky-400 duration-300 text-lg lg:text-2xl  dark:text-gray-300">
                Simplify your online presence with our URL shortener. Create custom links, track clicks, and analyze performance.
              </p>
              <div className="flex flex-wrap mt-6 gap-4">
                <button onClick={createLink} className="inline-flex items-center animate__animated animate__fadeInLeft justify-center px-2 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 hover:text-sky-500">
                  Shorten Your URL
                  <svg className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg" >
                    <path fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd" />
                  </svg>
                </button>
                <Link to="" className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img src={LinkUsage} alt="URL shortening" className="w-[90%] h-[90%]" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="my-auto">
              <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
                Powerful Analytics at Your Fingertips
              </h2>
              <p className="mt-4 font-light  animate__animated animate__zoomIn transition ease-in-out delay-200 hover:text-sky-400 duration-300 text-lg lg:text-2xl  dark:text-gray-300">
                See how your links perform with detailed metrics — clicks, geography, device, and more.
              </p>
              <div className="flex flex-wrap mt-6 gap-4">
                <button onClick={viewDashboard} className="px-6 py-3 font-medium inline-flex items-center justify-center bg-primary-700 text-white rounded-lg hover:text-sky-500">
                  View Dashboard <LayoutDashboard className="w-5 h-5 ml-2 -mr-1" />
                </button>
                <Link to="/help/analytics" className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img src={AnalyticImage} alt="Analytics" className="w-full" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="my-auto">
              <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
                Generate QR Codes Instantly
              </h2>
              <p className="mt-4 font-light  animate__animated animate__zoomIn transition ease-in-out delay-200 hover:text-sky-400 duration-300 text-lg lg:text-2xl  dark:text-gray-300">
                Every shortened link includes a QR code. Download and share it anywhere — print, screens, posters.
              </p>
              <div className="flex flex-wrap mt-6 gap-4">
                <button onClick={generateQRCode} className="px-6 text-md font-medium py-3 inline-flex items-center justify-center bg-primary-700 text-white rounded-lg hover:text-sky-500">
                  Generate QR
                  <QrCodeIcon className="w-5 h-5 ml-2 -mr-1" />
                </button>
                <Link to="/help/qr-help" className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  How it works?
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img src={QrCodeImage} alt="QR Code" className="w-[90%] h-[90%]" />
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
