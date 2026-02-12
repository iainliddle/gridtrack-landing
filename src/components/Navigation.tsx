'use client';
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Navigation: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.95)']
    );

    return (
        <motion.nav
            className="sticky top-0 z-50 backdrop-blur-xl border-b shadow-sm transition-all duration-300"
            style={{
                backgroundColor,
                borderColor: scrolled ? 'rgba(229, 231, 235, 0.5)' : 'rgba(229, 231, 235, 0.2)'
            }}
        >
            <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <img
                        src="/assets/logos/gridtrack-logo-cropped.png"
                        alt="GridTrack Pro"
                        style={{ height: '56px', width: 'auto' }}
                        className="object-contain"
                    />
                </motion.div>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    <motion.a
                        href="#features"
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                    >
                        Features
                    </motion.a>
                    <motion.a
                        href="#pricing"
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                    >
                        Pricing
                    </motion.a>
                    <motion.a
                        href="#faq"
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                    >
                        FAQ
                    </motion.a>
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center gap-4">
                    <motion.a
                        href="https://grid-track-pro.vercel.app/login"
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                    >
                        Log in
                    </motion.a>
                    <motion.a
                        href="https://grid-track-pro.vercel.app/register"
                        className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-md transition-colors shadow-sm hover:shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Join the Beta
                    </motion.a>
                </div>
            </div>
        </motion.nav>
    );
};
