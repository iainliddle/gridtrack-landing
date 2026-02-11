import React from 'react';

export const PricingSection: React.FC = () => {
    return (
        <section id="pricing" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
                        🚀 Early Access
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        We're in Beta - Completely Free!
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Be one of the first to try GridTrack Pro. Help shape the future of the product and get free access while we build.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                    {/* What You Get Now */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 ring-2 ring-blue-500">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-2xl">🎁</span>
                            <h3 className="text-xl font-bold text-gray-900">What You Get Now</h3>
                        </div>

                        <div className="mb-6">
                            <span className="text-4xl font-bold text-gray-900">£0</span>
                            <span className="text-gray-500 ml-2">forever during beta</span>
                        </div>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                <span className="text-gray-700">Unlimited projects</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                <span className="text-gray-700">Visual timeline & Gantt charts</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                <span className="text-gray-700">Portfolio management</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                <span className="text-gray-700">Project status tracking</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                <span className="text-gray-700">DNO/IDNO filtering</span>
                            </li>
                        </ul>

                        <a href="https://grid-track-pro.vercel.app/register" className="block w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-center transition-colors">
                            Get Free Access
                        </a>
                    </div>

                    {/* Coming Soon */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-2xl">🛠️</span>
                            <h3 className="text-xl font-bold text-gray-900">Coming Soon</h3>
                        </div>

                        <p className="text-gray-600 mb-6">Features we're actively building based on user feedback:</p>

                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs">⏳</span>
                                <span className="text-gray-700">Document storage & management</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs">⏳</span>
                                <span className="text-gray-700">Team collaboration & permissions</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs">⏳</span>
                                <span className="text-gray-700">Email notifications & reminders</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs">⏳</span>
                                <span className="text-gray-700">Reporting & analytics dashboard</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs">⏳</span>
                                <span className="text-gray-700">Mobile app</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs">⏳</span>
                                <span className="text-gray-700">API integrations</span>
                            </li>
                        </ul>

                        <div className="mt-8 p-4 bg-white rounded-xl border border-gray-200">
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold text-gray-900">Have a feature request?</span><br />
                                We're building this for you - let us know what you need!
                            </p>
                        </div>
                    </div>

                </div>

                {/* Beta note */}
                <p className="text-center text-gray-500 mt-8 text-sm">
                    Early supporters will be grandfathered into special pricing when we launch paid plans.
                </p>

            </div>
        </section>
    );
};
