import React , { useState, useEffect }from "react";
import { Code , Menu , X } from 'lucide-react';
import { Nav_LINKS , PERSONAL_INFOR } from '../../utils/constants';

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
        <h1>
            Teste
        </h1>
    )
}

export default Navbar;