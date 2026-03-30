const ContactInfo = () => {
    const contactMethods = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Email",
            titleKh: "អ៊ីមែល",
            value: "support@naekwatch.com",
            link: "mailto:support@naekwatch.com"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: "Phone",
            titleKh: "ទូរស័ព្ទ",
            value: "+855 123 456 789",
            link: "tel:+855123456789"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Location",
            titleKh: "ទីតាំង",
            value: "Phnom Penh, Cambodia",
            link: null
        }
    ];

    const socialLinks = [
        { 
            name: "Facebook", 
            icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", 
            link: "#",
            bg: "bg-blue-600"
        },
        { 
            name: "X", 
            icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.694L2.306 21.75H.0l7.73-8.835L.456 2.25h6.677l4.86 6.348L17.15 2.25h.095zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z", 
            link: "#",
            bg: "bg-black"
        },
        { 
            name: "Instagram", 
            icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", 
            link: "#",
            bg: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400"
        }
    ];

    return (
        <div className="space-y-8 font-Kantumruy">
            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <h2 className="text-3xl font-bold text-white mb-2 font-Kantumruy">ព័ត៌មានទំនាក់ទំនង</h2>
                <p className="text-white mb-8 font-Kantumruy">Contact Information</p>

                <div className="space-y-6">
                    {contactMethods.map((method, index) => (
                        <div key={index} className="group">
                            {method.link ? (
                                <a
                                    href={method.link}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-all">
                                        {method.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm text-white font-Kantumruy">{method.titleKh}</div>
                                        <div className="text-xs text-white mb-1 font-Kantumruy">{method.title}</div>
                                        <div className="text-white font-medium  transition-colors font-Kantumruy">{method.value}</div>
                                    </div>
                                </a>
                            ) : (
                                <div className="flex items-start gap-4 p-4">
                                    <div className="flex-shrink-0 w-12 h-12  rounded-xl flex items-center justify-center text-white">
                                        {method.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm text-white font-Kantumruy">{method.titleKh}</div>
                                        <div className="text-xs text-white mb-1 font-Kantumruy">{method.title}</div>
                                        <div className="text-white font-medium font-Kantumruy">{method.value}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4 font-Kantumruy">Follow Us</h3>
                <p className="text-white mb-6 font-Kantumruy">Stay connected on social media</p>

                <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            className={`w-12 h-12 rounded-xl flex items-center justify-center ${social.bg} text-white hover:scale-110 transition-all duration-300`}
                            aria-label={social.name}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d={social.icon} />
                            </svg>
                        </a>
                    ))}
                </div>
            </div>

            <div className="bg-zinc-900/50 from-red-600/10 to-transparent border border-white/10 rounded-3xl p-8">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12  rounded-xl flex items-center justify-center text-white">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-2 font-Kantumruy">Need Help?</h3>
                        <p className="text-white leading-relaxed font-Kantumruy">
                            We're here to help you track your favorite movies and TV series. Feel free to reach out anytime!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;