import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import MarketingConnection from './components/MarketingConnection.jsx';
import Work from './components/Work.jsx';
import Clients from './components/Clients.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <MarketingConnection />
        <Work />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
