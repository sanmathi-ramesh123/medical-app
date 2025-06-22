// src/components/LanguageSelection.jsx
import React from 'react';
import bgImage from '../images/medapp.png';
import translations from '../locales/translations';

const languages = [
  { code: 'ta', name: 'தமிழ்' },
  { code: 'en', name: 'English' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'mr', name: 'मराठी' },
  { code: 'ur', name: 'اردو' },
  { code: 'ml', name: 'മലയാളം' },
  { code: 'as', name: 'অসমীয়া' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  { code: 'gu', name: 'ગુજરાતી' },
  { code: 'sa', name: 'संस्कृतम्' },
];

const LanguageSelection = ({ onSelectLanguage }) => {
  const defaultLang = 'en'; // or use navigator.language.split('-')[0]
  const t = translations[defaultLang];

  return (
    <section
      className="vh-100 d-flex flex-column justify-content-center align-items-center px-3"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backdropFilter: 'brightness(0.9)',
      }}
    >
      <div className="text-center text-dark">
        <h2 className="mb-4 text-dark fw-bold">{t.selectLanguage}</h2>

        <div className="container">
          <div className="row justify-content-center">
            {languages.map((lang) => (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3" key={lang.code}>
                <button
                  className="btn btn-primary w-100 py-2"
                  onClick={() => onSelectLanguage(lang.code)}
                >
                  {lang.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageSelection;
