import { useState } from "react";
import { Link } from "react-router-dom";
import media from "../data/media";

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // New state for Hamburger

    const filteredMovies = searchQuery
        ? media.filter(movie =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            movie.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
        ).slice(0, 6)
        : [];

    const genres = ["វាយប្រហារ", "រន្ធត់", "កំប្លែង", "មនោសញ្ចេតនា", "តុក្កតា", "វិទ្យាសាស្ត្រ", "ដំណើរផ្សងព្រេង"];
    const countries = ["កម្ពុជា", "កូរ៉េ", "ចិន", "ហូលីវូដ", "ជប៉ុន"];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white px-4 md:px-6 py-4 flex items-center justify-between shadow-lg border-b border-white/10">
            
            {/* 1. LEFT: Hamburger + Logo */}
            <div className="flex items-center gap-4">
                {/* Hamburger Button (Visible only on Mobile/Tablet) */}
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden p-1 hover:text-red-600 transition-colors cursor-pointer"
                >
                    {mobileMenuOpen ? (
                        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    ) : (
                        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                    )}
                </button>

                <Link to="/" className="flex-shrink-0">
                    <h1 className="text-red-600 text-xl md:text-2xl font-bold tracking-tighter uppercase">NaekWatch</h1>
                </Link>
            </div>

            {/* 2. MIDDLE: Desktop Navigation (Hidden on Mobile) */}
            <div className="hidden lg:flex space-x-7 font-medium font-Kantumruy items-center text-[18px]">
                <div className="group">
                    <button className="hover:text-red-600 transition-colors text-[17px] flex items-center gap-1 py-2 cursor-pointer">
                        ប្រភេទរឿង
                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {/* Megamenu Dropdown */}
                    <div className="absolute left-0 top-full w-full bg-black/95 backdrop-blur-md border-t border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl">
                        <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-red-600 font-bold mb-6 border-l-4 border-red-600 pl-3 uppercase">ប្រភេទរឿង</h3>
                                <div className="grid grid-cols-3 gap-y-4">
                                    {genres.map((g) => (<Link key={g} to={`/genre/${g}`} className="text-gray-400 hover:text-white">{g}</Link>))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-red-600 font-bold mb-6 border-l-4 border-red-600 pl-3 uppercase">ប្រទេស</h3>
                                <div className="grid grid-cols-3 gap-y-4">
                                    {countries.map((c) => (<Link key={c} to={`/country/${c}`} className="text-gray-400 hover:text-white">{c}</Link>))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/movies" className="hover:text-red-600 transition-colors">រឿងពេញ</Link>
                <Link to="/series" className="hover:text-red-600 transition-colors">រឿងភាគ</Link>
                <Link to="/watchlist" className="hover:text-red-600 transition-colors">បានមើល</Link>
                <Link to="/missions" className="hover:text-red-600 transition-colors text-[17px]">កិច្ចការ</Link>
                <Link to="/store" className="hover:text-red-600 transition-colors text-[17px]">ហាង</Link>
            </div>

            {/* 3. RIGHT: Search and Profile */}
            <div className="flex items-center space-x-3 md:space-x-5">
                <div className="relative flex items-center">
                    <div className={`flex items-center bg-zinc-900 border border-white/20 rounded-lg transition-all duration-500 ease-in-out ${isSearchOpen ? "w-40 md:w-80 px-3 py-2 opacity-100" : "w-0 opacity-0 overflow-hidden border-none"}`}>
                        <input 
                            type="text" 
                            placeholder="ស្វែងរក..." 
                            className="bg-transparent border-none outline-none text-sm w-full font-Kantumruy text-white"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <button 
                        onClick={() => { setIsSearchOpen(!isSearchOpen); if (isSearchOpen) setSearchQuery(""); }}
                        className="p-2 hover:text-red-600 transition-colors cursor-pointer"
                    >
                        {isSearchOpen ? <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                    </button>

                    {/* SEARCH RESULTS DROPDOWN */}
                    {isSearchOpen && searchQuery && (
                        <div className="absolute top-[60px] right-0 w-72 md:w-96 bg-zinc-950 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
                            {filteredMovies.length > 0 ? (
                                filteredMovies.map(movie => (
                                    <Link key={movie.id} to={`/movie/${movie.id}`} onClick={() => setIsSearchOpen(false)} className="flex items-center gap-3 p-3 hover:bg-white/5 border-b border-white/5 last:border-none">
                                        <img src={movie.image} alt={movie.title} className="w-20 h-28 object-cover rounded" />
                                        <div className="flex-1 overflow-hidden">
                                            <h4 className="text-sm font-bold truncate uppercase">{movie.title}</h4>
                                            <p className="text-xs text-gray-500">{movie.year} • {movie.type}</p>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="p-6 text-center text-gray-500">រកមិនឃើញទេ</div>
                            )}
                        </div>
                    )}
                </div>

                <Link to="/signup" className="hover:text-red-600 transition-colors">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </Link>
            </div>

            {/* 4. MOBILE MENU OVERLAY (The Drawer) */}
            <div className={`fixed inset-0 top-[72px] bg-black/95 z-40 transition-transform duration-300 lg:hidden ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex flex-col p-6 space-y-6 font-Kantumruy text-xl">
                    <Link to="/movies" onClick={() => setMobileMenuOpen(false)}>រឿងពេញ</Link>
                    <Link to="/series" onClick={() => setMobileMenuOpen(false)}>រឿងភាគ</Link>
                    <Link to="/watchlist" onClick={() => setMobileMenuOpen(false)}>បានមើល</Link>
                    <Link to="/missions" onClick={() => setMobileMenuOpen(false)}>កិច្ចការ</Link>
                    <Link to="/store" onClick={() => setMobileMenuOpen(false)}>ហាង</Link>
                    
                    <div className="h-px bg-white/10 w-full my-2"></div>
                    
                    <h3 className="text-red-600 font-bold uppercase text-sm tracking-widest">ប្រភេទរឿង</h3>
                    <div className="grid grid-cols-2 gap-4 text-[16px] text-gray-400">
                        {genres.map(g => <Link key={g} to={`/genre/${g}`} onClick={() => setMobileMenuOpen(false)}>{g}</Link>)}
                    </div>
                </div>
            </div>
        </nav>
    );
}