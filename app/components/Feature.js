"use client";

import { motion } from "framer-motion";

const Feature = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-950 transition-colors">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
                    >
                        Why NextBlend?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-lg text-gray-600 dark:text-gray-400"
                    >
                        Everything you need to build stunning, modern applications out of the box.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="mt-16 lg:mt-20"
                >
                    <div className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-16 sm:grid-cols-2">
                        {/* Feature 1 */}
                        <motion.div variants={item} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-6 sm:mb-0">
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div className="sm:ml-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Made for Developers</h3>
                                <p className="mt-3 text-base text-gray-600 dark:text-gray-400">Tailored for developers with intuitive Next.js integration and customizable Tailwind CSS components for seamless coding experiences.</p>
                            </div>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div variants={item} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-xl bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 mb-6 sm:mb-0">
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="sm:ml-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Fast & Easy to Load</h3>
                                <p className="mt-3 text-base text-gray-600 dark:text-gray-400">Prioritize user experience with lightning-fast loading times and effortless navigation, ensuring optimal performance for every user.</p>
                            </div>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div variants={item} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-xl bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 mb-6 sm:mb-0">
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </div>
                            <div className="sm:ml-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">120+ Coded Blocks</h3>
                                <p className="mt-3 text-base text-gray-600 dark:text-gray-400">Access over 120 meticulously crafted and ready-to-use coded blocks, empowering developers to swiftly build dynamic web interfaces with ease.</p>
                            </div>
                        </motion.div>

                        {/* Feature 4 */}
                        <motion.div variants={item} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-6 sm:mb-0">
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                            </div>
                            <div className="sm:ml-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Filter Components</h3>
                                <p className="mt-3 text-base text-gray-600 dark:text-gray-400">Simplify component discovery and selection with advanced filtering options, enabling users to quickly find and integrate the perfect elements for their projects.</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Feature;