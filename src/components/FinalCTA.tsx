'use client';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { NetworkVisualization } from './NetworkVisualization';

export const FinalCTA: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <section
            className="relative py-32 overflow-hidden bg-[#0a0f1c]"
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                setMousePos(null);
            }}
        >
            {/* Dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1c] via-[#1e1b4b] to-[#0a0f1c]" />

            {/* Subtle Network Visualization Background */}
            <div className="absolute inset-0 opacity-40">
                <NetworkVisualization
                    interactive={true}
                    mousePosition={mousePos}
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    Ready to Streamline Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Connections?</span>
                </motion.h2>

                <motion.p
                    className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Join the Independent Connection Providers delivering complex infrastructure projects on time.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.a
                        href="https://grid-track-pro.vercel.app/register"
                        className="group relative inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white text-xl font-bold rounded-2xl overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10">Get Free Access Now</span>
                        <svg className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>

                        {/* Pulsing glow background */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-40 blur-2xl bg-cyan-400 transition-opacity duration-300" />

                        {/* Continuous pulse */}
                        <motion.div
                            className="absolute inset-0 bg-white/20"
                            animate={{
                                opacity: [0, 0.2, 0],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.a>

                    <p className="mt-6 text-gray-400 text-lg">
                        No credit card required. Full access during beta.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
