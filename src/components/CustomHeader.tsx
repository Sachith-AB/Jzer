import logo from './../assets/logo.jpeg'
import { Link, useLocation } from 'react-router-dom'
import MainLayout from './MainLayout'

export default function CustomHeader() {
    const navLinks = ['Home', 'About', 'Contact', 'Services']
    const location = useLocation()
    
    return (
        <div className="w-screen bg-primary text-white">
            <MainLayout>
                <div className="flex items-center justify-between py-4">
                    {/* Left side - Logo */}
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-16 w-16" />
                    </div>
                    
                    {/* Right side - Navigation */}
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
                </div>
            </MainLayout>
        </div>
    )
}
