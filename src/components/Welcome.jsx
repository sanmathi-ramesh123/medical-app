// src/components/Welcome.jsx
import React from 'react';
import bgImage from '../images/medapp.png';
import translations from '../locales/translations';

const Welcome = ({ onNext, language }) => {
  const t = translations[language] || translations.en;

  return (
    <section
      className="vh-100 d-flex flex-column justify-content-center align-items-center text-center px-3"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backdropFilter: 'brightness(0.9)',
      }}
    >
      <h1 className="display-4 mb-3 text-dark fw-bold">{t.welcomeTitle}</h1>
      <p className="lead mb-4 text-dark fw-bold" style={{ maxWidth: '600px' }}>
        {t.welcomeText || t.welcomeSubtitle}
      </p>
      <button className="btn btn-primary btn-lg" onClick={onNext}>
        {t.getStarted}
      </button>
    </section>
  );
};

export default Welcome;
