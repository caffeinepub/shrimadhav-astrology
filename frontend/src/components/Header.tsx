import { useState } from 'react';
import { Menu, X, Star, ShieldCheck } from 'lucide-react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { identity } = useInternetIdentity();
    const isAuthenticated = !!identity;

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Courses', href: '#courses' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-gold/20 shadow-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center">
                            <Star className="w-4 h-4 text-gold fill-gold/30" />
                        </div>
                        <div>
                            <div className="font-serif font-bold text-sm md:text-base text-foreground leading-tight tracking-wide">
                                SHRIMADHAV
                            </div>
                            <div className="font-sans text-[10px] md:text-xs text-gold tracking-widest uppercase leading-tight">
                                Astrology
                            </div>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="font-sans text-sm font-medium text-foreground/70 hover:text-gold transition-colors duration-200 tracking-wide"
                            >
                                {link.label}
                            </a>
                        ))}
                        {isAuthenticated && (
                            <a
                                href="/admin"
                                className="flex items-center gap-1.5 font-sans text-sm font-medium text-saffron hover:text-saffron-dark transition-colors duration-200 tracking-wide"
                            >
                                <ShieldCheck className="w-4 h-4" />
                                Admin
                            </a>
                        )}
                        <a
                            href="https://forms.gle/GSnWKXhVAdfjjjRx6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-saffron hover:bg-saffron-dark text-white font-sans text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                            Book Consultation
                        </a>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-gold hover:bg-gold/10 transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {menuOpen && (
                    <div className="md:hidden border-t border-gold/20 py-4 space-y-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="block font-sans text-sm font-medium text-foreground/70 hover:text-gold transition-colors py-2 px-2"
                            >
                                {link.label}
                            </a>
                        ))}
                        {isAuthenticated && (
                            <a
                                href="/admin"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-1.5 font-sans text-sm font-medium text-saffron hover:text-saffron-dark transition-colors py-2 px-2"
                            >
                                <ShieldCheck className="w-4 h-4" />
                                Admin Portal
                            </a>
                        )}
                        <a
                            href="https://forms.gle/GSnWKXhVAdfjjjRx6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-saffron hover:bg-saffron-dark text-white font-sans text-sm font-semibold px-5 py-2.5 rounded-full text-center transition-all duration-200 mt-2"
                        >
                            Book Consultation
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}
