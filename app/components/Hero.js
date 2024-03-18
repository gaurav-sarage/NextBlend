import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <>
            <div className="overflow-x-hidden">
                <section className="pt-12 sm:pt-16">
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
                        </div>
                    </div>
                </section>
            </div >
        </>
    );
};

export default Hero;