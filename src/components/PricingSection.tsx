'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const PricingSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="pricing" className="py-32 bg-gray-50" ref={ref}>
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-6"
                        animate={{
                            scale: [1, 1.1, 1],
                            boxShadow: [
                                '0 0 0px rgba(59, 130, 246, 0.4)',
                                '0 0 20px rgba(59, 130, 246, 0.4)',
                                '0 0 0px rgba(59, 130, 246, 0.4)'
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        🚀 Early Access Beta
                    </motion.span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        We're in Beta — Completely Free!
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Be one of the first to try GridTrack Pro. Help shape the future of the product and get free access while we build.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* What You Get Now - Enhanced with "Electricity" Border */}
                    <motion.div
                        className="group relative bg-white rounded-3xl p-10 shadow-xl overflow-hidden"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -10, boxShadow: '0 30px 60px -12px rgba(59, 130, 246, 0.3)' }}
                    >
                        {/* The "Electricity" Border Effect */}
                        <motion.div
                            className="absolute inset-0 rounded-3xl pointer-events-none"
                            style={{
                                padding: '2px',
                                background: 'linear-gradient(90deg, #3b82f6, #06b6d4, #ffffff, #06b6d4, #3b82f6)',
                                backgroundSize: '300% 100%',
                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                maskComposite: 'exclude'
                            }}
                            animate={{
                                backgroundPosition: ['0% 0%', '100% 0%'],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />

                        {/* Blue background glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                                    🎁
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">What You Get Now</h3>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold text-gray-900">£0</span>
                                    <span className="text-xl text-gray-500">/ month</span>
                                </div>
                                <p className="text-blue-600 font-semibold mt-2">Free forever for beta supporters</p>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {[
                                    'Unlimited projects',
                                    'Visual timeline & Gantt charts',
                                    'Portfolio management',
                                    'Project status tracking',
                                    'DNO/IDNO filtering'
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center gap-4"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                                    >
                                        <motion.div
                                            className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"
                                            initial={{ scale: 0 }}
                                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                                            transition={{ type: 'spring', delay: 0.5 + (i * 0.1) }}
                                        >
                                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </motion.div>
                                        <span className="text-gray-700 text-lg">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.a
                                href="https://grid-track-pro.vercel.app/register"
                                className="block w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-center transition-all shadow-lg shadow-blue-500/30"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Get Free Access
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Coming Soon - with Shimmer effect */}
                    <motion.div
                        className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm relative overflow-hidden"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {/* Shimmer overlay */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
                            animate={{
                                x: ['-200%', '200%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                                delay: 2
                            }}
                        />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-2xl">
                                    🛠️
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Coming Soon</h3>
                            </div>

                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">Features we're actively building based on user feedback:</p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    'Document storage & management',
                                    'Team collaboration & permissions',
                                    'Email notifications & reminders',
                                    'Reporting & analytics dashboard',
                                    'Mobile app',
                                    'API integrations'
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center gap-4 opacity-70"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 0.7, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                                    >
                                        <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                                            <span className="text-amber-600 text-[10px]">⏳</span>
                                        </div>
                                        <span className="text-gray-700 text-lg">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                                <p className="text-blue-800 font-medium">
                                    <span className="block mb-1 text-lg font-bold">Have a feature request?</span>
                                    We're building this for you — let us know what you need in the dashboard!
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Alpha/Beta Reward note */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    <p className="text-gray-500 text-lg flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Early supporters receive lifetime special pricing upon launch.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};
