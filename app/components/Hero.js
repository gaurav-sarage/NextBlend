import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <section>
            <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-lg text-indigo-600 font-medium">
                        Build products for everyone
                    </h1>
                    <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                        Streamline your frontend projects with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">our vast free UI toolkit</span>
                    </h2>
                    <p className="max-w-2xl text-lg mx-auto">
                        Boost productivity with sleek UI components, responsive website templates, all free and open-source.
                    </p>
                    <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                        <Link href="/components" className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                            Browse Components
                        </Link>
                        <Link href="https://github.com/gaurav-sarage/NextBlend" target="_blank" className="block py-2 px-4 text-gray-700 hover:text-white font-medium duration-150 hover:bg-black active:bg-gray-100 border rounded-lg">
                            Star on GitHub
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;