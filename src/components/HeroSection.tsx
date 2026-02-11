import React from 'react';
import { BrowserMockup } from './BrowserMockup';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100/50 to-white py-20 lg:py-32">
            {/* Subtle cloud/sky background effect */}
            <div className="absolute inset-0 bg-[url('/clouds.svg')] opacity-30 bg-cover bg-center" />

            <div className="relative max-w-7xl mx-auto px-6 text-center">
                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
                    Track Every Connection from Design to Energisation
                </h1>

                {/* Subheadline */}
                <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                    Purpose-built project management for Independent Connection Providers and Charge Point Operators.
                    No more spreadsheets. No more missed deadlines.
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://grid-track-pro.vercel.app/register"
                        className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl shadow-blue-lg hover:shadow-blue-xl transition-all transform hover:scale-105"
                    >
                        Start 14-Day Free Trial
                    </a>
                    <a
                        href="mailto:iain@lumarr.co.uk?subject=GridTrack Pro Demo Request"
                        className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border border-gray-200 transition-colors"
                    >
                        Book a Demo
                    </a>
                </div>

                {/* Hero Image - Timeline screenshot in browser mockup */}
                <div className="mt-16 relative">
                    <div className="relative mx-auto max-w-5xl">
                        <BrowserMockup url="gridtrack.co.uk/timeline">
                            <img
                                src="/assets/screenshots/timeline.png"
                                alt="Timeline View"
                                className="w-full h-auto"
                            />
                        </BrowserMockup>
                    </div>
                    {/* Glow effect under the image */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-blue-500/20 blur-3xl pointer-events-none" />
                </div>
            </div>
        </section>
    );
};
