import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Courses from './components/Courses';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminPortal from './pages/AdminPortal';

function HomeLayout() {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Courses />
                <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

const rootRoute = createRootRoute({
    component: Outlet,
});

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: HomeLayout,
});

const adminRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/admin',
    component: AdminPortal,
});

const routeTree = rootRoute.addChildren([homeRoute, adminRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

export default function App() {
    return <RouterProvider router={router} />;
}
