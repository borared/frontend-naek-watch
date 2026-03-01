import { Link } from "react-router-dom";

export default function Navbar() {
    const genres = ["វាយប្រហារ", "រន្ធត់", "កំប្លែង", "មនោសញ្ចេតនា", "តុក្កតា", "វិទ្យាសាស្ត្រ", "ដំណើរផ្សងព្រេង"];
    const countries = ["កម្ពុជា", "កូរ៉េ", "ចិន", "ហូលីវូដ", "ជប៉ុន"];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white px-6 py-4 flex items-center justify-between shadow-lg">
            <div className="flex items-center">
                <Link to="/">
                    <h1 className="text-red-600 text-2xl font-bold tracking-tighter">
                        NaekWatch
                    </h1>
                </Link>
            </div>

            <div className="hidden md:flex space-x-8 text-[18px] font-medium font-Kantumruy">
                {/* --- Categories Dropdown Logic Start --- */}
                <div className="group">
                    <Link to="/categories" className="hover:text-gray-400 transition-colors font-Kantumruy text-[17px] flex items-center gap-1">
                        ប្រភេទរឿង
                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </Link>

                    {/* Full Width Dropdown Menu */}
                    <div className="absolute left-0 top-full w-full bg-[#111] border-t border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl">
                        <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-2 gap-10">
                            {/* Genre Column */}
                            <div>
                                <h3 className="text-red-600 font-bold mb-4 border-b border-red-600/30 pb-2">ប្រភេទរឿង (Genres)</h3>
                                <div className="grid grid-cols-3 gap-3">
                                    {genres.map((genre) => (
                                        <Link key={genre} to={`/genre/${genre}`} className="text-gray-300 hover:text-white transition-colors font-Kantumruy">
                                            {genre}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Country Column */}
                            <div>
                                <h3 className="text-red-600 font-bold mb-4 border-b border-red-600/30 pb-2">ប្រទេស (Countries)</h3>
                                <div className="grid grid-cols-3 gap-3">
                                    {countries.map((country) => (
                                        <Link key={country} to={`/country/${country}`} className="text-gray-300 hover:text-white transition-colors font-Kantumruy">
                                            {country}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --- Categories Dropdown Logic End --- */}

                <Link to="/movies" className="hover:text-gray-400 transition-colors font-Kantumruy text-[17px]">រឿងពេញ</Link>
                <Link to="/series" className="hover:text-gray-400 transition-colors font-Kantumruy text-[17px]">រឿងភាគ</Link>
                <Link to="/watchlist" className="hover:text-gray-400 transition-colors font-Kantumruy text-[17px]">បានមើល</Link>
                <Link to="/missions" className="hover:text-gray-400 transition-colors font-Kantumruy text-[17px]">កិច្ចការ</Link>
                <Link to="/store" className="hover:text-gray-400 transition-colors font-Kantumruy text-[17px]">ហាង</Link>
                <Link to="/signup" className="hover:text-gray-400 transition-colors font-Kantumruy text-[17px]">គណនី</Link>
            </div>

            <div className="flex items-center space-x-5">
                <button className="hover:text-red-600 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <div className="h-6 w-px bg-white/30"></div>
                <Link to="/signup" className="hover:text-red-600 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </Link>
            </div>
        </nav>
    );
}