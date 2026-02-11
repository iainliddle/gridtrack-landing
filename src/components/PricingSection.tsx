import React from 'react';

export const PricingSection: React.FC = () => {
    const features = [
        'Unlimited projects',
        'Unlimited team members',
        'Visual timeline & Gantt charts',
        'Portfolio management',
        'Document storage',
        'Priority support'
    ];

    return (
        <section id="pricing" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-center text-gray-600 mb-12">
                    Start free, upgrade when you're ready
                </p>

                {/* Pricing Card */}
                <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow">
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Professional
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Everything you need to manage your projects
                        </p>

                        <div className="mb-6">
                            <span className="text-5xl font-bold text-gray-900">£250</span>
                            <span className="text-gray-600">/month</span>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition-colors">
                            Start 14-Day Free Trial
                        </button>
                        <p className="text-center text-sm text-gray-500 mt-4">
                            No credit card required. Cancel anytime.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
