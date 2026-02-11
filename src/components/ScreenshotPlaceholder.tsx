import React from 'react';

interface ScreenshotPlaceholderProps {
    title: string;
    className?: string;
}

export const ScreenshotPlaceholder: React.FC<ScreenshotPlaceholderProps> = ({ title, className = '' }) => {
    return (
        <div className={`w-full aspect-video bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center border-2 border-dashed border-blue-300 ${className}`}>
            <div className="text-center px-6">
                <div className="text-6xl mb-4">📸</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
                <p className="text-sm text-gray-500">Screenshot Coming Soon</p>
            </div>
        </div>
    );
};
