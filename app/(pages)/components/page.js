"use client";

import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Sidebar from '@/app/components/Sidebar';
import Footer from '@/app/components/Footer';
import { categories } from '@/lib/registry';
import { motion } from 'framer-motion';

export default function ComponentPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="max-w-2xl mx-auto text-center mb-16">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
                            >
                                Premium React <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Components</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mt-4 text-lg text-gray-600 dark:text-gray-300"
                            >
                                Beautifully designed, fully responsive UI components. Built with Next.js, Tailwind CSS and Framer Motion. Ready to drag and drop into your projects.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categories.map((category, idx) => (
                                <motion.div
                                    key={category.category}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300"
                                >
                                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700">
                                        <div className="w-full h-full flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-105">
                                            <div className={`w-full h-full rounded-xl bg-gradient-to-tr ${category.gradient} opacity-90 group-hover:opacity-100 transition-opacity flex items-center justify-center relative shadow-inner overflow-hidden`}>
                                                <motion.div
                                                    className="absolute inset-0 bg-white/10 dark:bg-black/10 mix-blend-overlay"
                                                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                                />
                                                <motion.div
                                                    animate={{
                                                        y: [0, -8, 0],
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                        delay: idx * 0.2
                                                    }}
                                                    className="relative z-10"
                                                >
                                                    <span className="text-6xl filter drop-shadow-xl">{category.icon}</span>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                <Link href={`/components/${category.category}`} className="focus:outline-none">
                                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                                    {category.title}
                                                </Link>
                                            </h3>
                                            <span className="inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-500/10 px-2.5 py-0.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                                                {category.components.length} {category.components.length === 1 ? 'component' : 'components'}
                                            </span>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                            Browse our collection of highly customizable {category.title.toLowerCase()} configured for modern websites.
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}