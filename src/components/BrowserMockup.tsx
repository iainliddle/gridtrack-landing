import React from 'react';

interface BrowserMockupProps {
    url: string;
    children: React.ReactNode;
    className?: string;
}

export const BrowserMockup: React.FC<BrowserMockupProps> = ({ url, children, className = '' }) => {
    return (
        <div className={`relative ${className}`}>
            {/* Browser frame header */}
            <div className="bg-gray-800 rounded-t-xl p-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 mx-4">
                    <div className="bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400">
                        {url}
                    </div>
                </div>
            </div>
            {/* Screenshot content */}
            <div className="bg-white rounded-b-xl shadow-2xl overflow-hidden border border-gray-200">
                {children}
            </div>
        </div>
    );
};
