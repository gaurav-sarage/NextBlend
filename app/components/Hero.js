import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <div className="overflow-x-hidden bg-gray-50">
            <section className="pt-12 bg-gray-50 sm:pt-16">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="px-6 text-lg text-black font-semibold">
                            Build products for everyone
                        </h1>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;