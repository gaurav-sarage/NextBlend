"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";
import { motion, AnimatePresence } from "framer-motion";

export default function ComponentPreview({ children, code, title, id }) {
    const [activeTab, setActiveTab] = useState("preview");
    const [copied, setCopied] = useState(false);

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full flex flex-col gap-4 mb-20 group scroll-mt-24" id={id}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
                <div className="flex items-center gap-2">
                    <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                        <button
                            onClick={() => setActiveTab("preview")}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === "preview"
                                ? "bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-gray-100"
                                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                                }`}
                        >
                            Preview
                        </button>
                        <button
                            onClick={() => setActiveTab("code")}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === "code"
                                ? "bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-gray-100"
                                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                                }`}
                        >
                            Code
                        </button>
                    </div>
                    <button
                        onClick={copyCode}
                        className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        title="Copy code"
                    >
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                </div>
            </div>

            <div className="relative border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-sm">
                <AnimatePresence mode="wait">
                    {activeTab === "preview" ? (
                        <motion.div
                            key="preview"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="w-full p-4 sm:p-10 min-h-[400px] flex items-center justify-center bg-gray-50/50 dark:bg-gray-950/50"
                        >
                            <div className="w-full flex-1">
                                {children}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="code"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="w-full relative max-h-[600px] overflow-auto bg-[#0d1117]"
                        >
                            <Highlight theme={themes.vsDark} code={code} language="jsx">
                                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                    <pre className={`${className} p-4 sm:p-6 text-sm font-mono whitespace-pre-wrap`} style={style}>
                                        {tokens.map((line, i) => (
                                            <div key={i} {...getLineProps({ line })}>
                                                <span className="inline-block w-8 opacity-30 select-none">{i + 1}</span>
                                                {line.map((token, key) => (
                                                    <span key={key} {...getTokenProps({ token })} />
                                                ))}
                                            </div>
                                        ))}
                                    </pre>
                                )}
                            </Highlight>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
