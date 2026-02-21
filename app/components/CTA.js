"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";

const CTA = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [message, setMessage] = useState("");

    const handleSubscribe = async (e) => {
        e.preventDefault();

        if (!email) return;

        setStatus("loading");

        try {
            // Using FormSubmit for frictionless email sending without requiring backend SMTP auth.
            // Note: The first time this is invoked, an activation email will be sent to gauravsarage.work@gmail.com.
            const response = await fetch("https://formsubmit.co/ajax/gauravsarage.work@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    _subject: "You got a new subscriber",
                    "Subscriber Email": email,
                    _template: "box",
                })
            });

            if (response.ok) {
                setStatus("success");
                setMessage("You have subscribed to NextBlend!");
                setEmail("");

                // Reset status after a few seconds to hide the success message
                setTimeout(() => {
                    setStatus("idle");
                    setMessage("");
                }, 4000);
            } else {
                setStatus("error");
                setMessage("Something went wrong. Please try again.");
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch (error) {
            setStatus("error");
            setMessage("Network error. Please try again later.");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-8 relative z-10">
            <div className="relative isolate overflow-hidden bg-gray-50 dark:bg-gray-900 px-6 py-16 sm:py-24 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 lg:px-24">
                {/* Background decorative gradients */}
                <div className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
                    <div className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25 dark:opacity-20" style={{ clipPath: "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" }}></div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-8">
                    <div className="w-full lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
                        >
                            Get updates from NextBlend <br className="hidden lg:block" /> straight <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">into your inbox. </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mt-4 text-lg leading-8 text-gray-500 dark:text-gray-400"
                        >
                            Join our newsletter to get early access to new premium components, exclusive deals, and web design tips. We promise no spam.
                        </motion.p>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-start lg:justify-end relative">
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full max-w-md gap-3 relative">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="min-w-0 flex-auto rounded-xl border-0 bg-white/50 dark:bg-white/5 px-4 py-3.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 backdrop-blur-sm transition-all outline-none"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className="inline-flex flex-none items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Subscribing...
                                    </>
                                ) : (
                                    "Subscribe"
                                )}
                            </button>

                            {/* Animated Response Notification Pop-up */}
                            <AnimatePresence>
                                {status === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute -bottom-14 left-0 right-0 py-2 px-3 bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 text-sm font-medium rounded-lg flex items-center justify-center gap-2 border border-green-200 dark:border-green-500/20 shadow-sm"
                                    >
                                        <CheckCircle2 className="w-4 h-4" />
                                        {message}
                                    </motion.div>
                                )}
                                {status === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute -bottom-14 left-0 right-0 py-2 px-3 bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 text-sm font-medium rounded-lg flex items-center justify-center gap-2 border border-red-200 dark:border-red-500/20 shadow-sm"
                                    >
                                        <XCircle className="w-4 h-4" />
                                        {message}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;