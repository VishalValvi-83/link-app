import React, { useState, useRef, useEffect } from 'react'
import './style.css'
import axios from 'axios'
import toast from 'react-hot-toast'
import Navbarnew from './Navb'
import { Link, QrCode } from "lucide-react";
import QRCode from 'react-qr-code';


const Createlink = () => {
    const [qrCodeUrl, setQrCodeUrl] = useState("");
    const [generatedQR, setGeneratedQR] = useState(false);
    const [activeTab, setActiveTab] = useState("create");
    const qrRef = useRef(null);

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
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/add-link`, {
                title: title,
                target: target,
                slug: slug,
                user: JSON.parse(localStorage.getItem('token'))._id
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (response.data.success) {
                toast.success("Link is shortened");
                setLinkData({ title: "", target: "", slug: "" });
                setTimeout(() => {
                    window.location.href = `/dashboard`;
                }, 1000);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || "An error occurred");
        }
    };

    const generateQRCode = (e) => {
        e.preventDefault();
        if (!qrCodeUrl) {
            toast.error("Please enter a URL");
            setGeneratedQR(false);
            return;
        }
        if (!isUrlSecure(qrCodeUrl)) {
            toast.error("URL must secure with HTTPS protocol");
            setGeneratedQR(false);
            return;
        }
        setGeneratedQR(true);
        toast.success("QR code generated!");
    };
    useEffect(() => {
        if (!qrCodeUrl) {
            // alert("Please enter a valid URL");
            setGeneratedQR(false);
            return;
        }
    }, [qrCodeUrl]);
    const downloadQRCode = () => {
        const svg = qrRef.current.querySelector('svg');
        const serializer = new XMLSerializer();
        const svgData = serializer.serializeToString(svg);
        const canvas = document.createElement('canvas');
        const img = new Image();

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            const pngUrl = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = pngUrl;
            link.download = 'qr-code.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    };
    return (
        <>
            <Navbarnew />
            <section className="dark:bg-gray-900 mt-10 border-none body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-purple-500">HOW IT WORKS</h1>
                    </div>
                    <div className="flex flex-wrap justify-center -m-4">
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-full h-10 inline-flex items-center justify-start gap-5 mb-4">
                                    <div className="w-10 h-10 inline-flex items-center justify-center bg-indigo-100 rounded-full text-indigo-500 mb-4">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-purple-500 font-medium title-font mb-2">Step 1: Enter Your Long URL</h2>
                                </div>
                                <p className="text-sm text-gray-400">Start by entering the long URL you want to shorten into the input field. <br />
                                    <b>Example:</b> https://example.com/my-very-long-link-with-parameters</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-full h-10 inline-flex items-center justify-start gap-5 mb-2">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                            <circle cx="6" cy="6" r="3"></circle>
                                            <circle cx="6" cy="18" r="3"></circle>
                                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-purple-500 font-medium title-font mb-3">Step 2: Customize Your Link</h2>
                                </div>
                                <p className=" text-gray-400">Personalize your short URL with a custom slug. <br /> <b>Example:</b> Your link could look like https://example.com/my-app.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-full h-10 inline-flex items-center justify-start gap-5 mb-4">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-purple-500 font-medium title-font mb-3">Step 3: Generate Your Short Link</h2>
                                </div>
                                <p className="text-gray-400">Click on the “Generate Short Link” button, and your customized link will be ready instantly!</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-full h-10 inline-flex items-center justify-start gap-5 mb-4">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-purple-500 font-medium title-font mb-3">Step 4: Track Link Performance</h2>
                                </div>
                                <p className="text-gray-400">Access detailed analytics for your link, including: <br />Number of clicks,
                                    Geographic location of users,
                                    Devices and browsers used.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-full h-10 inline-flex items-center justify-start gap-5 mb-4">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-purple-500 font-medium title-font mb-3">Step 4: Share Your Link</h2>
                                </div>
                                <p className="text-gray-400">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>
                    </div>
                    <a href='#createlink' className="flex w-32 justify-center mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 text-center px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg">Lets Make</a>
                </div>
            </section>
            <section id="createlink" className="relative bg-gray-100 dark:bg-gray-900 py-16 min-h-[700px]">
                <div className="container mx-auto max-w-2xl">
                    {/* Toggle Buttons */}
                    <div className="flex justify-center gap-4 mb-8">
                        <button
                            onClick={() => setActiveTab("create")}
                            className={`px-6 py-2 rounded-lg font-semibold shadow transition ${activeTab === "create"
                                ? "bg-indigo-600 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white"
                                }`}
                        >
                            <span className="inline-flex items-center gap-2"><Link size={18} /> Create Link</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("qr")}
                            className={`px-6 py-2 rounded-lg font-semibold shadow transition ${activeTab === "qr"
                                ? "bg-indigo-600 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white"
                                }`}
                        >
                            <span className="inline-flex items-center gap-2"><QrCode size={18} /> Generate QR</span>
                        </button>
                    </div>

                    {/* Create Link Section */}
                    {activeTab === "create" && (
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-purple-500 mb-6 flex items-center gap-3"><Link /> Create Your Short Link</h2>
                            <form onSubmit={getData} className="space-y-6">
                                <div>
                                    <label className="block sm:text-lg text-gray-700 dark:text-gray-300 mb-1">Title</label>
                                    <input
                                        type="text"
                                        value={linkData.title}
                                        onChange={(e) => setLinkData({ ...linkData, title: e.target.value })}
                                        placeholder="Title for the short link"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                                <div>
                                    <label className="block sm:text-lg text-gray-700 dark:text-gray-300 mb-1">Slug</label>
                                    <input
                                        type="text"
                                        value={linkData.slug}
                                        onChange={(e) => setLinkData({ ...linkData, slug: e.target.value })}
                                        placeholder="e.g., myapp or shortlink2025"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                                <div>
                                    <label className="block sm:text-lg text-gray-700 dark:text-gray-300 mb-1">Long URL</label>
                                    <div className="flex">
                                        {/* <span className="inline-flex items-center px-2 bg-gray-200 text-gray-600 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-700 dark:text-white">https://</span> */}
                                        <input
                                            type="text"
                                            value={linkData.target}
                                            onChange={(e) => setLinkData({ ...linkData, target: e.target.value })}
                                            placeholder="Paste your  URL (with HTTPS)"
                                            className="w-full mt-0 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        // pattern="https://.*"
                                        />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition duration-300"
                                    >
                                        Generate Short Link
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* QR Code Section */}
                    {activeTab === "qr" && (
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-purple-500 mb-6 flex items-center gap-3"><QrCode /> Generate QR Code</h2>
                            <form onSubmit={generateQRCode} className="space-y-6">
                                <div>
                                    <label className="block sm:text-lg text-gray-700 dark:text-gray-300 mb-1">URL</label>
                                    <input
                                        type="text"
                                        value={qrCodeUrl}
                                        onChange={(e) => setQrCodeUrl(e.target.value)}
                                        placeholder="Enter a valid HTTPS URL"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                                    {/* clear qr code button also qr url */}
                                    <button type='button' onClick={() => { setQrCodeUrl(""); setGeneratedQR(false) }} className="bg-red-800 text-white mt-2 px-4 py-1 rounded hover:bg-red-700 mb-3">Clear QR</button>

                                </div>

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition duration-300">
                                        Generate QR Code
                                    </button>
                                </div>
                            </form>
                            {generatedQR && (
                                <div className="text-center container max-w-xs p-5 rounded-md bg-gray-100 mx-auto mt-6">
                                    <div ref={qrRef} className="mx-auto">
                                        <QRCode className='mx-auto' value={qrCodeUrl} size={150} />
                                    </div>
                                    <button
                                        onClick={downloadQRCode}
                                        className="mt-4 bg-indigo-600 hover:bg-indigo-700 px-3 text-white text-smpx-6 py-2 rounded-lg font-semibold transition duration-300">
                                        Download QR Code
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

        </>
    )
}

export default Createlink
