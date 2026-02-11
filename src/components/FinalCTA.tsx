import React from 'react';

export const FinalCTA: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to Take Control of Your Projects?
                </h2>
                <p className="text-xl text-blue-100 mb-10">
                    Join the ICPs and CPOs already delivering on time with GridTrack.
                </p>
                <a
                    href="/signup"
                    className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-primary font-semibold rounded-xl shadow-lg transition-colors"
                >
                    Start Your Free Trial
                </a>
            </div>
        </section>
    );
};
