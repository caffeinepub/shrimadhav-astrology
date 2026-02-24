import { useState } from 'react';
import { Star, LogOut, Users, MessageSquare, Mail, Phone, User, RefreshCw, ShieldAlert, Loader2 } from 'lucide-react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useQueryClient } from '@tanstack/react-query';
import { useGetContactSubmissions, useGetNewsletterSubscribers } from '../hooks/useQueries';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import type { ContactEntry } from '../backend';
import type { Principal } from '@dfinity/principal';

function LoginScreen() {
    const { login, loginStatus } = useInternetIdentity();
    const isLoggingIn = loginStatus === 'logging-in';

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/40 mb-4">
                        <Star className="w-7 h-7 text-gold fill-gold/30" />
                    </div>
                    <h1 className="font-serif text-3xl font-bold text-foreground tracking-tight">
                        SHRIMADHAV
                    </h1>
                    <p className="font-sans text-sm text-gold tracking-widest uppercase mt-1">
                        Admin Portal
                    </p>
                </div>

                {/* Card */}
                <div className="gold-card rounded-2xl p-8 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-saffron/10 border border-saffron/30 mb-5">
                        <ShieldAlert className="w-5 h-5 text-saffron" />
                    </div>
                    <h2 className="font-serif text-xl font-bold text-foreground mb-2">
                        Admin Access Required
                    </h2>
                    <p className="font-sans text-sm text-muted-foreground mb-8 leading-relaxed">
                        This portal is restricted to authorized administrators only. Please log in with your identity to continue.
                    </p>
                    <button
                        onClick={() => login()}
                        disabled={isLoggingIn}
                        className="w-full bg-saffron hover:bg-saffron-dark text-white font-sans font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                        {isLoggingIn ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Logging in…
                            </>
                        ) : (
                            'Login to Admin Portal'
                        )}
                    </button>
                    <p className="font-sans text-xs text-muted-foreground mt-4">
                        Secured via Internet Identity
                    </p>
                </div>

                <p className="text-center font-sans text-xs text-muted-foreground mt-6">
                    <a href="/" className="hover:text-gold transition-colors">← Back to website</a>
                </p>
            </div>
        </div>
    );
}

