'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useInView } from 'framer-motion';

export const AppShowcase: React.FC = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const showcases = [
        {
            title: 'Visualise Every Project Phase',
            description: 'Interactive Gantt charts show every project phase from design through energisation. Drag and drop to reschedule. Spot delays before they happen.',
            screenshot: '/assets/screenshots/timeline.png',
            url: 'gridtrack.co.uk/timeline',
            direction: 'right' as const
        },
        {
            title: 'See Everything at a Glance',
            description: 'Real-time status cards, priority flags, and stage tracking. Filter by DNO, IDNO, connection type, or portfolio. Your command center.',
            screenshot: '/assets/screenshots/dashboard.png',
            url: 'gridtrack.co.uk/dashboard',
            direction: 'left' as const
        },
        {
            title: 'Manage Multiple Clients with Ease',
            description: 'Group projects into portfolios for clients like Tesco, Co-Op, or Gridserve. See portfolio-level progress and deadlines at a glance.',
            screenshot: '/assets/screenshots/portfolios.png',
            url: 'gridtrack.co.uk/portfolios',
            direction: 'right' as const
        }
    ];

    return (
        <section ref={containerRef} className="relative py-32 bg-white">
            {/* Background transition from dark */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] to-transparent pointer-events-none"
                style={{
                    opacity: scrollYProgress
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    Everything You Need to Deliver On Time
                </motion.h2>

                <div className="space-y-40">
                    {showcases.map((showcase, index) => (
                        <ShowcaseItem key={index} showcase={showcase} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ShowcaseItem: React.FC<{ showcase: any; index: number }> = ({ showcase, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-150px" });

    return (
        <motion.div
            ref={ref}
            className={`flex flex-col ${showcase.direction === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Screenshot */}
            <motion.div
                className="flex-1 w-full"
                initial={{ opacity: 0, x: showcase.direction === 'right' ? 100 : -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: showcase.direction === 'right' ? 100 : -100 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.div
                    className="relative"
                    animate={isInView ? {
                        y: [0, -10, 0],
                    } : {}}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                    }}
                >
                    {/* Glow effect */}
                    <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />

                    {/* Browser mockup */}
                    <div className="relative bg-gray-900 rounded-2xl shadow-2xl shadow-gray-900/50 overflow-hidden ring-1 ring-white/10">
                        {/* Browser chrome */}
                        <div className="flex items-center gap-2 px-6 py-4 bg-gray-800 border-b border-gray-700">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="flex-1 mx-4">
                                <div className="bg-gray-700 rounded-lg px-4 py-2 text-xs text-gray-400 max-w-md">
                                    {showcase.url}
                                </div>
                            </div>
                        </div>
                        {/* Screenshot */}
                        <img
                            src={showcase.screenshot}
                            alt={showcase.title}
                            className="w-full h-auto"
                        />
                    </div>
                </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
                className={`flex-1 ${showcase.direction === 'left' ? 'lg:pr-12' : 'lg:pl-12'}`}
                initial={{ opacity: 0, x: showcase.direction === 'right' ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: showcase.direction === 'right' ? -100 : 100 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {showcase.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    {showcase.description}
                </p>
            </motion.div>
        </motion.div>
    );
};
