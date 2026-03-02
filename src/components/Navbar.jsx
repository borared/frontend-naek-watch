import { useState } from "react";
import { Link } from "react-router-dom";
// Import your database (adjust the path based on where your movie.js is)
import movies from "../data/movies"; 

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // Filter logic: search by title or category
    const filteredMovies = searchQuery
        ? movies.filter(movie => 
            movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            movie.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
          ).slice(0, 6) // Limit to 6 results for better UI
        : [];

    const genres = ["វាយប្រហារ", "រន្ធត់", "កំប្លែង", "មនោសញ្ចេតនា", "តុក្កតា", "វិទ្យាសាស្ត្រ", "ដំណើរផ្សងព្រេង"];
    const countries = ["កម្ពុជា", "កូរ៉េ", "ចិន", "ហូលីវូដ", "ជប៉ុន"];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white px-6 py-4 flex items-center justify-between shadow-lg border-b border-white/10">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Link to="/">
                    <h1 className="text-red-600 text-2xl font-bold tracking-tighter uppercase">NaekWatch</h1>
                </Link>
            </div>

            {/* Main Navigation (Always Visible) */}
            <div className="hidden lg:flex space-x-7 font-medium font-Kantumruy items-center text-[18px]">
                <div className="group">
                    <button className="hover:text-red-600 transition-colors text-[17px] flex items-center gap-1 py-2 cursor-pointer">
                        ប្រភេទរឿង
                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {/* Categories Dropdown Content */}
                    <div className="absolute left-0 top-full w-full bg-black/95 backdrop-blur-md border-t border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl">
                        <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-red-600 font-bold mb-6 border-l-4 border-red-600 pl-3 uppercase text-[18px]">ប្រភេទរឿង</h3>
                                <div className="grid grid-cols-3 gap-y-4">
                                    {genres.map((g) => (<Link key={g} to={`/genre/${g}`} className="text-gray-400 hover:text-white transition-colors">{g}</Link>))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-red-600 font-bold mb-6 border-l-4 border-red-600 pl-3 uppercase text-[18px]">ប្រទេស</h3>
                                <div className="grid grid-cols-3 gap-y-4">
                                    {countries.map((c) => (<Link key={c} to={`/country/${c}`} className="text-gray-400 hover:text-white transition-colors">{c}</Link>))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to="/movies" className="hover:text-red-600 transition-colors text-[17px]">រឿងពេញ</Link>
                <Link to="/series" className="hover:text-red-600 transition-colors text-[17px]">រឿងភាគ</Link>
                <Link to="/watchlist" className="hover:text-red-600 transition-colors text-[17px]">បានមើល</Link>
                <Link to="/missions" className="hover:text-red-600 transition-colors text-[17px]">កិច្ចការ</Link>
                <Link to="/store" className="hover:text-red-600 transition-colors text-[17px]">ហាង</Link>
            </div>

            {/* Search and User Actions */}
            <div className="flex items-center space-x-5">
                <div className="relative flex items-center">
                    {/* Animated Search Input */}
                    <div className={`flex items-center bg-zinc-900 border border-white/20 rounded-lg transition-all duration-500 ease-in-out ${isSearchOpen ? "w-48 md:w-80 px-3 py-2 opacity-100" : "w-0 opacity-0 overflow-hidden border-none"}`}>
                        <input 
                            type="text" 
                            placeholder="ស្វែងរកចំណងជើងរឿង..." 
                            className="bg-transparent border-none outline-none text-sm w-full font-Kantumruy text-white placeholder:text-gray-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Search Toggle Button */}
                    <button 
                        onClick={() => {
                            setIsSearchOpen(!isSearchOpen);
                            if (isSearchOpen) setSearchQuery(""); 
                        }}
                        className="p-2 hover:text-red-600 transition-colors hover:cursor-pointer"
                    >
                        {isSearchOpen ? (
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        )}
                    </button>

                    {/* RESULTS DROPDOWN */}
                    {isSearchOpen && searchQuery && (
                        <div className="absolute top-[60px] right-0 w-72 md:w-96 bg-zinc-950 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-4 duration-300">
                            <div className="p-2 border-b border-white/5 text-white uppercase font-bold px-4 font-Kantumruy text-[15px]">លទ្ធផលស្វែងរក</div>
                            
                            {filteredMovies.length > 0 ? (
                                filteredMovies.map(movie => (
                                    <Link 
                                        key={movie.id} 
                                        to={`/movie/${movie.id}`} 
                                        onClick={() => setIsSearchOpen(false)}
                                        className="flex items-center gap-3 p-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-none group"
                                    >
                                        {/* Movie Poster Image */}
                                        <div className="w-20 h-28 flex-shrink-0 overflow-hidden rounded-md bg-zinc-800">
                                            <img 
                                                src={movie.image} 
                                                alt={movie.title} 
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                                            />
                                        </div>
                                        
                                        {/* Movie Details */}
                                        <div className="flex-1 overflow-hidden">
                                            <h4 className="text-[16px] font-bold truncate group-hover:text-red-500 transition-colors uppercase tracking-tight">
                                                {movie.title}
                                            </h4>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-[15px] bg-zinc-800 px-1.5 py-0.5 rounded text-gray-300 uppercase">{movie.type}</span>
                                                <span className="text-[15px] text-gray-500">{movie.year}</span>
                                                <div className="flex items-center gap-1 text-yellow-500">
                                                    <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588
                                                     1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1
                                                      1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                                    <span className="text-[15px] font-bold">{movie.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="px-4 py-8 text-center text-sm text-gray-500 font-Kantumruy text-[18px]">រកមិនឃើញរឿងដែលអ្នកចង់ស្វែងរកឡើយ</div>
                            )}
                        </div>
                    )}
                </div>

                <div className="h-6 w-px bg-white/20"></div>
                
                <Link to="/signup" className="hover:text-red-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </Link>
            </div>
        </nav>
    );
}