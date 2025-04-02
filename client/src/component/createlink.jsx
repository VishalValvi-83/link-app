import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import toast from 'react-hot-toast'
import Navbar from './Navbar'

const Createlink = () => {
    const [linkData, setLinkData] = useState({
        title: "",
        target: "",
        slug: ""
    })
    const isUrlSecure = (url) => {
        try {
            const parsedUrl = new URL(url);
            return parsedUrl.protocol === 'https:';
        } catch (error) {
            return false;
        }
    };
    const getData = async (e) => {
        e.preventDefault();
        const { title, target, slug } = linkData;

        if (!title || !target || !slug) {
            return toast.error("Please fill all fields");
        }
        if (!isUrlSecure(target)) {
            return toast.error("The URL must be secure (HTTPS)");
        }
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/add-link`, linkData);
            if (response.data.success) {
                toast.success("Link is shortened");
                setLinkData({ title: "", target: "", slug: "" });
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message || "An error occurred");
        }
    };
    return (
        <>
            <Navbar />
            <section className="text-gray-500 dark:bg-gray-900 border-none body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-purple-500">HOW IT WORKS</h1>
                    </div>
                    <div className="flex flex-wrap justify-center -m-4">
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg dark:text-white text-gray-900 font-medium title-font mb-2">Step 1: Enter Your Long URL</h2>
                                <p className="leading-relaxed text-sm">Start by entering the long URL you want to shorten into the input field. <br />
                                    <b>Example:</b> https://example.com/my-very-long-link-with-parameters.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <circle cx="6" cy="6" r="3"></circle>
                                        <circle cx="6" cy="18" r="3"></circle>
                                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg dark:text-white text-gray-900 font-medium title-font mb-2">Step 2: Customize Your Link</h2>
                                <p className="leading-relaxed text-base">Personalize your short URL with a custom slug. <br /> <b>Example:</b> Your link could look like https://linkzip.com/my-app.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <h2 className="text-lg dark:text-white text-gray-900 font-medium title-font mb-2">Step 3: Generate Your Short Link</h2>
                                <p className="leading-relaxed text-base">Click on the “Generate Short Link” button, and your customized link will be ready instantly!</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 className="dark:text-white text-lg text-gray-900 font-medium title-font mb-2">Step 4: Track Link Performance</h2>
                                <p className="leading-relaxed text-base">Access detailed analytics for your link, including: <br />Number of clicks,
                                    Geographic location of users,
                                    Devices and browsers used.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                                    </svg>
                                </div>
                                <h2 className="dark:text-white text-lg text-gray-900 font-medium title-font mb-2">Step 4: Share Your Link</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>

                    </div>
                    <a href='#createlink' className="flex w-32 justify-center mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 text-center px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg">Lets Make</a>
                </div>
            </section>
            <section id='createlink' className='relative wave-container w-full'>
                <div className="container z-50 lg:w-3/4  mx-auto ">
                    <div className="p-6 rounded shadow-md">
                        <div>
                            <div className="mb-4">
                                <label className="block pb-2 font-medium text-white">Title</label>
                                <input value={linkData.title} onChange={(e) => { setLinkData({ ...linkData, title: e.target.value }) }} type="text" placeholder="Title for short Link" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200" required />
                            </div>

                            <div className="mb-4">
                                <label className="block pb-2 font-medium text-white">Slug</label>
                                <input value={linkData.slug} onChange={(e) => { setLinkData({ ...linkData, slug: e.target.value }) }} type="text" placeholder="e.g., my_short_link or myapplink" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200" required />
                            </div>

                            <div className="flex items-center mb-4">
                                <p className="py-2.5 px-3 text-gray-500 bg-white  border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">https://</p>
                                <input value={linkData.target} onChange={(e) => { setLinkData({ ...linkData, target: e.target.value }) }} type="text" placeholder="Paste your long URL" className="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none  rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " required />
                            </div>

                            <button onClick={getData} type="submit" className="px-4 py-2 font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-300">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="text-gray-600 body-font">
                <div className="container px-5 my-5 mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-purple-500 mb-4">FEATURES</h1>
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Create Smarter Links, Drive Better Results</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Transform long, messy URLs into concise, branded links that are easy to share and track. Elevate your marketing campaigns with detailed analytics, custom slugs, and secure link-sharing options designed for success.</p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="p-2 sm:w-1/2 w-full">
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
            </section> */}
        </>
    )
}

export default Createlink
