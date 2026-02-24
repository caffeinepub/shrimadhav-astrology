const BOOKING_URL = 'https://forms.gle/GSnWKXhVAdfjjjRx6';

const services = [
    {
        icon: '☉',
        title: 'Birth Chart Reading',
        subtitle: 'Natal Chart Analysis',
        description:
            'A comprehensive analysis of your birth chart revealing your personality, strengths, karmic patterns, and life purpose through the lens of Vedic Jyotish.',
        highlights: ['Lagna & Rashi Analysis', 'Planetary Positions', 'Life Purpose Insights'],
    },
    {
        icon: '♄',
        title: 'Career & Finance Consultation',
        subtitle: 'Professional Guidance',
        description:
            'Discover your ideal career path, auspicious timing for business ventures, and financial growth periods through planetary influences in your chart.',
        highlights: ['Career Direction', 'Business Timing', 'Financial Periods'],
    },
    {
        icon: '♀',
        title: 'Marriage & Relationship Guidance',
        subtitle: 'Compatibility & Harmony',
        description:
            'Explore compatibility, relationship timing, and the cosmic blueprint for your ideal partnership through Vedic kundali matching and synastry.',
        highlights: ['Kundali Matching', 'Relationship Timing', 'Compatibility Analysis'],
    },
    {
        icon: '☽',
        title: 'Dasha & Predictive Analysis',
        subtitle: 'Future Forecasting',
        description:
            'Navigate upcoming life phases with confidence using Vimshottari Dasha system and transit analysis to identify opportunities and challenges ahead.',
        highlights: ['Dasha Predictions', 'Transit Analysis', 'Muhurta Timing'],
    },
];

export default function Services() {
    return (
        <section id="services" className="relative py-20 md:py-28 bg-background overflow-hidden">
            {/* Subtle top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="font-sans text-xs tracking-[0.3em] uppercase text-saffron font-semibold mb-3">
                        Divine Guidance
                    </p>
                    <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl mb-4">
                        Consultation Services
                    </h2>
                    <div className="gold-divider mb-6" />
                    <p className="font-sans text-base text-foreground/65 max-w-xl mx-auto">
                        Each consultation is a sacred journey into your cosmic blueprint, offering personalized insights and actionable guidance.
                    </p>
                </div>

                {/* Service cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="gold-card rounded-2xl p-6 flex flex-col group"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-2xl text-gold mb-5 group-hover:bg-gold/20 transition-colors">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="font-serif font-bold text-lg text-foreground mb-1">
                                {service.title}
                            </h3>
                            <p className="font-sans text-xs text-saffron font-semibold tracking-wide uppercase mb-3">
                                {service.subtitle}
                            </p>

                            {/* Description */}
                            <p className="font-sans text-sm text-foreground/65 leading-relaxed mb-5 flex-1">
                                {service.description}
                            </p>

                            {/* Highlights */}
                            <ul className="space-y-1.5 mb-6">
                                {service.highlights.map((h) => (
                                    <li key={h} className="flex items-center gap-2 font-sans text-xs text-foreground/70">
                                        <span className="text-gold text-xs">✦</span>
                                        {h}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href={BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center bg-gold/10 hover:bg-gold hover:text-white border border-gold/50 hover:border-gold text-gold font-sans font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 mt-auto"
                            >
                                Book Now
                            </a>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="font-sans text-sm text-foreground/55 mb-4">
                        Not sure which consultation is right for you?
                    </p>
                    <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-gold transition-all duration-300 hover:shadow-gold-lg hover:-translate-y-0.5"
                    >
                        🟠 Book a Consultation
                    </a>
                </div>
            </div>

            {/* Subtle bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </section>
    );
}
