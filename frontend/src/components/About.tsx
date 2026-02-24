const expertiseAreas = [
    {
        icon: '☉',
        title: 'Birth Chart Analysis',
        desc: 'Deep interpretation of your natal chart to reveal your soul\'s blueprint and life purpose.',
    },
    {
        icon: '✦',
        title: 'Nakshatra System',
        desc: 'Precise lunar mansion analysis for personality insights, compatibility, and timing.',
    },
    {
        icon: '♄',
        title: 'Dasha & Predictive Astrology',
        desc: 'Accurate planetary period forecasting to navigate life\'s major transitions with clarity.',
    },
    {
        icon: '♀',
        title: 'Career & Marriage Guidance',
        desc: 'Dharmic guidance for professional success and harmonious relationships through Vedic wisdom.',
    },
];

export default function About() {
    return (
        <section id="about" className="relative py-20 md:py-28 bg-ivory-dark overflow-hidden">
            {/* Mandala background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "url('/assets/generated/mandala-pattern.dim_600x600.png')",
                    backgroundRepeat: 'repeat',
                    backgroundSize: '280px 280px',
                    opacity: 0.04,
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="font-sans text-xs tracking-[0.3em] uppercase text-saffron font-semibold mb-3">
                        Meet Your Guide
                    </p>
                    <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl mb-4">
                        Astrologer Nishant Madhav
                    </h2>
                    <div className="gold-divider" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Avatar & bio */}
                    <div className="flex flex-col items-center lg:items-start gap-8">
                        {/* Avatar */}
                        <div className="relative">
                            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gold/50 shadow-gold-lg">
                                <img
                                    src="/assets/generated/astrologer-avatar.dim_400x400.png"
                                    alt="Astrologer Nishant Madhav"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative ring */}
                            <div className="absolute -inset-3 rounded-full border border-gold/20 pointer-events-none" />
                            <div className="absolute -inset-6 rounded-full border border-gold/10 pointer-events-none" />
                            {/* Badge */}
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-saffron text-white font-sans text-xs font-semibold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                                ✦ Vedic Astrologer
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="text-center lg:text-left max-w-md">
                            <p className="font-sans text-base text-foreground/75 leading-relaxed mb-4">
                                Astrologer Nishant Madhav is a dedicated practitioner of Vedic astrology with deep expertise in the ancient Jyotish tradition. With years of study and thousands of consultations, he brings clarity, compassion, and cosmic wisdom to every reading.
                            </p>
                            <p className="font-sans text-base text-foreground/75 leading-relaxed">
                                His approach blends classical Vedic principles with practical life guidance, helping seekers understand their dharma and navigate life's journey with confidence and grace.
                            </p>
                        </div>
                    </div>

                    {/* Expertise & Mission */}
                    <div className="space-y-6">
                        <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                            Areas of Expertise
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {expertiseAreas.map((area) => (
                                <div
                                    key={area.title}
                                    className="gold-card rounded-xl p-5 group"
                                >
                                    <div className="text-2xl mb-3 text-gold">{area.icon}</div>
                                    <h4 className="font-serif font-semibold text-foreground text-base mb-2">
                                        {area.title}
                                    </h4>
                                    <p className="font-sans text-sm text-foreground/65 leading-relaxed">
                                        {area.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Mission statement */}
                        <div className="mt-8 p-6 rounded-2xl bg-gold/8 border border-gold/25 relative overflow-hidden">
                            <div className="absolute top-3 right-4 text-4xl text-gold/15 font-serif">"</div>
                            <p className="font-serif text-lg italic text-foreground/80 leading-relaxed relative z-10">
                                My mission is to illuminate your path with clarity, guide you toward your dharma, and help you align with the divine timing written in your stars — so you may live a life of purpose, peace, and spiritual fulfillment.
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="h-px flex-1 bg-gold/30" />
                                <span className="font-sans text-sm font-semibold text-gold tracking-wide">
                                    Nishant Madhav
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
