import React from 'react';

export const PainPoints: React.FC = () => {
    const painPoints = [
        {
            emoji: '📊',
            bgColor: 'bg-red-100',
            title: 'Drowning in Spreadsheets',
            description: 'Tracking projects across multiple Excel files, losing version control, no single source of truth.'
        },
        {
            emoji: '⏰',
            bgColor: 'bg-amber-100',
            title: 'Missing Critical Deadlines',
            description: 'POC expiry dates, wayleave deadlines, DNO milestones slipping through the cracks.'
        },
        {
            emoji: '🔍',
            bgColor: 'bg-blue-100',
            title: 'Zero Visibility',
            description: 'No idea which projects are on track, which are at risk, or where the bottlenecks are.'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                    Sound Familiar?
                </h2>

                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {painPoints.map((point, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
                        >
                            <div className={`w-12 h-12 ${point.bgColor} rounded-xl flex items-center justify-center text-2xl mb-6`}>
                                {point.emoji}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {point.title}
                            </h3>
                            <p className="text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
