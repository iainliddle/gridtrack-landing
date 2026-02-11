import React from 'react';

export const Navigation: React.FC = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src="/assets/logos/gridtrack-logo-cropped.png"
                        alt="GridTrack Pro"
                        style={{ height: '56px', width: 'auto' }}
                        className="object-contain"
                    />
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                        Features
                    </a>
                    <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                        Pricing
                    </a>
                    <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                        FAQ
                    </a>
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center gap-4">
                    <a href="https://grid-track-pro.vercel.app/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                        Log in
                    </a>
                    <a
                        href="https://grid-track-pro.vercel.app/register"
                        className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-md transition-colors shadow-sm hover:shadow-md"
                    >
                        Join the Beta
                    </a>
                </div>
            </div>
        </nav>
    );
};
