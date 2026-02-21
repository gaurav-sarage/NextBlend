"use client";
import { motion } from 'framer-motion';

export default function CTASimple() {
    return (
        <div className="bg-indigo-700/10 dark:bg-indigo-900/10 py-16 sm:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:justify-between lg:px-8"
            >
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    Ready to dive in?<br />Start your free trial today.
                </h2>
                <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                    <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Get started</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">Learn more <span aria-hidden="true">→</span></a>
                </div>
            </motion.div>
        </div>
    );
}
