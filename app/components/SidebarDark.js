"use client";
import { FolderIcon, HomeIcon, UsersIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SidebarDark() {
    return (
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 max-w-xs min-h-[500px]">
            <div className="flex h-16 shrink-0 items-center">
                <span className="text-white font-bold text-xl">Dashboard</span>
            </div>
            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? 'bg-gray-800 text-white'
                                                : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                        )}
                                    >
                                        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="mt-auto">
                        <a href="#" className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
