"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function HeroCentered() {
    return (
        <div className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-gray-950">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-white to-white dark:from-indigo-900/30 dark:via-gray-950 dark:to-gray-950"></div>
            <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                <motion.h1
                    className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Center Stage Hero
                </motion.h1>
                <motion.p
                    className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Make a bold statement with a focused, centered layout that commands attention and drives users to take action.
                </motion.p>
                <motion.div
                    className="mt-10 flex items-center justify-center gap-x-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <a href="#" className="rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all">Get started</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white group">
                        Learn more <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
