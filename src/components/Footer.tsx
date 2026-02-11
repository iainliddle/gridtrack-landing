import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img
                            src="/assets/logos/gridtrack-logo-cropped.png"
                            alt="GridTrack Pro"
                            className="h-12 w-auto brightness-0 invert"
                        />
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        <a href="#features" className="hover:text-white transition-colors">
                            Features
                        </a>
                        <a href="#pricing" className="hover:text-white transition-colors">
                            Pricing
                        </a>
                        <a href="#faq" className="hover:text-white transition-colors">
                            FAQ
                        </a>
                        <a href="/privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="/terms" className="hover:text-white transition-colors">
                            Terms
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
                    © 2026 Lumarr Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
