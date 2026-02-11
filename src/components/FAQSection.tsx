import React from 'react';

export const FAQSection: React.FC = () => {
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
        <section id="faq" className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <details key={index} className="group bg-gray-50 rounded-xl p-6">
                            <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-gray-900">
                                {faq.question}
                                <svg
                                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="mt-4 text-gray-600">
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};
