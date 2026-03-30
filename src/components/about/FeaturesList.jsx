const FeaturesList = () => {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            ),
            title: "Track Content",
            titleKh: "តាមដានរឿង",
            description: "Keep track of upcoming movies and TV series from all major platforms"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            title: "Release Dates",
            titleKh: "កាលបរិច្ឆេទចេញផ្សាយ",
            description: "Never miss a premiere with accurate release dates and times"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            title: "Smart Search",
            titleKh: "ស្វែងរកឆាប់រហ័ស",
            description: "Find your favorite content instantly with powerful search and filters"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            ),
            title: "Ratings & Reviews",
            titleKh: "ពិន្ទុ និងមតិយោបល់",
            description: "Read reviews and ratings from the community before watching"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Rewards System",
            titleKh: "ប្រព័ន្ធរង្វាន់",
            description: "Complete tasks and earn rewards for engaging with content"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
            ),
            title: "Bilingual Support",
            titleKh: "គាំទ្រភាសាទ្វេ",
            description: "Full support for both English and Khmer languages"
        }
    ];

    return (
        <div className="bg-zinc-950 border-t border-white/5 py-20 font-Kantumruy">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 rounded-full mb-4">
                        <span className="text-white text-sm font-semibold uppercase tracking-wider font-Kantumruy">មុខងារ • Features</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-Kantumruy">
                        មុខងារសំខាន់ៗ
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-Kantumruy">
                        Everything you need to discover and track your favorite entertainment
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative bg-zinc-900/50 border border-white/5 rounded-2xl p-8 cursor-pointer"
                        >
                            <div className="relative">
                                <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center mb-6 text-white">
                                    {feature.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 font-Kantumruy">
                                    {feature.titleKh}
                                </h3>
                                <h4 className="text-lg font-semibold text-gray-400 mb-3 font-Kantumruy">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-500 leading-relaxed font-Kantumruy">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesList;