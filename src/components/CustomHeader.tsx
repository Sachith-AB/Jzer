import logo from './../assets/logo.jpeg'
import { Link, useLocation } from 'react-router-dom'
import MainLayout from './MainLayout'
import { useState } from 'react'
import useIsMobile from '../hooks/useIsMobile'
import { MdMenu, MdClose } from 'react-icons/md'

export default function CustomHeader() {
    const navLinks = ['Home', 'About', 'Contact', 'Services'];
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = useIsMobile();

    const mobileViewMenuItem = () => {
        return (
            <nav className="flex flex-col gap-3">
                {navLinks.map((link) => {
                    const linkPath = `/${link.toLowerCase()}`
                    const isActive = location.pathname === linkPath || (link === 'Home' && location.pathname ==='/')
                    
                    return (
                        <Link
                            key={link} 
                            to={linkPath}
                            onClick={() => setMenuOpen(false)}
                            className={isActive ? 'text-secondary transition-colors' : 'text-accent hover:text-secondary transition-colors'}
                        >
                            {link}
                        </Link>
                    )
                })}
            </nav>
        )
    }
    
    return (
        <div className="w-full bg-primary text-white relative">
            <MainLayout>
                <div className="flex items-center justify-between py-4">
                    {/* Left side - Logo */}
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-16 w-16" />
                    </div>
                    
                    {/* Right side - Navigation */}
                    {
                        isMobile ? (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <MdClose size={32} /> : <MdMenu size={32} />}
                            </button>
                        ) : (
                            <nav className="flex gap-6">
                                {navLinks.map((link) => {
                                    const linkPath = `/${link.toLowerCase()}`
                                    const isActive = location.pathname === linkPath || (link === 'Home' && location.pathname ==='/')
                                    
                                    return (
                                        <Link
                                            key={link} 
                                            to={linkPath}
                                            className={isActive ? 'text-secondary transition-colors' : 'text-accent hover:text-secondary transition-colors'}
                                        >
                                            {link}
                                        </Link>
                                    )
                                })}
                            </nav>
                        )
                    }
                </div>
            </MainLayout>
            
            {/* Mobile Menu - Absolute Positioned */}
            {isMobile && menuOpen && (
                <div className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xs border-b border-accent/30 z-50 p-4">
                    {mobileViewMenuItem()}
                </div>
            )}
        </div>
    )
}
