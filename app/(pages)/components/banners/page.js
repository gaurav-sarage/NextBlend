import Link from "next/link";

import React from "react";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Sidebar from "@/app/components/Sidebar";

const ListBannerComponents = () => {
    return (
        <>
            <Navbar />
            <section className="py-10 bg-white sm:py-12 lg:py-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-md mx-auto text-center">
                        <h2 className="text-black text-3xl font-semibold sm:text-4xl bg-gradient-to-r from-indigo-600 from-10% via-red-500 via-100% to-violet-600 to-100% inline-block text-transparent bg-clip-text">
                            Banner
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-6 lg:mt-10 lg:gap-6 lg:grid-cols-2">
                        {/* Centered Banner with Underline Link*/}
                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/banners/centered-banner-link-underline.png" alt="Centered Banner with Underline Link Image" />
                            </div>
                            <div className="flex items-start justify-between mt-4 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-black hover:text-indigo-600 sm:text-sm md:text-base">
                                        <Link href="/components/banners/centered-banner-link-underline">
                                            Centered Banner with Link Underline
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>

                                </div>
                            </div>
                        </div>

                        {/* Centered Banner with Badge */}
                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/banners/centered-banner-badge.png" alt="Centered Banner with Badge Image" />
                            </div>
                            <div className="flex items-start justify-between mt-4 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-black hover:text-indigo-600 sm:text-sm md:text-base">
                                        <Link href="/components/banners/centered-banner-badge">
                                            Centered Banner with Badge
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>

                                </div>
                            </div>
                        </div>

                        {/* Toggle Banner Button with Link */}
                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/banners/banner-toggle-link.png" alt="Banner with Toggle Button & Link Image" />
                            </div>
                            <div className="flex items-start justify-between mt-4 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-black hover:text-indigo-600 sm:text-sm md:text-base">
                                        <Link href="/components/banners/banner-toggle-link">
                                            Banner with Toggle Button & Link
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Sidebar />
            <Footer />
        </>
    )
}

export default ListBannerComponents;
