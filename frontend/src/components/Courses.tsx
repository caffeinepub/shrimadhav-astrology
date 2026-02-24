const courses = [
    {
        id: 1,
        title: 'NAKSHATRA MASTER COURSE',
        subtitle: 'Complete Lunar Mansion System',
        description:
            'Master the 27 Nakshatras of Vedic astrology — their mythology, symbolism, planetary lords, and practical application in chart reading and prediction.',
        mrp: '₹35,000',
        price: '₹28,000',
        savings: 'Save ₹7,000',
        badge: 'Most Popular',
        icon: '🌙',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdYEPR3eRcOd1cXh68FXhff5ewMpoTml6fzNH8BJvHcC22VMw/viewform?usp=header',
        features: ['27 Nakshatra Deep Dives', 'Pada Analysis', 'Compatibility Techniques', 'Live Sessions'],
    },
    {
        id: 2,
        title: 'ADVANCED PREDICTIVE ASTROLOGY',
        subtitle: 'Dasha & Transit Mastery',
        description:
            'Elevate your predictive skills with advanced Dasha systems, transit analysis, Ashtakavarga, and timing techniques used by master Jyotishis.',
        mrp: '₹30,000',
        price: '₹21,000',
        savings: 'Save ₹9,000',
        badge: 'Best Value',
        icon: '🪐',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdQTUJfhdVQzn60UcLdNL4mBcle2D67_ypmkx_zpFESd_mSoQ/viewform?usp=header',
        features: ['Vimshottari Dasha', 'Ashtakavarga System', 'Transit Predictions', 'Case Studies'],
    },
    {
        id: 3,
        title: 'PREDICTIVE PRASHNA COURSE',
        subtitle: 'Horary Astrology Mastery',
        description:
            'Learn the ancient art of Prashna (horary) astrology — answering specific questions through the chart cast at the moment of inquiry.',
        mrp: '₹14,500',
        price: '₹11,000',
        savings: 'Save ₹3,500',
        badge: 'Specialized',
        icon: '❓',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe3SLqEK7S213E4Lk9cAfT7OsRVH2ZJx_fyP9x9m0SyC9hV6w/viewform?usp=header',
        features: ['Prashna Fundamentals', 'Question Analysis', 'Timing Techniques', 'Practice Charts'],
    },
    {
        id: 4,
        title: 'PANCHANG & REMEDIES COURSE',
        subtitle: 'Sacred Calendar & Healing',
        description:
            'Understand the Vedic Panchang system and learn powerful astrological remedies — mantras, gemstones, rituals, and muhurta selection for auspicious timing.',
        mrp: '₹15,000',
        price: '₹11,000',
        savings: 'Save ₹4,000',
        badge: 'Practical',
        icon: '🔱',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfYBQDmcnAag5e_Hj22ACr9mIsYnioe9DuAkBdGDotXLZC1Ow/viewform',
        features: ['Panchang Mastery', 'Muhurta Selection', 'Vedic Remedies', 'Gemstone Guidance'],
    },
];

export default function Courses() {
    return (
        <section id="courses" className="relative py-20 md:py-28 bg-ivory-dark overflow-hidden">
            {/* Mandala background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "url('/assets/generated/mandala-pattern.dim_600x600.png')",
                    backgroundRepeat: 'repeat',
                    backgroundSize: '300px 300px',
                    opacity: 0.05,
                }}
            />

            {/* Top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="font-sans text-xs tracking-[0.3em] uppercase text-saffron font-semibold mb-3">
                        Transform Your Knowledge
                    </p>
                    <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl mb-4">
                        Premium Courses
                    </h2>
                    <div className="gold-divider mb-6" />
                    <p className="font-sans text-base text-foreground/65 max-w-xl mx-auto">
                        Comprehensive Vedic astrology courses designed to take you from beginner to master practitioner.
                    </p>
                </div>

                {/* Course cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="gold-card rounded-2xl overflow-hidden flex flex-col group relative"
                        >
                            {/* Badge */}
                            <div className="absolute top-4 right-4 bg-saffron text-white font-sans text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide z-10">
                                {course.badge}
                            </div>

                            {/* Card header */}
                            <div className="bg-gold/8 border-b border-gold/20 p-6 pb-5">
                                <div className="text-3xl mb-3">{course.icon}</div>
                                <h3 className="font-serif font-bold text-base text-foreground leading-tight mb-1">
                                    {course.title}
                                </h3>
                                <p className="font-sans text-xs text-saffron font-semibold tracking-wide uppercase">
                                    {course.subtitle}
                                </p>
                            </div>

                            {/* Card body */}
                            <div className="p-6 flex flex-col flex-1">
                                {/* Pricing */}
                                <div className="mb-4">
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="font-sans text-2xl font-bold text-saffron">
                                            {course.price}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-sans text-sm text-foreground/45 line-through">
                                            MRP {course.mrp}
                                        </span>
                                        <span className="font-sans text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full">
                                            {course.savings}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="font-sans text-sm text-foreground/65 leading-relaxed mb-5 flex-1">
                                    {course.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-1.5 mb-6">
                                    {course.features.map((f) => (
                                        <li key={f} className="flex items-center gap-2 font-sans text-xs text-foreground/70">
                                            <span className="text-gold text-xs">✦</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                {/* Enroll button */}
                                <a
                                    href={course.formUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center bg-saffron hover:bg-saffron-dark text-white font-sans font-semibold text-sm px-5 py-3 rounded-full transition-all duration-300 hover:shadow-gold mt-auto"
                                >
                                    ✨ Enroll Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </section>
    );
}
