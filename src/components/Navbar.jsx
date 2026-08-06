import React , { useState, useEffect }from "react";
import { Code , Menu , X } from 'lucide-react';


function Navbar() {
    const [isOpen , setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-gray-950 backdrop-blur-md border-gray-900">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-800">
                    <a href="#" className="font-mono font-bold text-lg tracking-wider text-emerald-400">&lt;DEV/&gt;</a>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <a href="#sobre" className="text-gray-600 hover:text-emerald-400 transition">Sobre</a>
                    <a href="#competencias" className="text-gray-600 hover:text-emerald-400 transition">Competências</a>
                    <a href="#projetos" className="text-gray-600 hover:text-emerald-400 transition">Projetos</a>
                    <a href="#contato" className="text-gray-600 hover:text-emerald-400 transition">Contato</a>
                </div>

                <button 
                 className="md:hidden text-gray-800"
                 onClick={() => setIsOpen(!isOpen)}
                 >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                 </button>
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col gap-4 mt-4">
                    <a href="#sobre" className="text-gray-600 hover:text-emerald-400 transition">Sobre</a>
                    <a href="#competencias" className="text-gray-600 hover:text-emerald-400 transition">Competências</a>
                    <a href="#projetos" className="text-gray-600 hover:text-emerald-400 transition">Projetos</a>
                    <a href="#contato" className="text-gray-600 hover:text-emerald-400 transition">Contato</a>
                </div>
            )}
        </nav>
    )
}

export default Navbar;