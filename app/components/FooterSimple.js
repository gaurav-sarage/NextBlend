"use client";

export default function FooterSimple() {
    return (
        <footer className="bg-white dark:bg-gray-950 py-8 border-t border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    {['About', 'Blog', 'Jobs', 'Press'].map((item) => (
                        <a key={item} href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                            <span className="sr-only">{item}</span>
                            {item}
                        </a>
                    ))}
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
                        &copy; 2024 Your Company, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
