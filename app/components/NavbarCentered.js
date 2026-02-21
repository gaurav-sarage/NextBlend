"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NavbarCentered() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between items-center sm:justify-center">
                    <div className="flex sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon */}
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 justify-center items-center">
                        <div className="flex flex-shrink-0 items-center">
                            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Brand</span>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {['Home', 'Company', 'Team', 'Projects', 'Calendar'].map((item) => (
                                <a key={item} href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} className="sm:hidden border-t border-gray-200 dark:border-gray-800">
                    <div className="space-y-1 pb-3 pt-2">
                        {['Home', 'Company', 'Team', 'Projects', 'Calendar'].map((item) => (
                            <a key={item} href="#" className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white">
                                {item}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
