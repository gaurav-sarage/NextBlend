"use client";

import { useState } from "react";

import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Footer from "@/app/components/Footer";

import {
    HiClipboardCopy,
    HiEye,
    HiEyeOff
} from "react-icons/hi";

const CenteredBannerBadgeComponent = () => {
    const [showCode, setShowCode] = useState(false);

    const toggleCode = () => {
        setShowCode(!showCode);
    };

    const copyCode = () => {
        navigator.clipboard.writeText(`import Link from "next/link";
        const Banner = () => {
            return (
                <div className="bg-gradient-to-r from-indigo-600 from-10%
                via-red-500 via-100% to-violet-600 to-100%">
                    <div className="max-w-screen-xl mx-auto px-4 py-3
                    flex items-start justify-between text-white
                    sm:items-center md:px-8">
                        <div className="flex-1 justify-center flex
                        items-start gap-x-4 sm:items-center">
                            <div className="flex-none p-1.5 px-4
                            rounded-full bg-primary flex items-center
                            justify-center font-medium text-sm">
                                News
                            </div>
                            <p className="font-medium p-2">
                                We just launched NextBlend!{" "}
                                <Link href="/" className="font-semibold
                                duration-150 hover:text-indigo-100
                                inline-flex items-center gap-x-1">
                                    Check out now
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5">
                                    <path fillRule="evenodd"
                                        d="M5 10a.75.75 0
                                        01.75-.75h6.638L10.23 7.29a.75.75
                                        0 111.04-1.08l3.5 3.25a.75.75 0
                                        010 1.08l-3.5 3.25a.75.75 0
                                        11-1.04-1.08l2.158-
                                        1.96H5.75A.75.75 0
                                        015 10z"
                                        clipRule="evenodd" />
                                </svg>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            );
        };
        
        export default Banner;`);
    };

    return (
        <>
            <Navbar />
            <section className="py-5 bg-white sm:py-6 lg:py-8">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-2xl">
                    <div className="max-w-md mx-auto text-center">
                        <h2 className="text-black text-3xl font-semibold sm:text-4xl bg-gradient-to-r from-indigo-600 from-10% via-red-500 via-100% to-violet-600 to-100% inline-block text-transparent bg-clip-text mb-2 sm:mb-4">
                            Centered Banner with Badge
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-3 md:mt-6 lg:gap-6 lg:grid-cols-1">
                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-200" src="/banners/centered-banner-badge.png" alt="Centered Banner with Badge Image" />
                            </div>
                        </div>
                    </div>

                    {/* Code Toggle Section */}
                    <div className="mt-8">
                        <div className="flex items-center justify-center">
                            <button className="mr-4 px-4 py-2 bg-black hover:bg-indigo-600 text-white rounded-md transition duration-300 focus:outline-none w-full" onClick={toggleCode}>
                                {showCode ?
                                    <HiEyeOff className="w-6 h-6 inline-block mr-2" /> :
                                    <HiEye className="w-6 h-6 inline-block mr-2" /> 
                                } 
                                {showCode ? "Hide Code" : "Show Code"}
                            </button>
                            {showCode && (
                                <button className="px- py-2 text-white rounded-md transition duration-300 bg-black hover:bg-indigo-600 focus:outline-none w-full" onClick={copyCode}>
                                    <HiClipboardCopy className="w-6 h-6 inline-block mr-2" /> Copy Code
                                </button>
                            )}
                        </div>
                        {showCode && (
                            <div className="mt-4 bg-gray-50 p-4 rounded-md">
                                <pre className="text-black overflow-auto max-w-full whitespace-pre-wrap bg-gradient-to-r from-indigo-600 from-10% via-red-500 via-100% to-violet-600 to-100% inline-block text-transparent bg-clip-text">
                                    {`import Link from "next/link";
const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-600 from-10%
        via-red-500 via-100% to-violet-600 to-100%">
            <div className="max-w-screen-xl mx-auto px-4 py-3
            flex items-start justify-between text-white
            sm:items-center md:px-8">
                <div className="flex-1 justify-center flex
                items-start gap-x-4 sm:items-center">
                    <div className="flex-none p-1.5 px-4
                    rounded-full bg-primary flex items-center
                    justify-center font-medium text-sm">
                        News
                    </div>
                    <p className="font-medium p-2">
                        We just launched NextBlend!{" "}
                        <Link href="/" className="font-semibold
                        duration-150 hover:text-indigo-100
                        inline-flex items-center gap-x-1">
                            Check out now
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5">
                            <path fillRule="evenodd"
                                d="M5 10a.75.75 0
                                01.75-.75h6.638L10.23 7.29a.75.75
                                0 111.04-1.08l3.5 3.25a.75.75 0
                                010 1.08l-3.5 3.25a.75.75 0
                                11-1.04-1.08l2.158-
                                1.96H5.75A.75.75 0
                                015 10z"
                                clipRule="evenodd" />
                        </svg>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;`}
                                </pre>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Sidebar />
            <Footer />
        </>
    );
};

export default CenteredBannerBadgeComponent;