"use client";
import { motion } from 'framer-motion';
import { ShieldCheckIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const features = [
    { name: 'Push to deploy', description: 'Deploy anywhere instantly.', icon: CloudArrowUpIcon },
    { name: 'SSL certificates', description: 'Bank-level security defaults.', icon: LockClosedIcon },
    { name: 'Simple queues', description: 'Easily manage async tasks.', icon: FingerPrintIcon },
    { name: 'Advanced security', description: 'Built-in DDoS protection.', icon: ShieldCheckIcon },
];

export default function FeatureGrid() {
    return (
        <div className="bg-white dark:bg-gray-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Deploy faster</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Everything you need to deploy your app</p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="flex flex-col items-start bg-gray-50 dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className="rounded-lg bg-indigo-600 p-2 ring-1 ring-indigo-600">
                                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-gray-900 dark:text-white">
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
                                    {feature.description}
                                </dd>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
