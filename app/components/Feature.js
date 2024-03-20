import Link from "next/link";

const Feature = () => {
    return (
        <section className="py-12 sm:py-10 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Why NextBlend ?</h2>
                </div>

                <div className="px-5 mt-12 bg-white lg:mt-6 lg:p-16">
                    <div className="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2">
                        <div className="flex items-start">
                            <svg className="flex-shrink-0 w-16 h-16 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                            <div className="ml-5">
                                <h3 className="text-lg font-semibold text-black">Made for Developers</h3>
                                <p className="mt-4 text-base text-black hover:text-indigo-600">Tailored for developers with intuitive Next.js integration and customizable Tailwind CSS components for seamless coding experiences.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <svg className="flex-shrink-0 w-16 h-16 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                            <div className="ml-5">
                                <h3 className="text-lg font-semibold text-black">Fast & Easy to Load</h3>
                                <p className="mt-4 text-base text-black hover:text-indigo-600">Prioritize user experience with lightning-fast loading times and effortless navigation, ensuring optimal performance for every user.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <svg className="flex-shrink-0 w-16 h-16 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                />
                            </svg>
                            <div className="ml-5">
                                <h3 className="text-lg font-semibold text-black">120+ Coded Blocks</h3>
                                <p className="mt-4 text-base text-black hover:text-indigo-600">Access over 120 meticulously crafted and ready-to-use coded blocks, empowering developers to swiftly build dynamic web interfaces with ease.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <svg className="flex-shrink-0 w-16 h-16 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            <div className="ml-5">
                                <h3 className="text-lg font-semibold text-black">Filter Components</h3>
                                <p className="mt-4 text-base text-black hover:text-indigo-600">Simplify component discovery and selection with advanced filtering options, enabling users to quickly find and integrate the perfect elements for their projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
};

export default Feature;