import Link from "next/link";

import React from "react";

import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Footer from "@/app/components/Footer";

const ListTestimonialsComponents = () => {
    return (
        <>
            <Navbar />
            <section className="py-10 bg-white sm:py-12 lg:py-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-md mx-auto text-center">
                        <h2 className="text-black text-3xl font-semibold sm:text-4xl bg-gradient-to-r from-indigo-600 from-10% via-red-500 via-100% to-violet-600 to-100% inline-block text-transparent bg-clip-text">
                            Testimonials
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-6 lg:mt-10 lg:gap-6 lg:grid-cols-2">
                        {/* First CTA Component */}
                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/tabs.png" alt="First CTA Component" />
                            </div>
                            <div className="flex items-start justify-between mt-4 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-black hover:text-indigo-600 sm:text-sm md:text-base">
                                        <Link href="/components/testimonials">
                                            First Testimonials Component
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Second CTA Component */}
                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/tabs.png" alt="First CTA Component" />
                            </div>
                            <div className="flex items-start justify-between mt-4 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-black hover:text-indigo-600 sm:text-sm md:text-base">
                                        <Link href="/components/testimonials">
                                            Second Testimonials Component
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Third CTA Component */}
                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/tabs.png" alt="First CTA Component" />
                            </div>
                            <div className="flex items-start justify-between mt-4 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-black hover:text-indigo-600 sm:text-sm md:text-base">
                                        <Link href="/components/testimonials">
                                            Third Testimonials Component
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Fourth CTA Component */}
                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/tabs.png" alt="First CTA Component" />
                            </div>
                            <div className="flex items-start justify-between mt-4 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-black hover:text-indigo-600 sm:text-sm md:text-base">
                                        <Link href="/components/testimonials">
                                            Fourth Testimonials Component
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
            <Footer />
        </>
    );
};

export default ListTestimonialsComponents;
