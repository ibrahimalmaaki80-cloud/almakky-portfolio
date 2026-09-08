import { useLanguage } from '../context/LanguageContext.jsx';
import { contact, siteInfo } from '../data/content.js';
import './contact.css';

export default function Contact() {
  const { t } = useLanguage();
  const whatsappHref = `https://wa.me/${siteInfo.whatsapp.replace(/[^\d]/g, '')}`;
  const emailHref = `mailto:${siteInfo.email}`;

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <p className="eyebrow">{t(contact.eyebrow)}</p>
        <h2>{t(contact.headline)}</h2>

        <div className="contact__ctas">
          <a className="btn btn--primary" href={whatsappHref} target="_blank" rel="noreferrer">
            {t(contact.whatsappLabel)}
          </a>
          <a className="btn btn--ghost" href={emailHref}>
            {t(contact.emailLabel)}
          </a>
        </div>

        <div className="contact__social">
          <a href={siteInfo.instagram} target="_blank" rel="noreferrer">
            {t(contact.instagramLabel)}
          </a>
          <a href={siteInfo.behance} target="_blank" rel="noreferrer">
            {t(contact.behanceLabel)}
          </a>
        </div>
      </div>
    </section>
  );
}
