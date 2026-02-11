import React from 'react';

export const PainPoints: React.FC = () => {
    const painPoints = [
        {
            emoji: '📊',
            gradient: 'from-red-500 to-pink-600',
            title: 'Drowning in Spreadsheets',
            description: 'Tracking projects across multiple Excel files, losing version control, no single source of truth.'
        },
        {
            emoji: '⏰',
            gradient: 'from-amber-500 to-orange-600',
            title: 'Missing Critical Deadlines',
            description: 'POC expiry dates, wayleave deadlines, DNO milestones slipping through the cracks.'
        },
        {
            emoji: '🔍',
            gradient: 'from-blue-500 to-indigo-600',
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
                            className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 ease-out group"
                        >
                            {/* Icon with gradient background */}
                            <div className={`w-14 h-14 bg-gradient-to-br ${point.gradient} rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
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
