import React, { useEffect } from "react";
import Navbarnew from "./../../component/Navb";
import Footer from './../../component/Footer';
import PromoCards from './../../component/PromoCards'
import './Services.css'
import {

  QrCode,
  Activity,
  Link,
} from "lucide-react";
import Aos from "aos";
import { NavLink } from "react-router-dom";

const Service = () => {

  useEffect(() => {
      const isSmallScreen = window.innerWidth <= 768; 
      Aos.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
        offset: isSmallScreen ? 100 : 150,
      });
    }, []);

  return (
    <>
      <Navbarnew />
      <section id="service-hero" className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Our Services
        </h1>
        <p className="md:text-xl text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          ZipLink offers tools to enhance your digital reach with modern, efficient, and insightful link services.
        </p>
      </section>
      <section className="text-gray-700 bg-white dark:text-gray-300 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform">
              <QrCode
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-2">
                QR Code Generation
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Generate scannable QR codes for any link to make offline sharing seamless and professional.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform">
              <Activity className="text-blue-500 w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-2">
                Click Tracking & Analytics
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Get real-time data on clicks and user behavior to measure the success of your campaigns.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform">
              <Link className="text-blue-500 w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-2">
                Customizable Slugs
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Personalize your shortened URLs with custom slugs that reflect your brand and content.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="/create-link" className="bg-blue-600 text-white cursor-pointer text-lg px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
              Get Started Now
            </a>
          </div>
        </div>
      </section>
      <PromoCards/>
    <Footer/>
    </>
  );
};

export default Service;
