import React , { useState, useEffect }from "react";
import { Code , Menu , X } from 'lucide-react';
import { NAV_LINKS , PERSONAL_INFOR } from '../../utils/constants';
import { scrollToSection, useScrollSpy } from '../../hooks/useScrollSpy';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const activateSection = useScrollSpy(NAV_LINKS.map(link => link.id));

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const handleNavClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    }

    return (
        <nav className="{`fixed top-0 left-8 z-1000 w-full py-4 transition-all duration-300 ${isScrolled
        ? 'bg-black/30 backdrop-blur-lg'
        : 'bg-tranparent'
        }`}
        style={{ transform: 'tranlate3d(0,0,0)' }}">

        </nav>
    )
}

export default Navbar;