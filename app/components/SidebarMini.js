"use client";
import { HomeIcon, UserIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

export default function SidebarMini() {
    return (
        <div className="flex w-20 flex-col items-center gap-y-8 bg-white dark:bg-gray-950 py-8 border-r border-gray-200 dark:border-gray-800 min-h-[500px]">
            <div className="text-indigo-600 dark:text-indigo-400 rounded-full bg-indigo-50 dark:bg-indigo-900/20 p-2">
                <div className="h-8 w-8 rounded-full bg-indigo-600"></div>
            </div>
            <nav className="flex flex-1 flex-col justify-between">
                <ul role="list" className="flex flex-col items-center space-y-8">
                    {[HomeIcon, UserIcon, Cog6ToothIcon].map((Icon, idx) => (
                        <li key={idx}>
                            <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                <span className="sr-only">Nav icon</span>
                                <Icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
