'use client';
import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export const FAQSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: 'Who is GridTrack for?',
            answer: 'GridTrack is built specifically for Independent Connection Providers (ICPs) and Charge Point Operators (CPOs) managing electrical grid connection projects across the UK.'
        },
        {
            question: 'How does the free trial work?',
            answer: 'You get full access to all features for 14 days. No credit card required. At the end of your trial, choose to subscribe or your account will be paused.'
        },
        {
            question: 'Can my whole team use it?',
            answer: 'Yes! Invite unlimited team members. Everyone sees the same projects and data - your single source of truth.'
        },
        {
            question: 'Is my data secure?',
            answer: 'Absolutely. We use industry-standard encryption, secure cloud hosting, and regular backups. Your project data is safe with us.'
        }
    ];

    return (
        <section id="faq" className="py-20 bg-white" ref={ref}>
            <div className="max-w-3xl mx-auto px-6">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 rounded-xl overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ backgroundColor: 'rgb(249, 250, 251)' }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between cursor-pointer p-6 text-left"
                            >
                                <span className="font-semibold text-gray-900 pr-8">
                                    {faq.question}
                                </span>
                                <motion.svg
                                    className="w-5 h-5 text-gray-500 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </motion.svg>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <p className="px-6 pb-6 text-gray-600">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
