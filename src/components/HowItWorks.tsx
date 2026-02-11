import React from 'react';

export const HowItWorks: React.FC = () => {
    const steps = [
        {
            number: '1',
            title: 'Sign Up',
            description: 'Create your account and start your 14-day free trial. No credit card required.'
        },
        {
            number: '2',
            title: 'Add Your Projects',
            description: 'Import existing projects or create new ones. Set up your phases and milestones.'
        },
        {
            number: '3',
            title: 'Track & Deliver',
            description: 'Monitor progress, hit deadlines, and keep your team aligned.'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
                    Up and Running in Minutes
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center">
                            <div className="w-16 h-16 bg-blue-100 text-primary rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-600">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
