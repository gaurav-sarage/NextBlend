"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react'

const Navbar = () => {

    const [state, setState] = useState(false);
    const [starCount, setStarCount] = useState(null);

    useEffect(() => {
        // Function to fetch star count from GitHub API
        const fetchRepoStars = async () => {
            try {
                const response = await fetch("https://api.github.com/repos/gaurav-sarage/NextBlend");
                const data = await response.json();
                setStarCount(data.stargazers_count);
            } catch (error) {
                console.error('Error fetching star count:', error);
            }
        };

        fetchRepoStars();
    }, []);

    const navigation = [
        { title: "How it Works", path: "/how-it-works" },
        { title: "Components", path: "/components" },
        { title: "Docs", path: "/docs" },
        { title: "Changelog", path: "/changelog" }
    ]

    return (
        <>
            <header>
                <nav className="items-center pt-3 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
                    <div className="flex justify-between">
                        <Link href="/">
                            <img
                                src="/nextblend.png"
                                width={200}
                                height={90}
                                alt="NextBlend Logo"
                            />
                        </Link>
                        <button className="text-gray-500 outline-none md:hidden"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                    <ul className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${state ? '' : 'hidden'}`}>
                        <li className="order-2 pb-5 md:pb-0">
                            <Link href="https://github.com/gaurav-sarage/NextBlend" target="_blank">
                                <button type="button" className="text-white bg-black hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                    </svg>
                                    Star on GitHub {" "} {starCount}
                                </button>
                            </Link>
                        </li>
                        <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
                            {
                                navigation.map((item, idx) => (
                                    <li className="text-black text-lg font-semibold hover:text-indigo-600" key={idx}>
                                        <Link href={item.path}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Navbar;