"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

const CustomComponentsPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
            <Navbar />
            <main className="flex-1 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/50 via-white to-white dark:from-indigo-900/20 dark:via-gray-950 dark:to-gray-950"></div>

                <section className="py-16 sm:py-24 lg:py-32">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="items-center gap-x-12 lg:flex">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, x: -30 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                                className="flex-1 hidden lg:block relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-20 dark:opacity-30"></div>
                                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" className="relative md:max-w-lg lg:max-w-xl rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 object-cover" alt="Custom Component Design" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="max-w-xl space-y-4 mt-6 lg:mt-0 lg:max-w-2xl"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.3 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase text-xs"
                                >
                                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                                    Custom Components
                                </motion.div>

                                <h2 className="text-gray-900 dark:text-white text-4xl font-extrabold sm:text-5xl lg:text-6xl tracking-tight !leading-tight">
                                    Build your SaaS <br className="hidden sm:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                                        solution with help
                                    </span>
                                    <br className="hidden sm:block" /> from NextBlend
                                </h2>

                                <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed sm:text-xl">
                                    Get your solutions crafted from us with the best team available for the task. Choose from a variety of options or create your own component. Powered by Next.js & Tailwind!
                                </p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="relative inline-flex pt-8 group"
                                >
                                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                                    <Link href="/pricing" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-xl" role="button">
                                        Get Premium Access
                                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default CustomComponentsPage;