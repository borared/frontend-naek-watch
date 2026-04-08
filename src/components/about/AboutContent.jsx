const AboutContent = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 font-Kantumruy">
            {/* Story Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="inline-block px-4 py-2 bg-red-600/10 rounded-full mb-4">
                        <span className="text-white text-sm font-semibold uppercase tracking-wider font-Kantumruy">រឿងរ៉ាវរបស់យើង • Our Story</span>
                    </div>

                    <h2 className="text-4xl font-bold text-white leading-tight font-Kantumruy">
                        រឿងរ៉ាវរបស់ <span className="text-red-600">NaekWatch</span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed font-Kantumruy">
                        NaekWatch is a web-based entertainment platform designed to help users discover, track, and stay updated with movies and TV series from multiple platforms such as Netflix, Disney+, and cinemas.
                    </p>

                    <p className="text-gray-400 text-lg leading-relaxed font-Kantumruy">
                        The platform provides release dates, ratings, and content details in both English and Khmer, making it accessible for a wide audience across Cambodia and beyond.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-3xl blur-3xl"></div>
                    <div className="relative bg-zinc-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-1 font-Kantumruy">Lightning Fast</h3>
                                    <p className="text-gray-400 font-Kantumruy">Built with React JS for blazing fast performance and smooth interactions</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-1 font-Kantumruy">ភាសាទ្វេ • Bilingual</h3>
                                    <p className="text-gray-400 font-Kantumruy">Full bilingual support in English and Khmer for maximum accessibility</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-1 font-Kantumruy">Real-time Updates</h3>
                                    <p className="text-gray-400 font-Kantumruy">Stay informed with the latest release dates, ratings, and content details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;