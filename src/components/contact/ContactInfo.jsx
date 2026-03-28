import React from "react";

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
        { name: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", link: "#" },
        { name: "Twitter", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", link: "#" },
        { name: "Instagram", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01", link: "#" }
    ];

    return (
        <div className="space-y-8">
            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <h2 className="text-3xl font-bold text-white mb-2">ព័ត៌មានទំនាក់ទំនង</h2>
                <p className="text-gray-400 mb-8">Contact Information</p>

                <div className="space-y-6">
                    {contactMethods.map((method, index) => (
                        <div key={index} className="group">
                            {method.link ? (
                                <a
                                    href={method.link}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-red-600/10 border border-red-600/20 rounded-xl flex items-center justify-center text-red-500 group-hover:bg-red-600/20 group-hover:scale-110 transition-all">
                                        {method.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-500 font-Kantumruy">{method.titleKh}</div>
                                        <div className="text-xs text-gray-600 mb-1">{method.title}</div>
                                        <div className="text-white font-medium group-hover:text-red-500 transition-colors">{method.value}</div>
                                    </div>
                                </a>
                            ) : (
                                <div className="flex items-start gap-4 p-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-red-600/10 border border-red-600/20 rounded-xl flex items-center justify-center text-red-500">
                                        {method.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-500 font-Kantumruy">{method.titleKh}</div>
                                        <div className="text-xs text-gray-600 mb-1">{method.title}</div>
                                        <div className="text-white font-medium">{method.value}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <p className="text-gray-400 mb-6">Stay connected on social media</p>

                <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            className="w-12 h-12 bg-red-600/10 border border-red-600/20 rounded-xl flex items-center justify-center text-red-500 hover:bg-red-600 hover:text-white hover:scale-110 transition-all duration-300"
                            aria-label={social.name}
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                            </svg>
                        </a>
                    ))}
                </div>
            </div>

            <div className="bg-gradient-to-br from-red-600/10 to-transparent border border-red-600/20 rounded-3xl p-8">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center text-red-500">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Need Help?</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We're here to help you track your favorite movies and TV series. Feel free to reach out anytime!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;