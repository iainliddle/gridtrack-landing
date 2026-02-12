'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { NetworkVisualization } from './NetworkVisualization';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1c] via-[#1e1b4b] to-[#0a0f1c]" />

            {/* Network visualization */}
            <NetworkVisualization />

            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-32">
                {/* Headline */}
                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-5xl mx-auto leading-tight mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="text-white">Track Every </span>
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Connection
                    </span>
                    <span className="text-white"> from Design to Energisation</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    Purpose-built project management for Independent Connection Providers and Charge Point Operators.
                    No more spreadsheets. No more missed deadlines.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    <motion.a
                        href="https://grid-track-pro.vercel.app/register"
                        className="group relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10">Get Free Access</span>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-50 blur-xl bg-blue-400 transition-opacity duration-300" />
                    </motion.a>
                    <motion.a
                        href="https://calendly.com/iainliddle-gridtrack/gridtrack-pro-demo"
                        className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Book a Demo
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-white/60"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
};
