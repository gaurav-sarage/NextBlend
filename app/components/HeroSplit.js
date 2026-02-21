"use client";
import { motion } from 'framer-motion';

export default function HeroSplit() {
    return (
        <div className="relative bg-white dark:bg-gray-950 overflow-hidden">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-24 sm:mt-32 lg:mt-16"
                        >
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                                Data to enrich your business
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Get started</a>
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">Log in <span aria-hidden="true">→</span></a>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6"
                >
                    <img
                        className="aspect-[3/2] w-full bg-gray-50 dark:bg-gray-900 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full rounded-2xl lg:rounded-l-2xl shadow-xl"
                        src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2102&q=80"
                        alt=""
                    />
                </motion.div>
            </div>
        </div>
    );
}
