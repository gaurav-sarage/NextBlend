import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <>
            <div className="overflow-x-hidden">
                <section className="mt-6 mb-6 sm:mb-12 sm:pt-12">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto text-center">
                            <Link href="/" class="inline-flex justify-between items-center px-1 pr-4 mb-2 text-sm text-black rounded-full" role="alert">
                                <span class="text-medium bg-primary-600 rounded-full text-white px-3 py-1.5 mr-3 bg-indigo-600">Build products for everyone!</span>
                            </Link>


                            <p className="mt-5 text-4xl font-bold leading-tight text-black sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                                Build websites faster with
                                <span className="relative inline-flex sm:inline">
                                    <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                                    <span className="relative"> NextBlend </span>
                                </span>
                            </p>

                            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                                <Link
                                    href="/components"
                                    className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    role="button"
                                >
                                    Browse Components
                                </Link>

                                <Link
                                    href="/custom-components"
                                    className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 sm:w-auto sm:mt-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-indigo-600 focus:bg-indigo-900 hover:text-white focus:text-white"
                                >
                                    Custom Components
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </>
    );
};

export default Hero;