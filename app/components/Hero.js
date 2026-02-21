"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <>
            <div className="overflow-hidden relative bg-white dark:bg-gray-950">
                <section className="relative pt-12 pb-24 sm:pt-20 sm:pb-32 lg:pt-28 lg:pb-40">
                    <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-indigo-50/50 to-transparent dark:from-indigo-950/20" />

                    {/* Background decoration */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
                        aria-hidden="true"
                    >
                        <div className="absolute left-[calc(50%-40rem)] top-[calc(50%-40rem)] h-[80rem] w-[80rem] rounded-full blur-3xl bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-10 dark:opacity-20" />
                    </motion.div>

                    <div className="px-4 mx-auto max-w-7xl relative z-10 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Link href="/components" className="inline-flex justify-between items-center px-1 pr-4 mb-6 text-sm text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 transition-all" role="alert">
                                    <span className="text-xs font-semibold bg-indigo-600 text-white px-3 py-1 rounded-full mr-3 uppercase tracking-wider">New</span>
                                    <span className="font-medium mr-2">Premium React Components</span>
                                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl"
                            >
                                Build faster with <br className="hidden sm:block" />
                                <span className="relative inline-block mt-2">
                                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 blur-2xl filter opacity-40 rounded-full"></span>
                                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">NextBlend</span>
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300 sm:text-xl lg:text-2xl"
                            >
                                A highly customizable collection of responsive UI components. <br className="hidden lg:block" /> Just copy, paste, and ship your next project in record time.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
                            >
                                <Link
                                    href="/components"
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-indigo-600 rounded-full shadow-lg shadow-indigo-600/30 hover:bg-indigo-700 hover:shadow-indigo-700/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:-translate-y-1"
                                >
                                    Browse Components
                                </Link>

                                <Link
                                    href="/custom-components"
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-bold text-gray-900 transition-all duration-200 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:bg-gray-900 dark:text-white dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-indigo-400 hover:-translate-y-1 shadow-sm"
                                >
                                    Custom Components
                                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div >
        </>
    );
};

export default Hero;