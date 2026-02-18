import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white px-6 py-4 flex items-center justify-between shadow-lg">
            <div className="flex items-center">
                <Link to="/">
                    <h1 className="text-red-600 text-2xl font-bold tracking-tighter">
                        NaekWatch
                    </h1>
                </Link>
            </div>

            <div className="hidden md:flex space-x-8 text-sm font-medium">
                {/* Changed <a> to <Link> for smoother React navigation */}
                <Link to="/categories" className="hover:text-gray-400 transition-colors font-Kantumruy text-[17px]">
                    ប្រភេទរឿង
                </Link>
                <Link to="/movies" className="hover:text-gray-400 transition-colors font-Kantumruy text-[17px]">
                    រឿងពេញ
                </Link>
                <Link to="/series" className="hover:text-gray-400 transition-colors font-Kantumruy text-[17px]">
                    រឿងភាគ
                </Link>
                <Link to="/watchlist" className="hover:text-gray-400 transition-colors font-Kantumruy text-[17px]">
                    បានមើល
                </Link>
				<Link to="/store" className="hover:text-gray-400 transition-colors font-Kantumruy text-[17px]">
                    ហាង
                </Link>
                <Link to="/signup" className="hover:text-gray-400 transition-colors font-Kantumruy text-[17px]">
                    គណនី
                </Link>
            </div>

            <div className="flex items-center space-x-5">
                <button className="hover:text-red-600 transition-colors cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>

                <div className="h-6 w-px bg-white/30"></div>

                <Link
                    to="/signup"
                    className="hover:text-red-600 transition-colors cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </Link>
            </div>
        </nav>
    );
}