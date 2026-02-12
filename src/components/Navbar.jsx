
export default function Navbar() {

    return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
            <h1 class="text-red-600 text-2xl font-bold tracking-tighter">NaekWatch</h1>
        </div>

        <div class="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#" className="hover:text-gray-400 transition-colors font-Kantumruy text-[17px]">ប្រភេទរឿង</a>
            <a href="#" className="hover:text-gray-400 transition-colors font-Kantumruy text-[17px]">រឿងពេញ</a>
            <a href="#" className="hover:text-gray-400 transition-colors font-Kantumruy text-[17px]">រឿងភាគ</a>
            <a href="#" className="hover:text-gray-400 transition-colors font-Kantumruy text-[17px]">បានមើល</a>
            <a href="#" className="hover:text-gray-400 transition-colors font-Kantumruy text-[17px]">គណនី</a>
        </div>

        <div className="flex items-center space-x-5">
            <button className="hover:text-red-600 transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </button>
            
            <div className="h-6 w-px bg-white"></div>

            <button className="hover:text-red-600 transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </button>
        </div>
    </nav>
);
}
