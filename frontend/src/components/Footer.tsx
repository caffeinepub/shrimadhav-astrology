import { Star, Heart } from 'lucide-react';

const BOOKING_URL = 'https://forms.gle/GSnWKXhVAdfjjjRx6';

export default function Footer() {
    const year = new Date().getFullYear();
    const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'shrimadhav-astrology');

    return (
        <footer className="relative bg-ivory-dark border-t border-gold/20 overflow-hidden">
            {/* Mandala background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "url('/assets/generated/mandala-pattern.dim_600x600.png')",
                    backgroundRepeat: 'repeat',
                    backgroundSize: '250px 250px',
                    opacity: 0.04,
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center">
                                <Star className="w-4 h-4 text-gold fill-gold/30" />
                            </div>
                            <div>
                                <div className="font-serif font-bold text-base text-foreground leading-tight tracking-wide">
                                    SHRIMADHAV ASTROLOGY
                                </div>
                                <div className="font-sans text-[10px] text-gold tracking-widest uppercase leading-tight">
                                    By Astrologer Nishant Madhav
                                </div>
                            </div>
                        </div>
                        <p className="font-sans text-sm text-foreground/60 leading-relaxed max-w-xs">
                            Illuminating lives through the ancient wisdom of Vedic astrology. Clarity, dharma, and spiritual alignment for your cosmic journey.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif font-semibold text-foreground mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {[
                                { label: 'About', href: '#about' },
                                { label: 'Services', href: '#services' },
                                { label: 'Courses', href: '#courses' },
                                { label: 'Contact', href: '#contact' },
                            ].map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="font-sans text-sm text-foreground/60 hover:text-gold transition-colors flex items-center gap-2"
                                    >
                                        <span className="text-gold/50 text-xs">✦</span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div>
                        <h4 className="font-serif font-semibold text-foreground mb-4">Begin Your Journey</h4>
                        <p className="font-sans text-sm text-foreground/60 mb-5 leading-relaxed">
                            Ready to discover what the stars have written for you? Book your personalized consultation today.
                        </p>
                        <a
                            href={BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-sans font-semibold text-sm px-6 py-2.5 rounded-full shadow-gold transition-all duration-300 hover:-translate-y-0.5"
                        >
                            🟠 Book Consultation
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="gold-divider mb-8" style={{ width: '100%', background: 'linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / 0.3), transparent)' }} />

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
                    <p className="font-sans text-xs text-foreground/45">
                        © {year} SHRIMADHAV ASTROLOGY. All rights reserved.
                    </p>
                    <p className="font-sans text-xs text-foreground/45 flex items-center gap-1">
                        Built with <Heart className="w-3 h-3 text-saffron fill-saffron" /> using{' '}
                        <a
                            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold hover:text-gold-dark transition-colors"
                        >
                            caffeine.ai
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
