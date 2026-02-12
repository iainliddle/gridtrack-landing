'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const PricingSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="pricing" className="py-20 bg-gray-50" ref={ref}>
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        className="inline-block px-4 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4"
                        animate={{
                            y: [0, -5, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        🚀 Early Access
                    </motion.span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        We're in Beta - Completely Free!
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Be one of the first to try GridTrack Pro. Help shape the future of the product and get free access while we build.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                    {/* What You Get Now */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)' }}
                    >
                        {/* Animated border glow */}
                        <motion.div
                            className="absolute inset-0 rounded-2xl"
                            style={{
                                background: 'linear-gradient(90deg, #3b82f6, #6366f1, #3b82f6)',
                                backgroundSize: '200% 200%',
                                padding: '2px',
                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                maskComposite: 'exclude'
                            }}
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="text-2xl">🎁</span>
                                <h3 className="text-xl font-bold text-gray-900">What You Get Now</h3>
                            </div>

                            <div className="mb-6">
                                <span className="text-4xl font-bold text-gray-900">£0</span>
                                <span className="text-gray-500 ml-2">forever during beta</span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {[
                                    'Unlimited projects',
                                    'Visual timeline & Gantt charts',
                                    'Portfolio management',
                                    'Project status tracking',
                                    'DNO/IDNO filtering'
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center gap-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                                    >
                                        <motion.svg
                                            className="w-5 h-5 text-green-500 flex-shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                                            transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                                        >
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </motion.svg>
                                        <span className="text-gray-700">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.a
                                href="https://grid-track-pro.vercel.app/register"
                                className="block w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-center transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Get Free Access
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Coming Soon */}
                    <motion.div
                        className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-2xl">🛠️</span>
                            <h3 className="text-xl font-bold text-gray-900">Coming Soon</h3>
                        </div>

                        <p className="text-gray-600 mb-6">Features we're actively building based on user feedback:</p>

                        <ul className="space-y-3">
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
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                                >
                                    <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs">⏳</span>
                                    <span className="text-gray-700">{item}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            className="mt-8 p-4 bg-white rounded-xl border border-gray-200"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                        >
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold text-gray-900">Have a feature request?</span><br />
                                We're building this for you - let us know what you need!
                            </p>
                        </motion.div>
                    </motion.div>

                </div>

                {/* Beta note */}
                <motion.p
                    className="text-center text-gray-500 mt-8 text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    Early supporters will be grandfathered into special pricing when we launch paid plans.
                </motion.p>

            </div>
        </section>
    );
};
