import { useLanguage } from '../context/LanguageContext.jsx';
import { hero, siteInfo } from '../data/content.js';
import './hero.css';

function whatsappHref() {
  return `https://wa.me/${siteInfo.whatsapp.replace(/[^\d]/g, '')}`;
}

export default function Hero() {
  const { t } = useLanguage();

  const scrollToWork = () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1 className="hero__name">
            {t(siteInfo.name)}
            <span className="hero__profession">{t(siteInfo.profession)}</span>
          </h1>

          <p className="hero__intro">{t(hero.intro)}</p>
          <p className="hero__supporting">{t(hero.supportingLine)}</p>

          <div className="hero__actions">
            <button className="btn btn--primary" onClick={scrollToWork}>
              {t(hero.ctaPrimary)}
            </button>
            <a className="btn btn--ghost" href={whatsappHref()} target="_blank" rel="noreferrer">
              {t(hero.ctaSecondary)}
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          <img src={siteInfo.portraitImage} alt={t(siteInfo.name)} loading="eager" />
        </div>
      </div>

      <div className="container">
        <p className="hero__credo">{t(hero.credo)}</p>
      </div>
    </section>
  );
}
