const ContactHeader = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black border-b border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.05),transparent_50%)]"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center font-Kantumruy">
                <div className="inline-block mb-4 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full">
                    <span className="text-red-500 text-sm font-semibold uppercase tracking-wider font-Kantumruy">ទំនាក់ទំនង • Contact</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-Kantumruy">
                    Get In <span className="text-red-600">Touch</span>
                </h1>

                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-Kantumruy">
                    ទាក់ទងមកយើងខ្ញុំសម្រាប់ជំនួយ មតិកែលម្អ ឬសំណួរផ្សេងៗ
                </p>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-3 font-Kantumruy">
                    Reach out to NaekWatch for support, feedback, or any inquiries
                </p>
            </div>
        </div>
    );
};

export default ContactHeader;