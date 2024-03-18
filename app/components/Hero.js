import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <>
            <div className="overflow-x-hidden bg-gray-50">
                <section className="pt-12 bg-gray-50 sm:pt-16">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto text-center">
                            <h1 className="px-6 text-lg text-gray-600 font-inter">Smart email campaign builder, made for Developers</h1>
                            <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
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