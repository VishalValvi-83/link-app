import React from "react";
import { Link, BarChart2, Globe, TrendingUp, CheckCircle, BarChart3, Truck, Share2 } from "lucide-react";
import SocialMediaImage from "../assets/social.svg"
export default function PromoLinkSections() {
    return (
        <div className="space-y-20 bg-white p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-16">
                <div className="w-full max-w-2xl rounded-2xl p-8 space-y-6 order-2 md:order-1 bg-gray-100 relative">
                    <BarChart3 className="absolute -top-6 -left-6 w-12 h-12 text-orange-100" />
                    <div className="border bg-white border-dashed border-gray-400 rounded-xl p-4">
                        <div className="flex items-center space-x-2">
                            <Link className="w-5 h-5 text-orange-500" />
                            <span className="text-xl font-semibold">launchnow.co/sale</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">New arrivals are here!</p>
                    </div>
                    <div className="flex items-center bg-gray-200 rounded-xl px-4 py-2 space-x-2">
                        <BarChart2 className="w-5 h-5 text-teal-600" />
                        <span className="text-lg font-semibold">492</span>
                        <span className="text-gray-500">Clicks</span>
                    </div>
                    <div>
                        <p className="text-sm text-gray-700 font-medium mb-1">Redirect link</p>
                        <input
                            disabled
                            className="border rounded-md w-full px-3 py-2"
                            defaultValue="https://launchnow.co/#summer_offer"
                        />
                    </div>
                </div>
                <div className="w-full max-w-xl space-y-4 order-1 md:order-2">
                    <h2 className="text-3xl font-bold text-gray-900 pb-2 inline-block border-b-2 border-orange-200 w-fit">
                        Boost your marketing reach with branded short links
                    </h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
                            <span>Improve email click rates by adding trusted short links that match your brand.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
                            <span>Track campaign success with real-time analytics and performance metrics.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
                            <span>Quickly update destination URLs without breaking existing promotions.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16">
                <div className="w-full max-w-xl space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 pb-2 inline-block border-b-2 border-green-200 w-fit">
                        Track customer orders easily with eco-friendly short links
                    </h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                            <span>Send SMS updates using short, simple tracking links.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                            <span>Reduce confusion and boost satisfaction with clear communication.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                            <span>Update tracking pages as needed without breaking old links.</span>
                        </li>
                    </ul>
                </div>
                <div className="w-full max-w-2xl rounded-2xl p-8 space-y-6 bg-gray-100 relative">
                    <Truck className="absolute -top-6 -right-6 w-12 h-12 text-green-100" />
                    <div className="border bg-white border-dashed border-gray-400 rounded-xl p-4">
                        <div className="flex items-center space-x-2">
                            <Link className="w-5 h-5 text-green-600" />
                            <span className="text-xl font-semibold">eco.ly/track</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Your delivery is on the way!</p>
                    </div>

                    <div className="flex items-center bg-gray-200 rounded-xl px-4 py-2 space-x-2">
                        <Globe className="w-5 h-5 text-green-500" />
                        <span className="text-lg font-semibold">310</span>
                        <span className="text-gray-500">Views</span>
                    </div>

                    <div>
                        <p className="text-sm text-gray-700 font-medium mb-1">Redirect link</p>
                        <input
                            disabled
                            className="border rounded-md w-full px-3 py-2"
                            defaultValue="https://eco.ly/#package_2025"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16">
                <div className="w-full max-w-2xl rounded-2xl p-8 space-y-6 order-2 md:order-1 bg-gray-100 relative">
                    <Share2 className="absolute -top-6 -left-6 w-12 h-12 text-purple-100" />
                    <div className="border grid grid-cols-2 bg-white border-dashed border-gray-400 rounded-xl p-4">
                        <div className="flex items-center space-x-2">
                            <Link className="w-5 h-5 text-purple-600" />
                            <p className="text-xl font-semibold"> brandboost.io/click</p>
                        </div>
                        <p className="text-sm text-gray-600 mt-2"> Check out our latest post!</p>
                    </div>

                    <div className="flex items-center bg-gray-200 rounded-xl px-4 py-2 space-x-2">
                        <TrendingUp className="w-5 h-5 text-purple-500" />
                        <span className="text-lg font-semibold">784</span>
                        <span className="text-gray-500">Engagements</span>
                    </div>

                    <div>
                        <p className="text-sm text-gray-700 font-medium mb-1">Redirect link</p>
                        <input
                            disabled
                            className="border rounded-md w-full px-3 py-2"
                            defaultValue="https://brandboost.io/#new_post"
                        />
                    </div>
                </div>
                <div className="w-full max-w-xl space-y-4 order-1 md:order-2">
                    <img src={SocialMediaImage} alt="sociak-media-image" className="h-48 mx-auto w-auto" />

                    <h2 className="text-3xl font-bold text-gray-900 pb-2 inline-block border-b-2 border-purple-200 w-fit">
                        Increase engagement on social media with smart links
                    </h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                            <span>Use UTM tags to analyze which posts get the most traffic.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                            <span>Quickly edit destinations to match changing campaigns.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                            <span>Make every click count with performance tracking.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
