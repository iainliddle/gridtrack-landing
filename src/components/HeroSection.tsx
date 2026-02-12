'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-24 lg:py-32">
            {/* Animated gradient orbs */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute top-40 right-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
            <motion.div
                className="absolute bottom-20 left-1/3 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.25, 0.45, 0.25],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                }}
            />

            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNncmlkKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-50" />

            <div className="relative max-w-7xl mx-auto px-6 text-center">
                {/* Headline */}
                <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Track Every Connection from Design to Energisation
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    Purpose-built project management for Independent Connection Providers and Charge Point Operators.
                    No more spreadsheets. No more missed deadlines.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                >
                    <motion.a
                        href="https://grid-track-pro.vercel.app/register"
                        className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl shadow-blue-lg hover:shadow-blue-xl transition-all relative overflow-hidden group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10">Get Free Access</span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={false}
                        />
                    </motion.a>
                    <motion.a
                        href="https://calendly.com/iainliddle-gridtrack/gridtrack-pro-demo"
                        className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border border-gray-200 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Book a Demo
                    </motion.a>
                </motion.div>

                {/* Hero Image - Timeline screenshot in browser mockup with enhanced styling */}
                <motion.div
                    className="mt-16 relative"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                >
                    {/* Glow effect behind */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-cyan-500/20 rounded-2xl blur-2xl" />

                    <motion.div
                        className="relative mx-auto max-w-5xl"
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {/* Browser frame with enhanced shadow */}
                        <div className="relative bg-gray-900 rounded-xl shadow-2xl shadow-gray-900/30 overflow-hidden ring-1 ring-white/10">
                            {/* Browser dots */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="flex-1 mx-4">
                                    <div className="bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 max-w-md mx-auto">
                                        gridtrack.co.uk/timeline
                                    </div>
                                </div>
                            </div>
                            {/* Screenshot */}
                            <img
                                src="/assets/screenshots/timeline.png"
                                alt="Timeline View"
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
