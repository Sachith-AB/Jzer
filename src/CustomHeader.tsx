import logo from './assets/logo.jpeg'
import { Link } from 'react-router-dom'

export default function CustomHeader() {
    const navLinks = ['Home', 'About', 'Contact', 'Services']
    
    return (
        <div className="w-screen bg-black text-white ml-[-1rem] md:ml-[-2rem] lg:ml-[-4rem]">
            <div className="px-4 md:px-8 lg:px-16">
                <div className="flex items-center justify-between py-4">
                    {/* Left side - Logo */}
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-16 w-16" />
                    </div>
                    
                    {/* Right side - Navigation */}
                    <nav className="flex gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link} 
                                to={`/${link.toLowerCase()}`}
                                className="hover:text-blue-400 transition-colors"
                            >
                                {link}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}
