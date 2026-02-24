import { useState } from 'react';
import { Phone, Mail, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useSubmitContact, useSubscribeNewsletter } from '../hooks/useQueries';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [formSuccess, setFormSuccess] = useState(false);
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterSuccess, setNewsletterSuccess] = useState(false);

    const submitContact = useSubmitContact();
    const subscribeNewsletter = useSubscribeNewsletter();

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;
        try {
            await submitContact.mutateAsync({
                name: form.name,
                email: form.email,
                phone: form.phone,
                message: form.message,
            });
            setFormSuccess(true);
            setForm({ name: '', email: '', phone: '', message: '' });
        } catch {
            // error handled by mutation state
        }
    };

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newsletterEmail) return;
        try {
            await subscribeNewsletter.mutateAsync(newsletterEmail);
            setNewsletterSuccess(true);
            setNewsletterEmail('');
        } catch {
            // error handled by mutation state
        }
    };

    return (
        <section id="contact" className="relative py-20 md:py-28 bg-background overflow-hidden">
            {/* Top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="font-sans text-xs tracking-[0.3em] uppercase text-saffron font-semibold mb-3">
                        Get In Touch
                    </p>
                    <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl mb-4">
                        Connect With Us
                    </h2>
                    <div className="gold-divider mb-6" />
                    <p className="font-sans text-base text-foreground/65 max-w-xl mx-auto">
                        Reach out for consultations, course inquiries, or any questions about your cosmic journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                            Contact Information
                        </h3>

                        <a
                            href="tel:8700810124"
                            className="flex items-center gap-4 p-5 gold-card rounded-xl group hover:no-underline"
                        >
                            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors flex-shrink-0">
                                <Phone className="w-5 h-5 text-gold" />
                            </div>
                            <div>
                                <p className="font-sans text-xs text-foreground/50 uppercase tracking-wide mb-0.5">Phone</p>
                                <p className="font-sans font-semibold text-foreground">8700810124</p>
                            </div>
                        </a>

                        <a
                            href="mailto:shrimadhavastrology@gmail.com"
                            className="flex items-center gap-4 p-5 gold-card rounded-xl group hover:no-underline"
                        >
                            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors flex-shrink-0">
                                <Mail className="w-5 h-5 text-gold" />
                            </div>
                            <div>
                                <p className="font-sans text-xs text-foreground/50 uppercase tracking-wide mb-0.5">Email</p>
                                <p className="font-sans font-semibold text-foreground text-sm break-all">
                                    shrimadhavastrology@gmail.com
                                </p>
                            </div>
                        </a>

                        {/* WhatsApp contact card */}
                        <a
                            href="https://wa.me/918700810124"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-5 rounded-xl border border-green-200 bg-green-50 hover:bg-green-100 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-sans text-xs text-green-700 uppercase tracking-wide mb-0.5 font-semibold">WhatsApp</p>
                                <p className="font-sans font-semibold text-green-800">Chat with us</p>
                            </div>
                        </a>

                        {/* Newsletter */}
                        <div className="p-6 gold-card rounded-xl mt-4">
                            <h4 className="font-serif font-semibold text-foreground mb-2">
                                ✦ Cosmic Newsletter
                            </h4>
                            <p className="font-sans text-sm text-foreground/60 mb-4">
                                Receive weekly astrological insights, planetary updates, and exclusive offers.
                            </p>
                            {newsletterSuccess ? (
                                <div className="flex items-center gap-2 text-green-600 font-sans text-sm font-semibold">
                                    <CheckCircle className="w-4 h-4" />
                                    You're subscribed! 🌟
                                </div>
                            ) : (
                                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                                    <input
                                        type="email"
                                        value={newsletterEmail}
                                        onChange={(e) => setNewsletterEmail(e.target.value)}
                                        placeholder="Your email address"
                                        required
                                        className="flex-1 font-sans text-sm px-3 py-2 rounded-lg border border-gold/30 bg-background focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 placeholder:text-foreground/40"
                                    />
                                    <button
                                        type="submit"
                                        disabled={subscribeNewsletter.isPending}
                                        className="bg-gold hover:bg-gold-dark text-white font-sans text-sm font-semibold px-4 py-2 rounded-lg transition-colors disabled:opacity-60 flex items-center gap-1"
                                    >
                                        {subscribeNewsletter.isPending ? (
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                        ) : (
                                            <Send className="w-4 h-4" />
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="gold-card rounded-2xl p-8">
                            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                                Send a Message
                            </h3>

                            {formSuccess ? (
                                <div className="flex flex-col items-center justify-center py-16 text-center">
                                    <CheckCircle className="w-16 h-16 text-gold mb-4" />
                                    <h4 className="font-serif text-2xl font-semibold text-foreground mb-2">
                                        Message Received!
                                    </h4>
                                    <p className="font-sans text-foreground/65 max-w-sm">
                                        Thank you for reaching out. Astrologer Nishant Madhav will get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setFormSuccess(false)}
                                        className="mt-6 font-sans text-sm text-gold hover:text-gold-dark underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleFormSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block font-sans text-sm font-medium text-foreground/70 mb-1.5">
                                                Full Name <span className="text-saffron">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleFormChange}
                                                required
                                                placeholder="Your full name"
                                                className="w-full font-sans text-sm px-4 py-3 rounded-xl border border-gold/30 bg-background focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 placeholder:text-foreground/35 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-sans text-sm font-medium text-foreground/70 mb-1.5">
                                                Email Address <span className="text-saffron">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleFormChange}
                                                required
                                                placeholder="your@email.com"
                                                className="w-full font-sans text-sm px-4 py-3 rounded-xl border border-gold/30 bg-background focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 placeholder:text-foreground/35 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-sans text-sm font-medium text-foreground/70 mb-1.5">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleFormChange}
                                            placeholder="+91 XXXXX XXXXX"
                                            className="w-full font-sans text-sm px-4 py-3 rounded-xl border border-gold/30 bg-background focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 placeholder:text-foreground/35 transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block font-sans text-sm font-medium text-foreground/70 mb-1.5">
                                            Message <span className="text-saffron">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleFormChange}
                                            required
                                            rows={5}
                                            placeholder="Tell us about your query or what you'd like guidance on..."
                                            className="w-full font-sans text-sm px-4 py-3 rounded-xl border border-gold/30 bg-background focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 placeholder:text-foreground/35 transition-colors resize-none"
                                        />
                                    </div>

                                    {submitContact.isError && (
                                        <p className="font-sans text-sm text-red-500">
                                            Something went wrong. Please try again.
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={submitContact.isPending}
                                        className="w-full bg-saffron hover:bg-saffron-dark text-white font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-gold transition-all duration-300 hover:shadow-gold-lg disabled:opacity-60 flex items-center justify-center gap-2"
                                    >
                                        {submitContact.isPending ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
