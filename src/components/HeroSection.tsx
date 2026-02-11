import React from 'react';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-24 lg:py-32">
            {/* Animated gradient orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
            <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow delay-500" />

            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNncmlkKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-50" />

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
                        Get Free Access
                    </a>
                    <a
                        href="mailto:iain@lumarr.co.uk?subject=GridTrack Pro Demo Request"
                        className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border border-gray-200 transition-colors"
                    >
                        Book a Demo
                    </a>
                </div>

                {/* Hero Image - Timeline screenshot in browser mockup with enhanced styling */}
                <div className="mt-16 relative">
                    {/* Glow effect behind */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-cyan-500/20 rounded-2xl blur-2xl" />

                    <div className="relative mx-auto max-w-5xl">
                        {/* Browser frame with enhanced shadow */}
                        <div className="relative bg-gray-900 rounded-xl shadow-2xl shadow-gray-900/30 overflow-hidden ring-1 ring-white/10">
                            {/* Browser dots */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="flex-1 mx-4">
                                    <div className="bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 max-w-md mx-auto">
                                        gridtrack.co.uk/timeline
                                    </div>
                                </div>
                            </div>
                            {/* Screenshot */}
                            <img
                                src="/assets/screenshots/timeline.png"
                                alt="Timeline View"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
