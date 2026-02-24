import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Courses from './components/Courses';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
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
