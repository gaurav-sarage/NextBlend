"use client";

export default function NavbarMinimal() {
    return (
        <nav className="bg-transparent absolute top-0 w-full z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-shrink-0">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">Minimal</span>
                    </div>
                    <div>
                        <a href="#" className="rounded-full bg-black/10 dark:bg-white/10 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white backdrop-blur-md hover:bg-black/20 dark:hover:bg-white/20 transition-colors">
                            Sign In
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
