import { useLanguage } from '../context/LanguageContext.jsx';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switch" role="group" aria-label="Language switcher">
      <button
        className={lang === 'ar' ? 'is-active' : ''}
        onClick={() => setLang('ar')}
        aria-pressed={lang === 'ar'}
      >
        العربية
      </button>
      <span aria-hidden="true">|</span>
      <button
        className={lang === 'en' ? 'is-active' : ''}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  );
}
