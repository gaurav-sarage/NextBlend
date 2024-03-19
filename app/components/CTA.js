import React from "react";

const CTA = () => {
    return (
        <div className="mx-auto max-w-7xl px-2 py-10 lg:px-0">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl font-bold text-black px-10">
                        Get updates from NextBlend straight <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">into your inbox. </span>
                    </h2>
                </div>
                <div className="mt-10 w-full md:w-1/2 lg:mt-0">
                    <form className="flex px-12 lg:justify-center">
                        <div className="flex w-full max-w-md items-center space-x-2">
                            <input
                                className="flex h-10 w-full rounded-lg border border-black/30 bg-transparent px-3 py-3 text-sm placeholder:text-black"
                                type="email"
                                required
                                placeholder="Enter your email"
                            ></input>
                            <button
                                type="button"
                                className="rounded-lg bg-black hover:bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CTA;