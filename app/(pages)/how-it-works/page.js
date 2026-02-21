"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HowitWorksPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
            <Navbar />

            <main className="flex-1" ref={containerRef}>
                <section className="py-20 sm:py-32 relative overflow-hidden">
                    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
                    </div>

                    <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
                        <motion.div
                            className="absolute top-[10%] left-[5%] sm:top-[15%] sm:left-[10%] w-20 sm:w-32 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 p-2 sm:p-3 opacity-50 dark:opacity-40"
                            animate={{ y: [0, -15, 0], rotate: [0, 5, -2, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="h-1 sm:h-2 w-1/3 bg-gray-200 dark:bg-gray-600 rounded mb-1 sm:mb-2 text-[0]"></div>
                            <div className="h-1 sm:h-2 w-full bg-gray-100 dark:bg-gray-700/50 rounded mb-1 text-[0]"></div>
                            <div className="h-1 sm:h-2 w-2/3 bg-gray-100 dark:bg-gray-700/50 rounded text-[0]"></div>
                        </motion.div>

                        <motion.div
                            className="absolute top-[40%] right-[2%] sm:top-[30%] sm:right-[10%] w-24 sm:w-36 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 p-2 sm:p-3 opacity-40 dark:opacity-30 flex gap-1.5 sm:gap-2 items-center"
                            animate={{ y: [0, 20, 0], rotate: [0, -5, 2, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 blur-[0.5px]"></div>
                            <div className="flex-1">
                                <div className="h-1 sm:h-1.5 w-1/2 bg-gray-200 dark:bg-gray-600 rounded mb-1"></div>
                                <div className="h-1 sm:h-1.5 w-full bg-gray-100 dark:bg-gray-700/50 rounded"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-[20%] left-[2%] sm:bottom-[15%] sm:left-[5%] w-20 sm:w-28 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 p-2 opacity-60 dark:opacity-40"
                            animate={{ y: [0, -10, 0], rotate: [0, -3, 3, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        >
                            <div className="h-4 sm:h-5 w-full bg-indigo-50 dark:bg-indigo-900/40 rounded mb-1.5 blur-[0.5px]"></div>
                            <div className="h-3 sm:h-4 w-1/2 bg-indigo-500/50 rounded mx-auto blur-[0.5px]"></div>
                        </motion.div>
                    </div>

                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
                            >
                                How does it work?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="max-w-xl mx-auto mt-6 text-lg leading-relaxed text-gray-500 dark:text-gray-400"
                            >
                                NextBlend simplifies the process of creating stylish and responsive websites. Build your next idea in minutes rather than days.
                            </motion.p>
                        </div>

                        <div className="relative mt-24">
                            {/* Animated SVG Path for larger screens */}
                            <div className="absolute inset-0 hidden md:block pt-12 items-center justify-center pointer-events-none z-0">
                                <svg width="100%" height="80" viewBox="0 0 1000 80" preserveAspectRatio="none" className="w-[80%] mx-auto opacity-30 dark:opacity-40">
                                    <path
                                        d="M0,40 C250,90 250,-10 500,40 C750,90 750,-10 1000,40"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeDasharray="8 8"
                                        className="text-gray-300 dark:text-gray-700"
                                    />
                                    <motion.path
                                        d="M0,40 C250,90 250,-10 500,40 C750,90 750,-10 1000,40"
                                        fill="none"
                                        stroke="url(#gradient)"
                                        strokeWidth="4"
                                        strokeDasharray="8 8"
                                        style={{ pathLength: pathLength }}
                                    />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#4f46e5" />
                                            <stop offset="50%" stopColor="#c026d3" />
                                            <stop offset="100%" stopColor="#f43f5e" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div className="relative grid grid-cols-1 text-center gap-y-16 md:grid-cols-3 gap-x-12 z-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="flex items-center justify-center w-20 h-20 bg-white dark:bg-gray-900 border-2 border-green-100 dark:border-green-900/50 rounded-full shadow-lg shadow-green-500/20">
                                        <svg className="flex-shrink-0 text-green-500 w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                        </svg>
                                    </div>
                                    <h3 className="mt-8 text-2xl font-bold leading-tight text-gray-900 dark:text-white">Simply Copy & Paste</h3>
                                    <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
                                        Effortlessly integrate pre-designed components into your project with a simple copy-and-paste approach.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: 0.2 }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="flex items-center justify-center w-20 h-20 bg-white dark:bg-gray-900 border-2 border-indigo-100 dark:border-indigo-900/50 rounded-full shadow-lg shadow-indigo-500/20">
                                        <svg className="flex-shrink-0 text-indigo-500 w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="mt-8 text-2xl font-bold leading-tight text-gray-900 dark:text-white">Easy to Customize</h3>
                                    <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
                                        Tailwind CSS powers NextBlend, offering extensive utility classes for full control over design elements.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="flex items-center justify-center w-20 h-20 bg-white dark:bg-gray-900 border-2 border-red-100 dark:border-red-900/50 rounded-full shadow-lg shadow-red-500/20">
                                        <svg className="flex-shrink-0 text-red-500 w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="mt-8 text-2xl font-bold leading-tight text-gray-900 dark:text-white">Built-in Animations</h3>
                                    <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
                                        Fluid and dynamic animations come out of the box so your app feels alive right away.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}