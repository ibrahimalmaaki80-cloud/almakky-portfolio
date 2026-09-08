import { useLanguage } from '../context/LanguageContext.jsx';
import { services, servicesCta, servicesIntro, siteInfo } from '../data/content.js';
import { useReveal } from '../hooks/useReveal.js';
import './services.css';

function whatsappHref(service, lang) {
  const message =
    lang === 'ar'
      ? `مرحبًا إبراهيم، أرغب في مناقشة مشروع: ${service.name.ar}`
      : `Hi Ibrahim, I'd like to discuss a project: ${service.name.en}`;
  const digits = siteInfo.whatsapp.replace(/[^\d]/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

function ServiceCard({ service, index, lang, t }) {
  const revealRef = useReveal();

  return (
    <article className="service-card reveal" ref={revealRef}>
      <span className="service-card__index">{String(index + 1).padStart(2, '0')}</span>
      <h3>{t(service.name)}</h3>
      <p className="service-card__description">{t(service.description)}</p>

      <div className="service-card__best-for">
        <span className="service-card__best-for-label">
          {lang === 'ar' ? 'الأنسب لـ' : 'Best for'}
        </span>
        <ul>
          {service.bestFor.map((tag) => (
            <li key={tag.en}>{t(tag)}</li>
          ))}
        </ul>
      </div>

      <a
        className="service-card__cta"
        href={whatsappHref(service, lang)}
        target="_blank"
        rel="noreferrer"
      >
        {t(servicesCta)} →
      </a>
    </article>
  );
}

export default function Services() {
  const { t, lang } = useLanguage();

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="services__intro">
          <p className="eyebrow">{t(servicesIntro.eyebrow)}</p>
          <h2>{t(servicesIntro.headline)}</h2>
          <p className="services__supporting">{t(servicesIntro.supporting)}</p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} lang={lang} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
