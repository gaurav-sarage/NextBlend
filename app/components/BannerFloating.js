"use client";
import { XMarkIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BannerFloating() {
    const [show, setShow] = useState(true);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    className="fixed top-4 inset-x-0 !z-[99] mx-auto w-max max-w-2xl px-4 pointer-events-none"
                >
                    <div className="flex items-center gap-x-6 rounded-full bg-gray-900 px-6 py-2.5 sm:px-3.5 shadow-xl pointer-events-auto border border-gray-700">
                        <p className="text-sm leading-6 text-white text-center sm:text-left">
                            <span className="font-semibold text-indigo-400">Generative AI</span>{' '}
                            is now available. <span aria-hidden="true">&middot;</span> Join the waitlist today.
                        </p>
                        <button type="button" onClick={() => setShow(false)} className="-m-1.5 flex-none p-1.5 hover:bg-gray-800 rounded-full transition-colors">
                            <span className="sr-only">Dismiss</span>
                            <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
