
import React from 'react'
import Navbar from "../../component/Navbar";
import aboutimg from '../../assets/Good team.png'

function About() {
    return (
        <>
            <Navbar />
            <div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div class="w-full mx-auto lg:w-1/2">
                  
                    <h1 class="mt-8 text-2xl font-bold text-gray-800 md:text-3xl">
                    Empowering Your Links, Enhancing Your Reach

                    </h1>
                    <p class="mt-4 text-gray-500 dark:text-gray-400">
                    At ZipLink, we transform long, cumbersome URLs into concise, shareable links, making your digital interactions seamless and efficient. Whether you're a business, marketer, or individual, our fast and secure platform helps you simplify link sharing while ensuring reliability and tracking. With custom branding and built-in analytics, ZipLink makes every link smarter and more impactful.
                    </p>
                </div>
                <div class="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    <img
                        class="w-full max-w-lg lg:mx-auto"
                        src={aboutimg}
                        alt=""
                    />
                </div>
            </div>


        </>
    )
}

export default About
