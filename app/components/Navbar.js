"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const navItems = [
        { title: "About", href: "/about" },
        { title: "Components", href: "/components" },
        { title: "Docs", href: "/docs" },
    ];

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setToggle(false);
        };
    }, [])

    return (
        <nav className={`bg-white md:text-sm ${toggle ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}`}>
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                <div className="flex items-center justify-between py-2 md:block">
                    <Link href="/" className="flex items-center">
                        <img
                            src="/nextblend.png"
                            width={200}
                            height={90}
                            alt="NextBlend Logo"
                        />
                    </Link>
                    <div className="md:hidden">
                        <button className="menu-btn text-black hover:text-indigo-600" onClick={() => setToggle(!toggle)}>
                            {
                                toggle ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>

                <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${toggle ? "block" : "hidden"}`}>
                    <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navItems.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-black hover:text-indigo-600">
                                        <Link href={item.href} className="block text-lg font-semibold">
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
                        <Link href="https://github.com/gaurav-sarage/NextBlend" target="_blank" className="block text-black hover:text-indigo-600">
                            <button type="button" className="text-white bg-black hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                </svg>
                                Star on GitHub
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;