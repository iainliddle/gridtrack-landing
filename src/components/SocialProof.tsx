'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const SocialProof: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const badges = ['NERS Accredited', 'DNO Partners', 'ICP Certified', 'CPO Approved'];

    return (
        <section className="py-12 bg-gray-50 border-y border-gray-100" ref={ref}>
            <div className="max-w-7xl mx-auto px-6">
                <motion.p
                    className="text-center text-sm text-gray-500 mb-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
                >
                    Trusted by connection providers across the UK
                </motion.p>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                    {badges.map((badge, index) => (
                        <motion.span
                            key={index}
                            className="text-gray-400 font-semibold"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 0.6, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                            whileHover={{ opacity: 1, scale: 1.05 }}
                        >
                            {badge}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
};
