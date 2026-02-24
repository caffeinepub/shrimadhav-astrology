import { Sparkles } from 'lucide-react';

export default function Hero() {
    const handleExploreCourses = (e: React.MouseEvent) => {
        e.preventDefault();
        const el = document.getElementById('courses');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
            style={{
                backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-ivory/70" />

            {/* Mandala pattern overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "url('/assets/generated/mandala-pattern.dim_600x600.png')",
                    backgroundRepeat: 'repeat',
                    backgroundSize: '320px 320px',
                    opacity: 0.06,
                }}
            />

            {/* Celestial glow effects */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl pointer-events-none animate-glow-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-saffron/8 blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                {/* Decorative symbol */}
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
                    <span className="text-gold text-2xl animate-float">🔱</span>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
                </div>

                {/* Site name */}
                <p className="font-sans text-xs sm:text-sm tracking-[0.3em] uppercase text-gold font-semibold mb-2">
                    By Astrologer Nishant Madhav
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
                    Awaken to the Wisdom
                    <br />
                    <span className="text-gold italic">Written in Your Stars</span>
                </h1>

                {/* Divider */}
                <div className="gold-divider mb-6" />

                <p className="font-sans text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-10">
                    Personalized Vedic astrology consultations and transformational courses to align your life with divine timing.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://forms.gle/GSnWKXhVAdfjjjRx6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-gold transition-all duration-300 hover:shadow-gold-lg hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                    >
                        🟠 Book Consultation
                    </a>
                    <button
                        onClick={handleExploreCourses}
                        className="inline-flex items-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-white font-sans font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                    >
                        <Sparkles className="w-4 h-4" />
                        Explore Courses
                    </button>
                </div>

                {/* Stars decoration */}
                <div className="mt-16 flex items-center justify-center gap-2 text-gold/50">
                    {['✦', '✧', '✦', '✧', '✦'].map((s, i) => (
                        <span key={i} className="text-sm">{s}</span>
                    ))}
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
}
