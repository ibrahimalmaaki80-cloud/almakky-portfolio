import { useLanguage } from '../context/LanguageContext.jsx';
import { about, siteInfo } from '../data/content.js';
import { useReveal } from '../hooks/useReveal.js';
import './about.css';

export default function About() {
  const { t, lang } = useLanguage();
  const revealRef = useReveal();

  const bio = lang === 'ar' ? about.bioAr : about.bioEn;

  const fields = [
    { label: { ar: 'المهنة', en: 'Profession' }, value: t(siteInfo.profession) },
    { label: { ar: 'البداية', en: 'Started' }, value: t(siteInfo.since) },
    { label: { ar: 'الموقع', en: 'Location' }, value: t(siteInfo.location) },
    { label: { ar: 'تاريخ الميلاد', en: 'Born' }, value: t(siteInfo.dob) },
  ];

  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__images" ref={revealRef}>
          <div className="about__image about__image--primary">
            <img src={about.imagePrimary} alt={t(siteInfo.name)} loading="lazy" />
          </div>
          <div className="about__image about__image--secondary">
            <img src={about.imageSecondary} alt={t(siteInfo.name)} loading="lazy" />
          </div>
        </div>

        <div className="about__content">
          <p className="eyebrow">{t(about.title)}</p>
          <h2 className="about__name">
            {t(siteInfo.name)}
            <span>{t(siteInfo.profession)}</span>
          </h2>

          <dl className="about__fields">
            {fields.map((f) => (
              <div key={f.label.en}>
                <dt>{t(f.label)}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="about__bio">
            {bio.map((paragraph, i) =>
              paragraph === '__HIGHLIGHT__' ? (
                <p className="about__highlight" key={i}>
                  {t(about.highlight)}
                </p>
              ) : (
                <p key={i}>{paragraph}</p>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
