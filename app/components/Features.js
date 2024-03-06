const Features = () => {
    return (
        <>
            <section className="py-16">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-xl mx-auto text-center">
                        <h1 className="text-lg text-indigo-600 font-medium uppercase">
                            100+ Handcoded Components
                        </h1>
                        <h2 className="text-4xl py-6 text-gray-800 font-extrabold mx-auto md:text-5xl">
                        NextBlend helps you build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">websites quick </span> 🚀
                    </h2>
                    </div>

                    <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
                        <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
                            <div className="flex items-start">
                                <svg className="flex-shrink-0 text-green-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                                <div className="ml-5">
                                    <h3 className="text-xl font-semibold text-black">Simply Copy & Paste</h3>
                                        <p className="mt-3 text-base text-gray-600">
                                        Lorem ipsem dolor amet sit Lorem ipsem dolor amet sit Lorem ipsem dolor amet sit 
                                        </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <svg className="flex-shrink-0 text-blue-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <div className="ml-5">
                                    <h3 className="text-xl font-semibold text-black">
                                        Easy to Customize
                                    </h3>
                                    <p className="mt-3 text-base text-gray-600">
                                    Lorem ipsem dolor amet sit Lorem ipsem dolor amet sit Lorem ipsem dolor amet sit
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <svg className="flex-shrink-0 text-red-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <div className="ml-5">
                                    <h3 className="text-xl font-semibold text-black">
                                        Made with TailwindCSS
                                    </h3>
                                    <p className="mt-3 text-base text-gray-600">
                                    Lorem ipsem dolor amet sit Lorem ipsem dolor amet sit Lorem ipsem dolor amet sit
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <img
                                className="w-full rounded-lg shadow-xl" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/7/dashboard-screenshot.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features;

