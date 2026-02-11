import React from 'react';

export const SocialProof: React.FC = () => {
    return (
        <section className="py-12 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm text-gray-500 mb-8">
                    Trusted by connection providers across the UK
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
                    <span className="text-gray-400 font-semibold">NERS Accredited</span>
                    <span className="text-gray-400 font-semibold">DNO Partners</span>
                    <span className="text-gray-400 font-semibold">ICP Certified</span>
                    <span className="text-gray-400 font-semibold">CPO Approved</span>
                </div>
            </div>
        </section>
    );
};
