"use client";
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const features = [
    'Unlimited users & guests',
    'Advanced analytics dashboard',
    'SSO integration via SAML',
    'Dedicated account manager',
];

export default function FeatureList() {
    return (
        <div className="bg-white dark:bg-gray-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">All-in-one platform</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                    </p>
                    <dl className="mt-10 max-w-xl space-y-4 text-base leading-7 text-gray-600 dark:text-gray-400 lg:max-w-none">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                className="relative pl-9"
                            >
                                <dt className="inline font-semibold text-gray-900 dark:text-gray-200">
                                    <CheckCircleIcon className="absolute left-1 top-1 h-5 w-5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                                    {feature}
                                </dt>
                            </motion.div>
                        ))}
                    </dl>
                    <div className="mt-8 flex items-center gap-x-6">
                        <a href="#" className="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">
                            Get started <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
