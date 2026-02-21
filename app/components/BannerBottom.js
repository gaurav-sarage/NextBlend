"use client";
import { XMarkIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BannerBottom() {
    const [show, setShow] = useState(true);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-0 inset-x-0 z-50 bg-indigo-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
                >
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-center text-sm leading-6 text-white">
                        <p className="font-semibold text-center">
                            Our new features are live! Check out the dashboard.
                        </p>
                        <a href="#" className="flex-none rounded-full bg-white/10 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
                            Go to dashboard <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                    <button type="button" onClick={() => setShow(false)} className="absolute right-4 top-1/2 -translate-y-1/2 flex-none p-1 hover:bg-white/10 rounded-full transition-colors">
                        <span className="sr-only">Dismiss</span>
                        <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
