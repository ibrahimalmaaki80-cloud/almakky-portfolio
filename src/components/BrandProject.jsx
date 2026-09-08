import { useLanguage } from '../context/LanguageContext.jsx';
import MediaCarousel from './MediaCarousel.jsx';
import { workSection } from '../data/content.js';
import { useReveal } from '../hooks/useReveal.js';
import './brand-project.css';

export default function BrandProject({ brand, index }) {
  const { t } = useLanguage();
  const revealRef = useReveal();

  const infoItems = [
    { label: { ar: 'المشروع', en: 'Project' }, value: t(brand.tagline) },
    { label: { ar: 'السنة', en: 'Year' }, value: brand.year },
    { label: { ar: 'الموقع', en: 'Location' }, value: t(brand.location) },
    { label: { ar: 'الدور', en: 'Role' }, value: t(brand.role) },
  ].filter((item) => item.value);

  return (
    <article className="brand-project reveal" ref={revealRef}>
      <header className="brand-project__header">
        <span className="brand-project__index">{String(index + 1).padStart(2, '0')}</span>
        <div className="brand-project__identity">
          {brand.logo && <img className="brand-project__logo" src={brand.logo} alt={`${brand.name} logo`} />}
          <div>
            <h3>{brand.name}</h3>
            <p className="brand-project__tagline">{t(brand.tagline)}</p>
          </div>
        </div>
      </header>

      <MediaCarousel media={brand.media} label={brand.name} emptyMessage={t(workSection.emptyMediaNote)} />

      <div className="brand-project__info">
        {infoItems.length > 0 && (
          <dl className="brand-project__facts">
            {infoItems.map((item) => (
              <div key={item.label.en}>
                <dt>{t(item.label)}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        )}
        <p className="brand-project__description">{t(brand.description)}</p>
      </div>
    </article>
  );
}
