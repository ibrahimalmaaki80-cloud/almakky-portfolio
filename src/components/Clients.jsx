import { useLanguage } from '../context/LanguageContext.jsx';
import { brands, clientsSection } from '../data/content.js';
import './clients.css';

export default function Clients() {
  const { t } = useLanguage();

  return (
    <section id="clients" className="section section--tight clients">
      <div className="container">
        <p className="eyebrow">{t(clientsSection.eyebrow)}</p>
        <h2>{t(clientsSection.title)}</h2>

        <ul className="clients__list">
          {brands.map((brand) => (
            <li key={brand.id}>{brand.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