function ContactSubmissionsTab() {
    const { data, isLoading, isError, refetch, isFetching } = useGetContactSubmissions();

    const allEntries: Array<{ principal: string; entry: ContactEntry }> = [];
    if (data) {
        data.forEach(([principal, entries]: [Principal, ContactEntry[]]) => {
            entries.forEach((entry) => {
                allEntries.push({ principal: principal.toString(), entry });
            });
        });
    }

    if (isLoading) {
        return (
            <div className="space-y-3 mt-4">
                {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-20 w-full rounded-xl" />
                ))}
            </div>
        );
    }

    if (isError) {
        return (
            <div className="mt-4 p-6 rounded-xl border border-destructive/30 bg-destructive/5 text-center">
                <p className="font-sans text-sm text-destructive font-medium">
                    Failed to load contact submissions. You may not have admin permissions.
                </p>
                <button
                    onClick={() => refetch()}
                    className="mt-3 font-sans text-xs text-gold hover:underline"
                >
                    Try again
                </button>
            </div>
        );
    }

    return (
        <div className="mt-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <span className="font-sans text-sm text-muted-foreground">
                        Total submissions:
                    </span>
                    <Badge variant="secondary" className="font-sans font-semibold">
                        {allEntries.length}
                    </Badge>
                </div>
                <button
                    onClick={() => refetch()}
                    disabled={isFetching}
                    className="flex items-center gap-1.5 font-sans text-xs text-gold hover:text-gold-dark transition-colors disabled:opacity-50"
                >
                    <RefreshCw className={`w-3.5 h-3.5 ${isFetching ? 'animate-spin' : ''}`} />
                    Refresh
                </button>
            </div>

            {allEntries.length === 0 ? (
                <div className="text-center py-16 text-muted-foreground">
                    <MessageSquare className="w-10 h-10 mx-auto mb-3 opacity-30" />
                    <p className="font-sans text-sm">No contact submissions yet.</p>
                </div>
            ) : (
                <div className="overflow-x-auto rounded-xl border border-gold/20">
                    <table className="w-full text-sm font-sans">
                        <thead>
                            <tr className="bg-ivory-dark border-b border-gold/20">
                                <th className="text-left px-4 py-3 font-semibold text-foreground/70 text-xs uppercase tracking-wider">
                                    <span className="flex items-center gap-1.5">
                                        <User className="w-3.5 h-3.5" /> Name
                                    </span>
                                </th>
                                <th className="text-left px-4 py-3 font-semibold text-foreground/70 text-xs uppercase tracking-wider">
                                    <span className="flex items-center gap-1.5">
                                        <Mail className="w-3.5 h-3.5" /> Email
                                    </span>
                                </th>
                                <th className="text-left px-4 py-3 font-semibold text-foreground/70 text-xs uppercase tracking-wider hidden md:table-cell">
                                    <span className="flex items-center gap-1.5">
                                        <Phone className="w-3.5 h-3.5" /> Phone
                                    </span>
                                </th>
                                <th className="text-left px-4 py-3 font-semibold text-foreground/70 text-xs uppercase tracking-wider hidden lg:table-cell">
                                    Message
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {allEntries.map(({ entry }, idx) => (
                                <tr
                                    key={idx}
                                    className="border-b border-gold/10 hover:bg-gold/5 transition-colors"
                                >
                                    <td className="px-4 py-3.5 font-medium text-foreground">
                                        {entry.name}
                                    </td>
                                    <td className="px-4 py-3.5 text-foreground/70">
                                        <a
                                            href={`mailto:${entry.email}`}
                                            className="hover:text-gold transition-colors"
                                        >
                                            {entry.email}
                                        </a>
                                    </td>
                                    <td className="px-4 py-3.5 text-foreground/70 hidden md:table-cell">
                                        {entry.phone || '—'}
                                    </td>
                                    <td className="px-4 py-3.5 text-foreground/60 hidden lg:table-cell max-w-xs">
                                        <p className="truncate" title={entry.message}>
                                            {entry.message}
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

function NewsletterSubscribersTab() {
    const { data, isLoading, isError, refetch, isFetching } = useGetNewsletterSubscribers();

    if (isLoading) {
        return (
            <div className="space-y-3 mt-4">
                {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-12 w-full rounded-xl" />
                ))}
            </div>
        );
    }

    if (isError) {
        return (
            <div className="mt-4 p-6 rounded-xl border border-destructive/30 bg-destructive/5 text-center">
                <p className="font-sans text-sm text-destructive font-medium">
                    Failed to load newsletter subscribers. You may not have admin permissions.
                </p>
                <button
                    onClick={() => refetch()}
                    className="mt-3 font-sans text-xs text-gold hover:underline"
                >
                    Try again
                </button>
            </div>
        );
    }

    const emails = data ?? [];

    return (
        <div className="mt-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <span className="font-sans text-sm text-muted-foreground">
                        Total subscribers:
                    </span>
                    <Badge variant="secondary" className="font-sans font-semibold">
                        {emails.length}
                    </Badge>
                </div>
                <button
                    onClick={() => refetch()}
                    disabled={isFetching}
                    className="flex items-center gap-1.5 font-sans text-xs text-gold hover:text-gold-dark transition-colors disabled:opacity-50"
                >
                    <RefreshCw className={`w-3.5 h-3.5 ${isFetching ? 'animate-spin' : ''}`} />
                    Refresh
                </button>
            </div>

            {emails.length === 0 ? (
                <div className="text-center py-16 text-muted-foreground">
                    <Users className="w-10 h-10 mx-auto mb-3 opacity-30" />
                    <p className="font-sans text-sm">No newsletter subscribers yet.</p>
                </div>
            ) : (
                <div className="rounded-xl border border-gold/20 overflow-hidden">
                    <div className="bg-ivory-dark border-b border-gold/20 px-4 py-3">
                        <p className="font-sans text-xs font-semibold text-foreground/70 uppercase tracking-wider flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5" /> Email Address
                        </p>
                    </div>
                    <ul className="divide-y divide-gold/10">
                        {emails.map((email, idx) => (
                            <li
                                key={idx}
                                className="flex items-center gap-3 px-4 py-3.5 hover:bg-gold/5 transition-colors"
                            >
                                <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                                    <span className="font-sans text-xs font-bold text-gold">
                                        {email.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                                <a
                                    href={`mailto:${email}`}
                                    className="font-sans text-sm text-foreground/80 hover:text-gold transition-colors"
                                >
                                    {email}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default function AdminPortal() {
    const { identity, clear, loginStatus } = useInternetIdentity();
    const queryClient = useQueryClient();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const isAuthenticated = !!identity;
    const isLoggingIn = loginStatus === 'logging-in';

    if (!isAuthenticated && !isLoggingIn) {
        return <LoginScreen />;
    }

    if (isLoggingIn) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-8 h-8 animate-spin text-gold mx-auto mb-3" />
                    <p className="font-sans text-sm text-muted-foreground">Authenticating…</p>
                </div>
            </div>
        );
    }

    const handleLogout = async () => {
        setIsLoggingOut(true);
        await clear();
        queryClient.clear();
        setIsLoggingOut(false);
    };

    const principalShort = identity
        ? identity.getPrincipal().toString().slice(0, 12) + '…'
        : '';

    return (
        <div className="min-h-screen bg-background font-sans">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur-sm border-b border-gold/20 shadow-xs">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a href="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center">
                                <Star className="w-4 h-4 text-gold fill-gold/30" />
                            </div>
                            <div>
                                <div className="font-serif font-bold text-sm text-foreground leading-tight tracking-wide">
                                    SHRIMADHAV
                                </div>
                                <div className="font-sans text-[10px] text-gold tracking-widest uppercase leading-tight">
                                    Admin Portal
                                </div>
                            </div>
                        </a>

                        {/* Right side */}
                        <div className="flex items-center gap-3">
                            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="font-sans text-xs text-foreground/60 font-medium">
                                    {principalShort}
                                </span>
                            </div>
                            <button
                                onClick={handleLogout}
                                disabled={isLoggingOut}
                                className="flex items-center gap-1.5 font-sans text-sm font-medium text-foreground/70 hover:text-destructive transition-colors px-3 py-1.5 rounded-lg hover:bg-destructive/5 disabled:opacity-50"
                            >
                                {isLoggingOut ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                    <LogOut className="w-4 h-4" />
                                )}
                                <span className="hidden sm:inline">Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Page title */}
                <div className="mb-8">
                    <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                        Admin Dashboard
                    </h1>
                    <div className="gold-divider mt-3 mb-4 mx-0" style={{ margin: '12px 0 0 0' }} />
                    <p className="font-sans text-sm text-muted-foreground mt-3">
                        Manage contact submissions and newsletter subscribers for Shrimadhav Astrology.
                    </p>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="contacts">
                    <TabsList className="bg-ivory-dark border border-gold/20 rounded-full p-1 h-auto gap-1">
                        <TabsTrigger
                            value="contacts"
                            className="font-sans text-sm font-medium rounded-full px-5 py-2 data-[state=active]:bg-saffron data-[state=active]:text-white data-[state=active]:shadow-sm transition-all"
                        >
                            <MessageSquare className="w-4 h-4 mr-1.5 inline-block" />
                            Contact Submissions
                        </TabsTrigger>
                        <TabsTrigger
                            value="newsletter"
                            className="font-sans text-sm font-medium rounded-full px-5 py-2 data-[state=active]:bg-saffron data-[state=active]:text-white data-[state=active]:shadow-sm transition-all"
                        >
                            <Users className="w-4 h-4 mr-1.5 inline-block" />
                            Newsletter Subscribers
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="contacts">
                        <ContactSubmissionsTab />
                    </TabsContent>

                    <TabsContent value="newsletter">
                        <NewsletterSubscribersTab />
                    </TabsContent>
                </Tabs>
            </main>

            {/* Footer */}
            <footer className="border-t border-gold/20 mt-16 py-6">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="font-sans text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Shrimadhav Astrology. All rights reserved.
                    </p>
                    <p className="font-sans text-xs text-muted-foreground">
                        Built with ❤️ using{' '}
                        <a
                            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold hover:underline"
                        >
                            caffeine.ai
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
}
