import { useLanguage } from '../context/LanguageContext.jsx';
import { brands, workSection } from '../data/content.js';
import BrandProject from './BrandProject.jsx';

export default function Work() {
  const { t } = useLanguage();

  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="work__intro">
          <p className="eyebrow">{t(workSection.eyebrow)}</p>
          <h2>{t(workSection.title)}</h2>
          <p className="work__subtitle">{t(workSection.subtitle)}</p>
        </div>

        <div className="work__list">
          {brands.map((brand, i) => (
            <BrandProject key={brand.id} brand={brand} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
