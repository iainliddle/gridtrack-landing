import React from 'react';
import { BrowserMockup } from './BrowserMockup';

export const FeaturesSection: React.FC = () => {
    const features = [
        {
            title: 'See Your Entire Portfolio at a Glance',
            description: 'Interactive Gantt charts show every project phase from design through energisation. Drag and drop to reschedule. Spot delays before they happen.',
            screenshot: '/assets/screenshots/timeline.png',
            url: 'gridtrack.co.uk/timeline',
            points: [
                'Visual phase tracking',
                'Drag and drop scheduling',
                'Milestone indicators'
            ],
            imagePosition: 'left'
        },
        {
            title: 'Know Exactly Where Every Project Stands',
            description: 'Real-time status cards, priority flags, and stage tracking. Filter by DNO, IDNO, connection type, or portfolio.',
            screenshot: '/assets/screenshots/dashboard.png',
            url: 'gridtrack.co.uk/dashboard',
            points: [
                'Real-time status overview',
                'Advanced filtering',
                'Priority management'
            ],
            imagePosition: 'right'
        },
        {
            title: 'Group Projects, Track Progress',
            description: 'Manage multi-site rollouts for clients like Tesco, Co-Op, or Gridserve. See portfolio-level progress at a glance.',
            screenshot: '/assets/screenshots/portfolios.png',
            url: 'gridtrack.co.uk/portfolios',
            points: [
                'Portfolio organisation',
                'Client-level reporting',
                'Progress tracking'
            ],
            imagePosition: 'left'
        }
    ];

    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
                    Everything You Need to Deliver On Time
                </h2>

                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`flex flex-col ${feature.imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 ${index < features.length - 1 ? 'mb-20' : ''}`}
                    >
                        <div className="flex-1">
                            <BrowserMockup url={feature.url}>
                                <img
                                    src={feature.screenshot}
                                    alt={feature.title}
                                    className="w-full h-auto"
                                />
                            </BrowserMockup>
                        </div>
                        <div className={`flex-1 ${feature.imagePosition === 'right' ? 'lg:pr-8' : 'lg:pl-8'}`}>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-lg text-gray-600 mb-6">
                                {feature.description}
                            </p>
                            <ul className="space-y-3">
                                {feature.points.map((point, pointIndex) => (
                                    <li key={pointIndex} className="flex items-center gap-3 text-gray-600">
                                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
