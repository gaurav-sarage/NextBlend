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

                    <div className="grid grid-cols-2 gap-6 mt-6 lg:mt-10 lg:gap-6 lg:grid-cols-3">
                        {/* Centered Banner with Underline Link*/}
                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <Link href="/components/banners/centered-banner-link-underline">
                                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/tabs.png" alt="Banner Centered with Underline Link Image" />
                                </Link>
                            </div>
                            <div className="absolute left-0 right-0 bottom-0 top-auto bg-gradient-to-t from-transparent to-black text-white text-center p-2">
                                <h3 className="text-xs font-bold hover:text-indigo-600 sm:text-sm md:text-base cursor-pointer">
                                    Centered Banner with Underline Link
                                </h3>
                            </div>
                            <div className="absolute left-3 top-3">
                                <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-gray-900 rounded-full">
                                    Newly Launched
                                </p>
                            </div>
                        </div>

                        {/* Centered Banner with Badge */}
                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <Link href="/components/banners/centered-banner-badge">
                                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/tabs.png" alt="Banner Centered with Badge Image" />
                                </Link>
                            </div>
                            <div className="absolute left-0 right-0 bottom-0 top-auto bg-gradient-to-t from-transparent to-black text-white text-center p-2">
                                <h3 className="text-xs font-bold hover:text-indigo-600 sm:text-sm md:text-base cursor-pointer">
                                    Centered Banner with Badge
                                </h3>
                            </div>
                            <div className="absolute left-3 top-3">
                                <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-gray-900 rounded-full">
                                    Newly Launched
                                </p>
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
