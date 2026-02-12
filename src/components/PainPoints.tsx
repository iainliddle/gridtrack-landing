'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const PainPoints: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const painPoints = [
        {
            emoji: '📊',
            gradient: 'from-red-500 to-pink-600',
            title: 'Drowning in Spreadsheets',
            description: 'Tracking projects across multiple Excel files, losing version control, no single source of truth.'
        },
        {
            emoji: '⏰',
            gradient: 'from-amber-500 to-orange-600',
            title: 'Missing Critical Deadlines',
            description: 'POC expiry dates, wayleave deadlines, DNO milestones slipping through the cracks.'
        },
        {
            emoji: '🔍',
            gradient: 'from-blue-500 to-indigo-600',
            title: 'Zero Visibility',
            description: 'No idea which projects are on track, which are at risk, or where the bottlenecks are.'
        }
    ];

    return (
        <section className="py-20 bg-white" ref={ref}>
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center text-gray-900"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    Sound Familiar?
                </motion.h2>

                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 ease-out group"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            {/* Icon with gradient background */}
                            <motion.div
                                className={`w-14 h-14 bg-gradient-to-br ${point.gradient} rounded-xl flex items-center justify-center text-white text-2xl mb-6 transition-transform duration-300`}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                                {point.emoji}
                            </motion.div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {point.title}
                            </h3>
                            <p className="text-gray-600">
                                {point.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
