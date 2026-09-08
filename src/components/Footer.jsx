import { useLanguage } from '../context/LanguageContext.jsx';
import { footer, siteInfo } from '../data/content.js';
import './footer.css';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__row">
        <span className="site-footer__logo">{t(siteInfo.shortName)}</span>
        <span className="site-footer__rights">
          © {year} {t(siteInfo.name)} — {t(footer.rights)}
        </span>
      </div>
    </footer>
  );
}
