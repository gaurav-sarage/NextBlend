"use client";

import Link from 'next/link';

import Navbar from '@/app/components/Navbar';
import Sidebar from '@/app/components/Sidebar';
import React, { useState } from 'react';


const ComponentPage = () => {
    return (
        <>
            <Navbar />
            <section className="py-10 bg-white sm:py-12 lg:py-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-md mx-auto text-center">
                        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Marketing UI Components</h2>
                        <p className="mt-4 text-md leading-7 text-black font-semibold">View from our plethora of components built</p>
                        <span className="text-transparent font-semibold text-md bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">using Next.js & Tailwind</span>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-6 lg:grid-cols-3">
                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/tabs.png" alt="" />
                            </div>
                            <div className="absolute left-3 top-3">
                                <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-gray-900 rounded-full">New</p>
                            </div>
                            <div className="flex items-start justify-between mt-2 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        <Link href="/components/banners" title="Pagination Components">
                                            Banners
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="tabs.png" alt="" />
                            </div>
                            <div className="flex items-start justify-between mt-2 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        <Link href="/components/ctas" title="Input Components">
                                            CTA Sections
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/tabs.png" alt="" />
                            </div>
                            <div className="absolute left-3 top-3">
                                <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-gray-900 rounded-full">New</p>
                            </div>
                            <div className="flex items-start justify-between mt-2 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        <Link href="/components/team-sections" title="Alert Components">
                                            Team Sections
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/tabs.png" alt="" />
                            </div>
                            <div className="flex items-start justify-between mt-2 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        <Link href="/components/contact-sections" title="Banner Components">
                                            Contact Sections
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/tabs.png" alt="" />
                            </div>
                            <div className="absolute left-3 top-3">
                                <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-gray-900 rounded-full">New</p>
                            </div>
                            <div className="flex items-start justify-between mt-2 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        <Link href="/components/footers" title="Pagination Components">
                                            Footers
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="tabs.png" alt="" />
                            </div>
                            <div className="flex items-start justify-between mt-2 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        <Link href="/components/logo-grid" title="Input Components">
                                            Logo Grid
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/tabs.png" alt="" />
                            </div>
                            <div className="absolute left-3 top-3">
                                <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-gray-900 rounded-full">New</p>
                            </div>
                            <div className="flex items-start justify-between mt-2 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        <Link href="/components/heroes" title="Alert Components">
                                            Hero Sections
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/tabs.png" alt="" />
                            </div>
                            <div className="flex items-start justify-between mt-2 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        <Link href="/components/feature-sections" title="Banner Components">
                                            Feature Sections
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/tabs.png" alt="" />
                            </div>
                            <div className="flex items-start justify-between mt-2 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        <Link href="/components/pricing-sections" title="Banner Components">
                                            Pricing Sections
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/tabs.png" alt="" />
                            </div>
                            <div className="flex items-start justify-between mt-2 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        <Link href="/components/testimonials" title="Banner Components">
                                            Testimonials
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/tabs.png" alt="" />
                            </div>
                            <div className="flex items-start justify-between mt-2 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        <Link href="/components/stats" title="Banner Components">
                                            Stats
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/tabs.png" alt="" />
                            </div>
                            <div className="flex items-start justify-between mt-2 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        <Link href="/components/newsletter-sections" title="Banner Components">
                                            Newsletter Sections
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Sidebar />
        </>
    );
};

export default ComponentPage;