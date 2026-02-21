"use client";

export default function FooterLarge() {
    return (
        <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">NextBlend</span>
                        <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                            Making the world a better place through constructing elegant hierarchies.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {['Marketing', 'Analytics', 'Commerce', 'Insights'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {['Pricing', 'Documentation', 'Guides', 'API Status'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
