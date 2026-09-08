import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { nav, siteInfo } from '../data/content.js';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import './header.css';

const links = [
  { id: 'home', label: nav.home },
  { id: 'about', label: nav.about },
  { id: 'services', label: nav.services },
  { id: 'work', label: nav.work },
  { id: 'clients', label: nav.clients },
  { id: 'contact', label: nav.contact },
];

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container site-header__row">
        <a
          href="#home"
          className="site-header__logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
        >
          <span className="site-header__logo-ar">{t(siteInfo.shortName)}</span>
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          {links.map((link) => (
            <button key={link.id} onClick={() => handleNavClick(link.id)}>
              {t(link.label)}
            </button>
          ))}
        </nav>

        <div className="site-header__actions">
          <LanguageSwitcher />
          <button
            className="site-header__burger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`site-header__mobile ${menuOpen ? 'is-open' : ''}`}>
        {links.map((link) => (
          <button key={link.id} onClick={() => handleNavClick(link.id)}>
            {t(link.label)}
          </button>
        ))}
      </div>
    </header>
  );
}
