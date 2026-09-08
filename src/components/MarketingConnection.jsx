import { useLanguage } from '../context/LanguageContext.jsx';
import { marketingFlow } from '../data/content.js';
import { useReveal } from '../hooks/useReveal.js';
import './marketing-connection.css';

export default function MarketingConnection() {
  const { t } = useLanguage();
  const revealRef = useReveal();

  return (
    <section className="section marketing">
      <div className="container">
        <p className="eyebrow">{t(marketingFlow.eyebrow)}</p>
        <h2 className="marketing__title">{t(marketingFlow.title)}</h2>

        <div className="marketing__flow reveal" ref={revealRef}>
          {marketingFlow.steps.map((step, i) => (
            <div
              key={step.en}
              className={`marketing__step ${i === marketingFlow.highlightIndex ? 'is-highlighted' : ''}`}
            >
              <span className="marketing__step-number">{String(i + 1).padStart(2, '0')}</span>
              <span className="marketing__step-label">{t(step)}</span>
            </div>
          ))}
        </div>

        <p className="marketing__note">{t(marketingFlow.note)}</p>
      </div>
    </section>
  );
}
